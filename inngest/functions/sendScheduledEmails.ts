// /inngest/functions/sendScheduledEmails.ts
import { inngest } from "@/lib/inngest";
import { resend } from "@/lib/resend";
import { prisma } from "@/lib/prisma";

export const sendScheduledEmails = inngest.createFunction(
  { id: "send-scheduled-emails" },
  { cron: "*/1 * * * *" }, // كل دقيقة
  async ({ event, step }) => {
    const now = new Date();

    const scheduledEmails = await prisma.scheduledEmail.findMany({
      where: {
        status: "pending",
        scheduledAt: { lte: now },
      },
    });

    for (const email of scheduledEmails) {
      let users = [];

      if (email.type === "free") {
        users = await prisma.freeOrder.findMany({ select: { email: true, name: true } });
      } else if (email.type === "paid") {
        users = await prisma.paidOrder.findMany({
          where: { paymentStatus: "paid" },
          select: { email: true, name: true },
        });
      } else {
        users = await prisma.paidOrder.findMany({
          where: { paymentStatus: { not: "paid" } },
          select: { email: true, name: true },
        });
      }

      for (const user of users) {
        await resend.emails.send({
          from: "C-Squad <programs@c-squad.org>",
          to: user.email,
          subject: email.subject,
          html: email.html.replace("{{name}}", user.name || "مشارك"),
        });
      }

      await prisma.scheduledEmail.update({
        where: { id: email.id },
        data: { status: "sent" },
      });
    }

    return { sent: scheduledEmails.length };
  }
);
