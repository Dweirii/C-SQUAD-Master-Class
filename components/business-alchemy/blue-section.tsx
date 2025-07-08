import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen py-7 mb-24 mt-2" style={{ backgroundColor: "#14697A" }}>
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-2xl lg:text-3xl font-bold text-white mb-8 items-center text-center"
            dir="rtl"
          >
            جاهز للنجاح؟ انضم لبرنامجنا الآن!
          </h1>

          {/* Description Paragraph */}
          <p
            className="text-white text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center"
            dir="rtl"
          >
            في هذا الإصدار الجديد والمبتكر من برنامجنا، قررنا تعزيز تجربتك بإضافة جانب جديد للتجربة. في خلال الـ 8
            أسابيع الأولى، ستعمل مع اثنين من الخبراء في مجالي تطوير الأعمال والتطوير الذاتي لضمان حصولك على جميع
            المستويات واستكمال رحلتك بسلاسة للعام الأول من نجاح مشروعك.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Pricing Card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="border-2 border-white/50 rounded-none p-8">
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="text-center p-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Business Alchemy</h2>
                    <div className="relative mb-4">
                      <span className="text-3xl md:text-4xl font-bold text-white/70 line-through">3000$</span>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white">1500$</div>
                  </CardContent>
                </Card>
            </div>
          </div>

          {/* Program Details */}
          <div className="w-full lg:w-1/2 text-white space-y-6" dir="rtl">
            <p className="text-lg md:text-xl leading-relaxed">
              رحلتك تبدأ الآن مع <span className="font-bold">Business Alchemy</span>! <br/>
              التسجيل متاح فقط خلال 10 أيام، البرنامج <br/>ينطلق في أبريل و مايو "بعد رمضان" والمقاعد محدودة.
            </p>

            <p className="text-lg md:text-xl leading-relaxed font-bold pb-3">
              توقيت مثالي لوضع خطط جديدة والانطلاق بقوة في:
            </p>

            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-white text-xl">•</span>
                <span>رحلة متكاملة تجمع بين العقلية الريادية والذهنية المتزنة.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-xl">•</span>
                <span>تعلم كيف تبني مشروعك بخطوات إبداعية وعملية.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-xl">•</span>
                <span>التغلب على العقبات الداخلية مثل الخوف والتردد.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-xl">•</span>
                <span>وجود مدربين متخصصين لتقديم الإرشاد الشخصي والجماعي، مع تركيز على نتائج ملموسة.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-xl">•</span>
                <span>نحن ندمج أفضل منهجيات الإبداع والابتكار من وادي السيليكون مع</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-xl">•</span>
                <span>سياق ثقافتنا العربية فهما يجعل التجربة فريدة ومؤثرة.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
