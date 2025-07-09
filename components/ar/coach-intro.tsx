import Image from "next/image"
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"

export default function CoachIntroArabic() {
  const achievements = [
    "رياديّة أعمال حاصِلة على جوائز دوليّة، بخبرة تتجاوز ١٢ عامًا في عالم الابتكار، التكنولوجيا، والتفكِير الإبداعي.",
    " مؤسِّسة ومديرة تنفيذية لعدّة شركَات في مجالات برمجة التطبيقات و الإبتكار. ",
    "تم اختيارها ضمن أفضَل 100 امرأة في العالم في مجال التّكنولوجيا من قِبل برنامج TechWomen، حيث تلقّت تدريبها في شركة Twitter (X حاليًا)، وشاركَت في فعاليات داخِل وادي السيليكون.",
    'تلقّت تدريبها في جامعة ستانفورد، وأكمَلت رِحلتها المهنية عَبر برامج IDEO العالميّة الرائدة في التّفكير التصميمي.',
    'مُتحدثة على منصّة TEDx، وحائِزة على لقب Jordan Womenpreneur لِعام 2019.',
  ]

  return (
    <section className="bg-white pb-8 lg:pb-16 sm:pb-20 mb-14 lg:mb-2">
      <div className="max-w-6xl mx-auto px-6 sm:py-10 lg:py-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">    
          {/* ✅ Mobile Title Section */}
          <div className="lg:hidden">
            <div className="space-y-2 mb-6 text-center">
              <p className="text-2xl font-bold text-gray-600 uppercase tracking-wide">
                خبيرة في التَفكير التَصميمي و التحوّل الرَقمي
              </p>
              <p className="text-lg font-bold text-gray-600">
                (إبداع من السيليكون فالي إلى العالم العربي)
              </p>
            </div>
            <h2 className="text-xl  text-[#FC8A0A] leading-tight text-center">
              عن البِزنس كوتش "آلاء آغا كَرس"
            </h2>
          </div>

          {/* ✅ Image - order adjusted */}
          <div className="flex flex-col items-center justify-center md:items-center lg:items-end order-2 lg:order-1">
            <div className="relative  w-full max-w-sm">
              <Image
                src="/coach.png"
                alt="كوتش آلاء آغا كَرس - خبيرة التفكير التصميمي"
                width={400}
                height={800}
                className="rounded-none object-cover w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* ✅ Bio Content */}
          <div className="lg:col-span-2 order-3 lg:order-2">
            {/* Header - desktop only */}
            <div className="hidden lg:block mb-8">
              <div className="space-y-2 mb-6">
                <h2 className="text-2xl font-bold text-[#545454]">
                  خبيرة في التَفكير التَصميمي و التحوّل الرَقمي
                </h2>
                <h2 className="text-2xl font-bold text-[#545454]">
                  (إبداع من السيليكون فالي إلى العالم العربي)
                </h2>
              </div>
              <h2 className="text-2xl font-bold text-[#FC8A0A] mb-4 leading-tight">
                  عن البِزنس كوتش "آلاء آغا كَرس"؟
              </h2>
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start mt-4 gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gray-800 rounded-full mt-3"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
