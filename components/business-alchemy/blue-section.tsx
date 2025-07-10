"use client"

import Link from "next/link"
import { CalendarDays } from "lucide-react"

export default function Component() {
  return (
    <div className="py-7  mt-10 sm:mt-10 lg:mt-2 bg-[#14697A]">
      <div className="container mx-auto px-6 py-16 max-w-7xl" dir="rtl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            جاهز للنّجاح؟ انضم لبرنامجنا الآن!
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
            في هذا البرنامِج المكثّف والمصمَّم بأسلوب يجمَع بين العُمق والوضوح، ستخوض تجربة تدريبيّة تُعيد تعريف علاقتك مع البِزنس.
            سواء كنت تَبدأ من الصّفر، أو تُريد إعادة هيكلة مشروعِك القائِم، <span className="font-bold"> Business Alchemy </span> 
            سيمنحُك الأدوات، الرّؤية، والوضوح الذي تحتاجُه للانطلاق بثقة.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10">
          {/* Pricing Card */}
          <div className="w-full max-w-sm">
            <div className="bg-[#FC8A0B] text-white px-10 py-12 text-center space-y-6">
              <h3 className="text-3xl font-bold">Buisness Alchemy</h3>
              <div className="w-16 h-0.5 bg-white mx-auto mb-2" />
              <div className="text-3xl font-bold line-through opacity-80">3000$</div>
              <div className="text-4xl font-bold">1500$</div>
              <p className="text-2xl font-bold">خصم لمرة واحدة فقط!</p>
            </div>
          </div>

          {/* Program Details Box */}
          <div className="bg-[#14697A] text-white max-w-2xl space-y-6 text-left">
            <div>
              <p className="text-lg font-bold">التّسجيل مُتاح الآن لعدد محدود من المُشاركين فقط:</p>
              <p className="text-base mt-1 text-white/90">
                البرنامِج يمتد على مَدار ٥ أيام، عَبر جلسات ZOOM مُباشرة وتفاعليّة..
              </p>
            </div>

            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <CalendarDays className="w-6 h-6" />
              <span>7-3 من شهر آب من عام ٢٠٢٥.</span>
            </div>

            <div>
              <p className="text-lg font-bold">يشمل حضورك:</p>
              <p className="text-base mt-1 text-white/90">
                التّدريب الكامِل + ActionBook + جلسة استشارية فرديّة مع كوتش آلاء.
              </p>
            </div>

            <div>
              <p className="text-lg font-bold">الخطوة الأولى؟ جلسة استشاريّة مجانيّة!</p>
              <p className="text-base mt-1 text-white/90">
                قبل التّسجيل، احجز مكالمة مجانيّة مع كوتش آلاء لتكتشِف إذا كان هذا <br/>البرنامِج مناسبًا لك،
                ولمساعدتك في تقييم المرحلة التي تمرّ بها في مشروعِك.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <Link href="/registration">
            <button
              type="button"
              className="bg-[#FC8A0A] hover:bg-[#e67c09] text-white font-bold py-3 px-10 text-lg sm:text-xl transition-all duration-200"
            >
              احجز مكالمتك الاستشارية
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
