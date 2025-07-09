export const metadata = {
  title: "The Innovation Code - C-SQUAD",
  description:
    "في يومين فقط، ستبني أساسًا قويًا لمشروعك بخطوات واضحة، وسِيستم عمليّ يفتح لكَ أبواب السوق بثبات ويُعبّر عنك.",
  openGraph: {
    title: "The Innovation Code - C-SQUAD",
    description:
      "في يومين فقط، ستبني أساسًا قويًا لمشروعك بخطوات واضحة، وسِيستم عمليّ يفتح لكَ أبواب السوق بثبات ويُعبّر عنك.",
    url: "https://programs.c-squad.org/the-innovation-code",
    siteName: "C-SQUAD",
    images: [
      {
        url: "https://programs.c-squad.org/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "C-SQUAD Masterclass",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Innovation Code - C-SQUAD",
    description:
      "في يومين فقط، ستبني أساسًا قويًا لمشروعك بخطوات واضحة، وسِيستم عمليّ يفتح لكَ أبواب السوق بثبات ويُعبّر عنك.",
    images: ["https://programs.c-squad.org/meta.png"],
  },
};

import ArabicHeroSection from "@/components/business-alchemy/HeroSection";
import ZoomBanner from "@/components/ZoomBanner";
import MasterclassAudienceArabic from "@/components/business-alchemy/masterClass-audienace";
import MasterclassDescriptionArabic from "@/components/business-alchemy/master-class-description";
import CoachIntroArabic from "@/components/ar/coach-intro";
import WhatYouWillLearnArabic from "@/components/ar/what-you-will-learn";
import TestimonialsArabic from "@/components/business-alchemy/testimonials";
import FooterArabic from "@/components/ar/footer";
import RegistrationFormArabic from "@/components/ar/registration-form";
import Component from "@/components/business-alchemy/blue-section";

export default function Page() {
  return (
    <main>
      <ArabicHeroSection />
      <MasterclassAudienceArabic/>
      <ZoomBanner>
        قد تملك الشغف والرؤية، لكن بين الخوف، الغموض، وثِقل النمط التقليدي… تجد نفسك عالقًا.<br/>
        وهنا تبدأ خيمياء الأعمال: مزيج من الحكمة والتفكير التصميمي، لتصمّم مشروعًا يُشبهك ويفتح لك طريق النجاح.
      </ZoomBanner>
      <MasterclassDescriptionArabic/>
      <CoachIntroArabic/>
      <ZoomBanner>
         لأوّل مرّة… خيمياء أعمال تدمج مَنهجية التفكير التصميمي [Design Thinking] و أدوات الذكاء الاصطناعي [ChatGPT] وطاقتك الداخلية، لتصنع بزنس نابض بالهوية، ذكي في خطته، ومنسجم معك
      </ZoomBanner>
      <WhatYouWillLearnArabic/>
      <ZoomBanner>
        كل مشترك سيحصل على "ActionBook خيمياء البزنس" — دفتر عملي يرافقك خلال الجلسات الخمس لاكتشاف شغفك، وتطبيق التفكير التصميمي لبناء بزنس نابض بهويتك.
      </ZoomBanner>
      <TestimonialsArabic/>
      <Component/>
      <FooterArabic/>
    </main>
  );
}
