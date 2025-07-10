import { Check } from "lucide-react"
import Image from "next/image"

export default function MasterclassBenefitsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 my-6 lg:my-1 mb-4 lg:mb-6 lg:py-11">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 lg:mt-10">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-[#FC8A0A] leading-tight mb-6">
            مفاتيح التحوّل الذهني التي ستحملها معك:
          </h2>
          <div className="text-gray-700 text-lg sm:text-xl max-w-4xl mx-auto font-bold">
            <p>برنامج مُباشر عبر ZOOM مكثّف من خمس جلسات تفاعليّة على مدار 5 أيام، بواقِع 3 ساعات لكل جلسة. </p>
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
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تفكيرك الرّيادي يُعيد التكوّن</h3>
              <p className="text-gray-600 text-base text-center leading-relaxed">
                ستخرُج بطريقة جديدة ترى فيها البِزنس 
                <br />
                  كمساحة تعبير قيّمة، وتأثير ليس فقط بيع
                <br />
                  وخطط تقليديّة.
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
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تفكيرُك يصبح تصميميًا</h3>
              <p className="text-gray-600 text-base  text-center">
                ستفكّر مثل المصمّمين: بفضول، تعاطُف، 
                <br />
                وتجريب مُستمر حتى تصِل لأفضل حَل يناسب
                <br />
                 جمهورك وينسجِم معك.
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
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">وضوحك الدّاخلي = قَرارات أذكى</h3>
              <p className="text-gray-600 text-base  text-center">
                ستتعلّم كيف تربُط بين مشاعِرك وقيمِك      
                <br />
                  وبين قراراتِك الرياديّة، لتُصبح خطواتك مبنيّة
                <br />
                على وعي، وليس على ضغط أو تشتّّت.
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
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">الابتكار يُصبح لغتَك الجّديدة</h3>
              <p className="text-gray-600 text-base  text-center">
                تُغادِر التّفكير العشوائي وتبدأ في ابتكَار
                <br />
                حُلول فريدة نابِعة من احتياجات حقيقيّة     
                <br />
                وسياق واضِح.
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
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">الذّكاء الاصطناعي حليفُك وليس تَهديد</h3>
              <p className="text-gray-600 text-base  text-center">
                تستخدِم أدوات AI لدعمِك في تحليل السّوق،
                <br />
                إنتاج المحتوى، والتّخطيط بسرعة وكفاءة     
                <br />
                دون أن تفقد لمستَك الخاصّة.
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
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">لا تَبدأ من الصّفر بَعد اليوم</h3>
              <p className="text-gray-600 text-base  text-center">
                ستُغادر عقليّة “نُقطة البداية” وتنتقِل إلى
                <br />
                عقليّة “نُقطة الانطلاق” لأنك تملك الآن    
                <br />
                مشروعِك برؤية حديثة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
