"use client"

import Image from "next/image"

const items = [
  {
    title: "مَن أنت ولماذا تُريد هذا البزنس؟",
    description:
      "نبدأ من الجذر: تَكشِف خلال هذه المرحلة شَغفك الحقيقي، قِيَمك الشَّخصية، والدوافع العَميقة خلف مشروعك، لتبني بزنس نابع من داخلك وليس فقط من فَرضيات السوق.",
  },
  {
    title: "مَن هو عَميلك الحقيقي؟",
    description:
      "الوُضوح يبدأ مِمَّن تُخدِم: ستتَعلَّم أدوات تحديد الفئة المُستهدفة بدقة، وفَهم خصائصها وسُلوكها واحتياجاتها، بعيدًا عن الافتراضات السطحية.",
  },
  {
    title: "ما هي مُشكلته الحقيقية؟",
    description:
      "فَهم الألم الحقيقي لجمهورك و تحديده: سنستخدم تقنيات البحث التفاعلي، التَّعاطف و\"رِحلة العميل\" لفهم التحديات التي يَعيشها عميلك بعمق، وتحديد أولوياته ومصادر معاناته.",
  },
  {
    title: "ما الحل (الفكرة) الذي يُشبِهُه ويُلهمه؟",
    description:
      "الابتكار المُنطلق من التَّعاطف: سَتطوّر مشروع أو خِدمة قائمة على الإلهام لا التكرار، من خلال التَّفكير التَّصميمي الذي يَربِط بين ما يحتاجه العميل وما تُبدِعه أنت بشكل مختلف عن أي مشروع آخر موجود في السوق.",
  },
  {
    title: "كيف تَحوّل هذه الرؤية إلى خُطة قابلة للتطبيق، واقعية، ومفهومة في آن واحد؟",
    description:
      "من الفكرة إلى خُطة تنفيذ ذكية: سنبني نموذج عمل مُتكامل باستخدام أدوات التَّفكير التَّصميمي مثل خريطة التعاطف و القيم المُضافة، لنَصل بالنموذج النهائي للإطلاق.",
  },
]

export default function MasterclassDescriptionArabic() {
  return (
    <section className="bg-white font-cairo pb-10 lg:pb-14" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 py-8 sm:py-12 mt-12 lg:mt-0 lg:py-2 lg:pt-24">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#FC8A0A] leading-tight">
              ماهو برنامِج “خِيمياء البزنس - Business Alchemy”؟
            </h2>
          </div>

          {/* Introduction */}
          <div className="text-center space-y-6">
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed font-bold">
              هو البرنامِج التّدريبي الأوّل مِن نوعِه الذي يُعيد تشكِيل علاقتِك مع البِزنس، ويقودُك لاكتشاف الصّيغة الأنسب لمَشروع يُشبهك، ويستجيب لِنداء شَغفك العميق.
            </p>
          </div>

          {/* Description */}
          <div className="text-gray-600 text-base lg:text-lg text-center leading-relaxed space-y-6">
            <p>
              في هذا البرنامِج، ندمُج بين منهجيّة التّفكير التّصميمي - وهي منهجية عالميّة تُستخدم في أكبر شركات السّيليكون فالي لبناء حلول مُبتكرة تُركّز على جمهورِك أولاً وتلبية احتياجاته من خلال ما تُقدّمه - وبين ذكائك الشّعوري، وفَهمك العّميق لما تريد تحقيقهُ فعلًا من مشروعك.
            </p>
          </div>

          {/* Journey List */}
          <div className="space-y-12 px-2">
            <h2 className="text-left text-gray-600 text-xl lg:text-2xl font-bold">
              خلال الجلسات التفاعليّة للبرنامج، ستخوض رحلة ممنهجة تبدأ من الصفر:
            </h2>

           <ul className="space-y-6 list-disc pr-6 marker:text-[#FC8A0A] text-left">
            {items.map((item, index) => (
              <li key={index}>
                <div>
                  <h3 className="text-[#FC8A0A] font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed mt-1">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          </div>

          {/* AI, ActionBook, Coaching Section */}
          <div className="space-y-6 text-gray-700 text-base lg:text-lg leading-relaxed px-2 text-center">
            <p>
              ستعمَل على بِناء خارطة مشروعِك باستخدام <span className="font-bold">ActionBook</span> خيمياء البِزنس - وهو كُتيّب عَملي يُرافقك خُطوة بخُطوة في رِحلتك نحو بِزنس نابِض بالوضوح، التّصميم، والانتماء.
                <br/>
              وفي كُل مرحلة من البرنامِج، ستستفيد من أدوات <span className="font-bold">الذكاء الاصطناعي</span> المَدروسة بعناية، لمساعدتِك في توليد الأفكار، تَحليل الجمهور، صياغَة عروضِك، وحتى بناء خطّتك بذكاء وسرعة.
            </p>
            <p>
              وفي نهاية البرنامِج، ستَحصل على <span className="font-bold">جلسة استشاريّة فرديّة</span> (كَجزء من تَصميم البرنامج) لمراجعة خطّتك مع الكوتش آلاء، لتحصل على تغذية راجِعة استراتيجيّة تُساعدك على الانطلاق بِثقة.
                <br/>
              ولأن كل رِحلة بِزنس فريدة، بإمكانك لاحقًا الحصول على <span className="font-bold">جلسات كوتشينج فرديّة حسب احتياجِك</span>، لتُعمّق فهمَك وتُطوّر مشروعِك في الوقت الذي يناسبك بقيادة كوتش آلاء لرحلتك.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
