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
    <head>
      <meta charset="UTF-8" />
      <title>${subject}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
        body {
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          text-align: right;
          background-color: #f9f9f9;
          color: #222;
          padding: 24px;
        }
        .container {
          background-color: #ffffff;
          padding: 32px;
          border-radius: 8px;
          max-width: 600px;
          margin: auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .cta-button {
          background-color: #FC8A0A;
          color: white;
          padding: 12px 20px;
          border-radius: 6px;
          display: inline-block;
          margin: 16px 0;
          text-decoration: none;
          font-weight: bold;
        }
        a {
          color: #FC8A0A;
          text-decoration: none;
        }
        ul {
          padding-right: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>مرحباً ${name}،</h2>

        <p>
          تم تأكيد تسجيلك في الماستر كلاس "The Innovation Code" والذي يُقام عبر منصة Zoom يومي
          <strong>الجمعة والسبت، 11 و12 يوليو 2025</strong> ⏰ من الساعة <strong>6:00 مساءً حتى 9:00 مساءً</strong> بتوقيت مكة.
        </p>

        <p>خلال يومين، ستُعيد تصميم مشروعك أو فكرتك من الصفر باستخدام:</p>
        <ul>
          <li>منهجية التفكير التصميمي.</li>
          <li>أدوات الذكاء الاصطناعي.</li>
          <li>نماذج مُعتمدة من وادي السيليكون.</li>
        </ul>

        <p>ما الذي ينتظرك في The Innovation Code؟</p>
        <ul>
          <li>تصمّم مشروعك أو تطوّر فكرتك باستخدام منهجية التفكير التصميمي.</li>
          <li>تحوّل شغفك إلى عرض بيع مقنع ومربح.</li>
          <li>تستفيد من أدوات الذكاء الاصطناعي لتسريع قراراتك وتنظيم خطواتك القادمة.</li>
          <li>تفهم احتياجات جمهورك وتُقدّم حلولاً واقعية تلامسهم.</li>
          <li>تخرج بذهنية ريادية جديدة تمنحك وضوحاً داخلياً وخارطة طريق عملية.</li>
        </ul>

        <p>
          🎁 <strong>هدية خاصة:</strong> "دليل الانطلاقة بذكاء" – إصدار عملي يساعدك على اكتشاف شغفك، وتحويله إلى فكرة واضحة ثم إلى مشروع حقيقي بأسلوب مبسّط ومنهجي.
        </p>

        <p>📄 كما ستحصل على شهادة حضور إلكترونية باسمك بعد انتهاء الجلسة.</p>

        <p>🔗 رابط Zoom للجلسة:</p>
        <a href="https://us06web.zoom.us/meeting/register/g5rpPJQqQOmvJxiBzqSomw" class="cta-button">دخول الجلسة عبر Zoom</a>

        <p>📱 انضم إلى مجموعة واتساب للمشاركين لتصلك التحديثات:</p>
        <a href="https://chat.whatsapp.com/KdKEhT9Pj37JQOXEJZwQdx">انقر هنا للانضمام للمجموعة</a>

        <p>📩 في حال واجهت أي مشكلة، تواصل معنا عبر الواتساب:</p>
        <a href="https://wa.me/962790719021">https://wa.me/962790719021</a>

        <br/><br/>
        <p>بانتظارك في رحلة مليئة بالإبداع والتحوّل 💡</p>
        <p>مع التحية،<br/>فريق C-Squad</p>
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
