import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest";
import { sendScheduledEmails } from "@/inngest/functions/sendScheduledEmails";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [sendScheduledEmails],
});