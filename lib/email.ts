import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendInnovationEmail({
  email,
  name,
  isPaid,
}: {
  email: string
  name: string
  isPaid: boolean
}) {
  const subject = "تأكيد تسجيلك في The Innovation Code – جاهز للانطلاقة؟ 🚀"

  const html = `
  <html dir="rtl" lang="ar">
    <body style="direction: rtl; text-align: right; font-family: 'Tahoma', 'Cairo', sans-serif; background-color: #ffffff; color: #000000; margin: 0;">
      <div style="background-color: #ffffff; color: #333; padding: 24px;">
        <h2 style="margin-bottom: 16px; color: #333;">مرحباً ${name}،</h2>

        <p style="color: #333;">تم تأكيد تسجيلك في الماستر كلاس<br/>
        <strong>The Innovation Code</strong><br/>
        والذي يُقام عبر منصة Zoom يومي <strong>الجمعة والسبت، 11 و12 يوليو 2025</strong><br/>
        من الساعة <strong>6:00 مساءً حتى 9:00 مساءً</strong> بتوقيت مكة.</p>

        <p style="color: #333;"><strong>خلال يومين، ستُعيد تصميم مشروعك أو فكرتك من الصفر باستخدام:</strong></p>
        <ul style="padding-right: 20px; color: #333;">
          <li>منهجية التفكير التصميمي.</li>
          <li>أدوات الذكاء الاصطناعي.</li>
          <li>نماذج مُعتمدة من وادي السيليكون.</li>
        </ul>

        <p style="color: #333;"><strong>ما الذي ينتظرك في The Innovation Code؟</strong></p>
        <ul style="padding-right: 20px; color: #333;">
          <li>تصمّم مشروعك أو تطوّر فكرتك باستخدام منهجية التفكير التصميمي.</li>
          <li>تحوّل شغفك إلى عرض بيع مقنع ومربح.</li>
          <li>تستفيد من أدوات الذكاء الاصطناعي لتسريع قراراتك وتنظيم خطواتك القادمة.</li>
          <li>تفهم احتياجات جمهورك وتُقدّم حلولاً واقعية تلامسهم.</li>
          <li>تخرج بذهنية ريادية جديدة تمنحك وضوحاً داخلياً وخارطة طريق عملية.</li>
        </ul>

        <p style="color: #333;"><strong>🎁 هدية خاصة للمشتركين:</strong></p>
          <ul style="padding-right: 20px; color: #333;">
          <li>دليل الانطلاقة بذكاء" – إصدار عملي يساعدك على اكتشاف شغفك، تحويله إلى فكرة واضحة، ثم إلى مشروع حقيقي بأسلوب مبسّط ومنهجي، باستخدام تمارين التفكير التصميمي.</li>
          <li>شهادة حضور باسمك بعد انتهاء الجلسات.</li>
        </ul>
        <p style="color: #333;"> </p>

        <p style="color: #333;"> رابط Zoom للدخول إلى الجلسة:
        <a href="https://us06web.zoom.us/meeting/register/g5rpPJQqQOmvJxiBzqSomw" text-decoration: none;">[رابط الزوم هنا]</a></p>

        <p style="color: #333;"> في حال واجهت أي مشكلة، تواصل معنا عبر :
        <a href="https://wa.me/962790719021" text-decoration: none;">الواتساب</a></p>

        <p style="color: #333; margin-top: 24px;">بانتظارك في رحلة مليئة بالإبداع والتحوّل 💡<br/>
        مع التحية،<br/>
        فريق C-Squad</p>
      </div>
    </body>
  </html>
  `

  return resend.emails.send({
    from: "C-Squad <programs@c-squad.org>",
    to: email,
    subject,
    html,
  })
}
