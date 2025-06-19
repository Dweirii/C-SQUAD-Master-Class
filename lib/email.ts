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
  const subject = isPaid
    ? "تأكيد تسجيلك في The Innovation Code – جاهز للانطلاقة؟ 🚀"
    : "تسجيلك المجاني تم بنجاح في The Innovation Code 🎉"
const html = `
<html dir="rtl" lang="ar">
  <body style="direction: rtl; text-align: right; font-family: 'Tahoma', 'Cairo', sans-serif; background-color: #ffffff; color: #000000; margin: 0;">
    <div style="background-color: #ffffff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); color: #000000;">
      <h2 style="margin-bottom: 16px; color: #000000;">مرحباً ${name}،</h2>

      <p style="color: #000000;">
        تم تأكيد تسجيلك في الماستر كلاس <strong>"The Innovation Code"</strong> والذي يُقام عبر منصة Zoom يومي
        <strong>الجمعة والسبت، 11 و12 يوليو 2025</strong><br/>
        ⏰ من الساعة <strong>6:00 مساءً حتى 9:00 مساءً</strong> بتوقيت مكة.
      </p>

      <p style="color: #000000;">خلال يومين، ستُعيد تصميم مشروعك أو فكرتك من الصفر باستخدام:</p>
      <ul style="padding-right: 20px; color: #000000;">
        <li>منهجية التفكير التصميمي.</li>
        <li>أدوات الذكاء الاصطناعي.</li>
        <li>نماذج مُعتمدة من وادي السيليكون.</li>
      </ul>

      <p style="color: #000000;">ما الذي ينتظرك في The Innovation Code؟</p>
      <ul style="padding-right: 20px; color: #000000;">
        <li>تصمّم مشروعك أو تطوّر فكرتك باستخدام التفكير التصميمي.</li>
        <li>تحوّل شغفك إلى عرض بيع مقنع ومربح.</li>
        <li>تستفيد من أدوات الذكاء الاصطناعي لتسريع قراراتك وتنظيم خطواتك القادمة.</li>
        <li>تفهم جمهورك وتقدّم حلولًا تلامسهم بواقعية.</li>
        <li>تخرج بذهنية ريادية جديدة واضحة وعملية.</li>
      </ul>

      <p style="color: #000000;">
        🎁 <strong>هدية خاصة:</strong> "دليل الانطلاقة بذكاء" – إصدار عملي يساعدك على اكتشاف شغفك وتحويله إلى مشروع حقيقي بأسلوب منهجي.
      </p>

      <p style="color: #000000;">📄 ستحصل على شهادة حضور إلكترونية باسمك بعد انتهاء الجلسة.</p>

      <p style="color: #000000;">🔗 رابط الدخول إلى الجلسة عبر Zoom:</p>
      <a href="https://us06web.zoom.us/meeting/register/g5rpPJQqQOmvJxiBzqSomw" style="display: inline-block; padding: 10px 20px; color: #14697A;; text-decoration: none;">[الرابط]</a>

      <p style="color: #000000;">📱 للانضمام إلى مجموعة واتساب الخاصة بالمشاركين:</p>
      <a href="https://chat.whatsapp.com/KdKEhT9Pj37JQOXEJZwQdx" style="display: inline-block; padding: 10px 20px; color:#14697A;; text-decoration: none;">[الرابط]</a>

      <p style="color: #000000;">📩 في حال واجهت أي مشكلة، راسلنا مباشرة:</p>
      <a href="https://wa.me/962790719021" style="color: #14697A;">الوصول عبر واتساب</a>

      <div style="margin-top: 24px; font-size: 14px; color: #000000;">
        بانتظارك في رحلة مليئة بالإبداع والتحوّل 💡<br/>
        مع التحية،<br/>
        فريق C-Squad
      </div>
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
