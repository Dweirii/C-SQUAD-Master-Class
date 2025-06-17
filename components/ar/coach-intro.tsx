import Image from "next/image"
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"

export default function CoachIntroArabic() {
  const achievements = [
    "ريادية أعمال حاصلة على جوائز دولية، بخبرة تتجاوز ١٢ عامًا في عالم الابتكار، التكنولوجيا، والتفكير الإبداعي.",
    "مؤسِّسة ومديرة تنفيذية لعدّة شركات في مجالات برمجة التطبيقات و الإبتكار.",
    "تم اختيارها ضمن أفضل 100 امرأة في العالم في مجال التكنولوجيا من قبل برنامج TechWomen، حيث تلقّت تدريبها في شركة Twitter، وشاركت في فعاليات داخل وادي السيليكون.",
    'تلقت تدريبها في جامعة ستانفورد، وأكملت رحلتها المهنية عبر برامج IDEO العالمية الرائدة في التفكير التصميمي.',
    'متحدثة على منصة TEDx، وحائزة على لقب Jordan Womenpreneur لعام 2019.',
  ]

  return (
    <section className="bg-white pb-14">
      <div className="max-w-6xl mx-auto px-6 sm:py-20 lg:py-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left: Bio Content */}
          <div className="lg:col-span-2 lg:order-2">
            {/* Header */}
            <div className="mb-8">
                <div className="space-y-2 mb-6">
                  <p className="text-2xl lg:text-2xl xl:text-2xl sm:text-xl font-semibold text-gray-600 uppercase tracking-wide">
                  خبيرة في التَفكير التَصميمي و التحوّل الرَقمي
                  </p>
                  <p className="lg:text-2xl xl:text-2xl sm:text-2xl  text-gray-600">(إبداع من السيليكون فالي إلى العالم العربي)</p>
                </div>
              <h2 className="text-2xl sm:text-xl md:text-3xl font-bold text-[#FC8A0A] mb-4 leading-tight">
                عن البزنس كوتش "آلاء آغا كَرس"
              </h2>
            </div>

            {/* Professional Achievements */}
            <div>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-gray-800 rounded-full mt-3"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Coach Image and Info (RTL - moved to right) */}
          <div className="flex flex-col items-center justify-center md:items-center lg:items-end lg:order-1">
            {/* Coach Image */}
            <div className="relative mb-8 w-full max-w-sm">
              <Image
                src="/c-squad.png"
                alt="كوتش آلاء آغا كَرس - خبيرة التفكير التصميمي"
                width={400}
                height={800}
                className="rounded-none object-cover w-full h-auto"
                priority
              />
            </div>

            {/* Social Links 
            <div className="flex gap-4 items-center justify-center mb-6 lg:pl-20 lg:mb-0">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#FC8A0A] hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="تواصل عبر لينكد إن"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#FC8A0A] hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="تابع على إنستغرام"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#FC8A0A] hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="تواصل عبر فيسبوك"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  )
}
