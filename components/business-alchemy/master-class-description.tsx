"use client"

import Image from "next/image"

export default function MasterclassDescriptionArabic() {
  return (
    <section className="bg-white font-cairo pb-10 lg:pb-14">
      <div className="max-w-6xl mx-auto px-6 py-8 sm:py-12 mt-12 lg:mt-0 lg:py-2 lg:pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl lg:text-3xl sm:text-2xl md:text-3xl font-bold text-[#FC8A0A] leading-tight">
              ماهو برنامِج <span className="font-lato">Buisness Alchemy</span>؟
            </h2>
          </div>

          {/* Lead statement */}
          <div className="text-center lg:mb-8 sm:mb-16 space-y-6 mb-4 sm:space-y-8">
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed font-bold">
              إنّه مساحة ذكيّة لتبنّي منهجية التّفكير التّصميمي (Design Thinking) — طريقة التّفكير التي تعتمدها كُبرى الشّركات العالميّة لبناء مشاريع ناجِحة، مرنِة، وقابلة للنّمو.
            </p>
          </div>

          {/* Description paragraph */}
          <div className="space-y-8 sm:space-y-10 text-gray-600 text-base lg:text-lg text-center sm:text-lg leading-relaxed mb-12 sm:mb-16">
            <p>
              خلال يومين، سنخوض معًا رحلة عمليّة لإعادة تَصميم مشروعِك أو فكرتِك، باستخدام أدوات واضحة، وتقنيات حديثة مثل{" "}
              الذّكاء الاصطناعي، لتبسيط التّفكير، تَسريع القرارات، وابتكار حلول تُناسبك مهما كانت معلوماتك أو مرحلتك.
              سأكون معكَ خطوة بخطوة لنُحوّل شغفَك إلى خُطة، وأفكارك إلى مشاريع، ومخاوفِك إلى بوصلة قيادة حقيقيّة، تُنهي الفوضى وتمنحك وضوحًا تعتمد عليه..
            </p>
          </div>

          {/* List Section */}
          <div className="space-y-6 text-gray-800 text-base lg:text-lg pt-6">
            <h3 className="font-bold text-[#FC8A0A] text-center text-lg lg:text-xl">
              نؤمن بأن كل مشروع ناجح يبدأ من أساس قوي، وهذا ما سنساعدك في بنائه من خلال هذا البرنامج:
            </h3>

            <ul className="pt-10 lg:pt-2  pr-2">
              {[
                "تحديد المشكلة بدقّة وفهمها بعمق",
                "اختيار الفئة المستهدفة بدقّة وبناء قاعدة جماهيرية جاهزة للشراء",
                "تصميم حل مبتكر ومميز",
                "بناء النموذج الأولي وتقييمه",
                "إطلاق المشروع التدريجي والتواجد في السوق",
                "متابعة وإرشاد مستمر",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Image
                    src="/tick-myz.png"
                    alt="صح"
                    width={60}
                    height={60}
                    
                  />
                  <span className="pt-4">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
