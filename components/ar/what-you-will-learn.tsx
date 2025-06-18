import { Check } from "lucide-react"
import Image from "next/image"

export default function MasterclassBenefitsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 lg:mt-10">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-[#FC8A0A] leading-tight mb-6">
            على ماذا ستحصل خلال يومين فقط؟
          </h2>
          <div className="text-gray-700 text-lg sm:text-xl max-w-4xl mx-auto font-medium">
            <p>هذا الماستر كلاس يتكوّن من جلستين تفاعليّتين، كل جلسة مدّتها ٣ ساعات، تُشكّل مدخلًا عمليًا</p>
            <p>لعالم الابتكار والإبداع، وبوّابةً لفهم حقيقيّ لأساسيات البزنس وبناؤه بطريقة ذكيّة.</p>
          </div>
        </div>

        {/* Main 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 items-start">
          {/* Right Column - 3 Benefits (Order in code for RTL display) */}
          <div className="space-y-10 text-right lg:order-1 pt-10">
            {/* Benefit 1 */}
            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-[#F7F7FA] rounded-full p-3">
                  <div className="bg-[#FC8A0A] rounded-full p-1">
                    <Check className="w-4 h-4 text-white stroke-[3px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">أسس بناء مشروع ناجح</h3>
              <p className="text-gray-600 text-base text-center leading-relaxed">
                ستكتشف الأسس العملية التي تعتمدها
                <br />
                الشركات الرائدة عالمياً لبناء مشاريع فعّالة
                <br />
                ومستقرة، مهما كانت نقطة بدايتك.
              </p>
            </div>

            {/* Benefit 2 */}
            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-[#F7F7FA] rounded-full p-3">
                  <div className="bg-[#FC8A0A] rounded-full p-1">
                    <Check className="w-5 h-5 text-white stroke-[3px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">مدخل عميق إلى التفكير التصميمي</h3>
              <p className="text-gray-600 text-base  text-center">
                فهم منهجية التفكير التصميمي
                <br />
                وأهميتها في تحليل احتياجات العملاء وبناء
                <br />
                حلول واقعية تلامسهم وتُشبعهم.
              </p>
            </div>

            {/* Benefit 3 */}
            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-[#F7F7FA] rounded-full p-3"> 
                  <div className="bg-[#FC8A0A] rounded-full p-1">
                    <Check className="w-5 h-5 text-white stroke-[3px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تحويل الفكرة إلى عرض بيع فعلي</h3>
              <p className="text-gray-600 text-base  text-center">
                تعلّم كيف تُحوّل فكرتك أو مهارتك إلى
                <br />
                عرض بيع جذّاب يُقنع، حتى لو كنت تبدأ من
                <br />
                نقطة الصفر.
              </p>
            </div>
          </div>

          {/* Center Column - Image */}
          <div className="flex justify-center items-start lg:order-2">
            <div className="p-3 rounded-md">
              <Image
                src="/Masterclass.png"
                alt="Team collaboration"
                width={500}
                height={800}
                className="w-full h-auto rounded-sm max-w-md lg:max-w-xs xl:max-w-sm"
              />
            </div>
          </div>

          {/* Left Column - 3 Benefits (Order in code for RTL display) */}
          <div className="space-y-10 text-right lg:order-3 pt-10">
            {/* Benefit 1 */}
            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-[#F7F7FA] rounded-full p-3">
                  <div className="bg-[#FC8A0A] rounded-full p-1">
                    <Check className="w-5 h-5 text-white stroke-[3px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">أمثلة واقعية ونقاشات حيّة</h3>
              <p className="text-gray-600 text-base  text-center">
                تفاعل مباشر مع دراسات واقعية تساعدك
                <br />
                على فهم تطبيق الأدوات على مشروعك
                <br />
                الحالي أو القادم.
              </p>
            </div>

            {/* Benefit 2 */}
            <div>
              <div className="flex justify-center mb-3">
                <div className="rounded-full bg-[#F7F7FA] p-3">
                  <div className="bg-[#FC8A0A] rounded-full p-1">
                    <Check className="w-5 h-5 text-white stroke-[3px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">استخدام أدوات الذكاء الاصطناعي</h3>
              <p className="text-gray-600 text-base  text-center">
                استفد من أدوات الـ AI لتسريع قراراتك، وتنظيم
                <br />
                خطواتك القادمة بطريقة أكثر وضوحاً
                <br />
                وفعالية.
              </p>
            </div>

            {/* Benefit 3 */}
            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-[#F7F7FA] rounded-full p-3">
                  <div className="bg-[#FC8A0A] rounded-full p-1">
                    <Check className="w-5 h-5 text-white stroke-[3px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تحوّل في طريقة التفكير الريادي</h3>
              <p className="text-gray-600 text-base  text-center">
                ستخرج بذهنية جديدة تمنحك وضوحاً داخلياً
                <br />
                وثقة عالية للبدء من جديد، أو إعادة بناء
                <br />
                مشروعك برؤية جديدة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
