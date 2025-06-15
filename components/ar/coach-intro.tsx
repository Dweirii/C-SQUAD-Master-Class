import Image from "next/image"
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"

export default function CoachIntroArabic() {
  const achievements = [
    "ريادية أعمال و مؤسِسة لأكثر من شركة في مجال برمجة التطبيقات و الريادة و التفكير التصميمي.",
    "تم اختيارها في برنامج TechWomen كواحدة من أفضل 100 امرأة في العالم في مجال التكنولوجيا و حصلت على جائزة مسابقة البرنامج.",
    "خلال برنامج TechWomen تلقت إرشادها في شركة Twitter (شركة X حالياً) و شاركت في العديد من الأحداث و الورشات في شركات السيليكون فالي / سان فرانسيسكو.",
    'تلّقت تَدريبها في مجال التفكير التصمّيمي في جامعة ستانفورد في كاليفورنيا و من ثم استكملت رحلتها العّملية من خلال برامج شركة "IDEO" الإرشادية.',
    'حاصِلة على عِدة جوائز مَحلية و دولية مُميزة، و لقب "Jordan Womenpreneur 2019".',
    "مدربة محلية و دولية لأكثر من ١٢ عام في مجالات البرمجة و التفكير التصميمي.",
    "مرشدة في مجال تطوير المشاريع الريادية لأكثر من ٥ سنوات في شركات كبرى و مع منظمات عالمية مثل منظمة جسور ومنظمة منار و Flat6Labs.",
  ]

  return (
    <section className="bg-white pb-20">
      <div className="max-w-6xl mx-auto px-6 sm:py-20 lg:py-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Right: Coach Image and Info (RTL - moved to right) */}
          <div className="flex flex-col items-center justify-center md:items-center lg:items-end lg:order-2">
            {/* Coach Image */}
            <div className="relative mb-8 w-full max-w-sm">
              <Image
                src="/c-squad.png"
                alt="كوتش آلاء آغا كَرس - خبيرة التفكير التصميمي"
                width={300}
                height={400}
                className="rounded-none object-cover w-full h-auto"
                priority
              />
            </div>

            {/* Social Links */}
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
          </div>

          {/* Left: Bio Content (RTL - moved to left) */}
          <div className="lg:col-span-2 lg:order-1">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FC8A0A] mb-4 leading-tight">
                عن البزنس كوتش "آلاء آغا كَرس"
              </h2>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#14697A] uppercase tracking-wide">
                  خبيرة في التَفكير التَصميمي و التحوّل الرَقمي
                </p>
                <p className="text-sm text-gray-500 italic">(إبداع من السيليكون فالي إلى العالم العربي)</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed mb-10">
              <p className="text-lg sm:text-xl font-medium text-gray-800">
                ريادِية أعمال عالمية بسجّل حافل بالإنجازات، مديرة تَنفيذية ومؤسِسة لأكثر من شَركة ناجحة.
              </p>
              <p>
                خبيرة في{" "}
                <span className="font-semibold text-[#14697A] px-2 py-1 rounded">
                  منهجية التفكير التصميمي (Design Thinking)
                </span>
                ، خرّيجة <span className="font-semibold text-[#FC8A0A]">TechWomen</span>، متحدثة{" "}
                <span className="font-semibold text-[#FC8A0A]">TEDx</span>، مُدربة دولية، وناشطة في تمكين المرأة و
                الشباب.
              </p>
            </div>

            {/* Professional Achievements */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">الإنجازات المهنية</h3>
              <div className="space-y-5">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-3"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
