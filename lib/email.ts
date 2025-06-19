import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendInnovationEmail({
  email,
  name,
}: {
  email: string
  name: string
}) {
  const subject = 'تأكيد تسجيلك في The Innovation Code – جاهز للانطلاقة؟ 🚀'

  const html = `
  <html dir="rtl" lang="ar">
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
        body {
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          text-align: right;
          background-color: #f9f9f9;
          padding: 24px;
          color: #222;
        }
        .container {
          background: #fff;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 0 8px rgba(0,0,0,0.05);
          max-width: 600px;
          margin: auto;
        }
        .button {
          background-color: #FC8A0A;
          color: white;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          display: inline-block;
          margin-top: 16px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>مرحباً ${name}،</h2>
        <p>🎉 تم تأكيد اشتراكك المدفوع في الماستر كلاس <strong>The Innovation Code</strong>.</p>
        <p>🔗 <a class="button" href="https://us06web.zoom.us/meeting/register/g5rpPJQqQOmvJxiBzqSomw">الدخول إلى Zoom</a></p>
        <p>📱 <a href="https://chat.whatsapp.com/KdKEhT9Pj37JQOXEJZwQdx">الانضمام لجروب WhatsApp</a></p>
        <p>📩 لأي استفسار، تواصل معنا عبر <a href="https://wa.me/962790719021">الواتساب</a>.</p>
        <br/>
        <p>مع التحية،<br/>فريق C-Squad</p>
      </div>
    </body>
  </html>
  `

  return await resend.emails.send({
    from: 'programs@c-squad.org',
    to: email,
    subject,
    html,
  })
}
