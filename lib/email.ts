import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendInnovationEmail({
    email,
    name,
    isPaid
}:{
    email: string
    name: string
    isPaid: boolean
}) {
      const subject = isPaid
    ? 'تأكيد تسجيلك في The Innovation Code – جاهز للانطلاقة؟ 🚀'
    : 'تسجيلك المجاني تم بنجاح في The Innovation Code 🎉'

      const message = `
  <p>مرحباً ${name}،</p>

  <p>يسعدنا إبلاغك بأنه تم تأكيد ${isPaid ? 'اشتراكك الكامل' : 'تسجيلك المجاني'} في الماستر كلاس "The Innovation Code" والذي يُقام عبر منصة Zoom يومي الجمعة والسبت، 11 و12 يوليو 2025 من الساعة 6:00 مساءً حتى 9:00 مساءً بتوقيت مكة.</p>

  <p>خلال يومين عمليّين، ستتعلم كيف:</p>
  <ul>
    <li>تصمّم مشروعك أو تطوّر فكرتك باستخدام منهجية التفكير التصميمي.</li>
    <li>تحوّل شغفك إلى عرض بيع مقنع ومربح.</li>
    <li>تستفيد من أدوات الذكاء الاصطناعي لتسريع قراراتك.</li>
    <li>تفهم جمهورك وتقدّم حلول واقعية تلامسهم.</li>
    <li>تخرج بذهنية ريادية جديدة تمنحك وضوحًا داخليًا وخارطة طريق عملية.</li>
  </ul>

  <p>🎁 هدية خاصة: "دليل الانطلاقة بذكاء"</p>
  <p>📄 كما ستحصل على شهادة حضور إلكترونية باسمك بعد انتهاء الجلسة.</p>

  <p>🔗 رابط Zoom للجلسة: <a href="https://us06web.zoom.us/meeting/register/g5rpPJQqQOmvJxiBzqSomw">اضغط هنا</a></p>

  <p>📱 انضم لجروب واتساب لتصلك التحديثات: <a href="https://chat.whatsapp.com/KdKEhT9Pj37JQOXEJZwQdx">انقر هنا</a></p>
  <p>📩 في حال واجهت مشكلة، تواصل معنا عبر الواتساب: <a href="https://wa.me/962790719021">اضغط هنا</a></p>

  <p>بانتظارك في رحلة مليئة بالإبداع 💡</p>
  <br/>
  <p>مع التحية،<br/>فريق C-Squad</p>
  `
    return resend.emails.send({
        from: `C-SQUAD <programs@c-squad.org>`,
        to: email,
        subject,
        html: message,
    })
}