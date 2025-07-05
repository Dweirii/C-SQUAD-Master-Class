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

import HeroSection from "@/components/ar/HeroSection";
import ZoomBanner from "@/components/ZoomBanner";
import MasterclassAudienceArabic from "@/components/ar/masterClass-audienace";
import MasterclassDescriptionArabic from "@/components/ar/master-class-description";
import CoachIntroArabic from "@/components/ar/coach-intro";
import WhatYouWillLearnArabic from "@/components/ar/what-you-will-learn";
import TestimonialsArabic from "@/components/ar/testimonials";
import FooterArabic from "@/components/ar/footer";
import RegistrationFormArabic from "@/components/ar/registration-form";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ZoomBanner>
        في يومين فقط، ستبني أساسًا قوّيًا لمشروعِك الحالي أو القادم، بخطوات واضِحة، وسِيستم عمليّ يفتح لكَ <br className="hidden lg:block sm:hidden"/>أبواب السوق بثبات ويُعبّر عنك      </ZoomBanner>
      <MasterclassAudienceArabic/>
      <ZoomBanner>
              هذا المَاستر كلاس مساحة خُلِقت لكل شخص لديه فكرة، أو شغف يُناديه، أو رغبة في بناء بِزنس حقيقي... لكنّه يشعُر<br className="hidden lg:block sm:hidden"/> بالضّياع أو لا يعرِف من أينَ يبدأ.. 
      </ZoomBanner>
      <MasterclassDescriptionArabic/>
      <CoachIntroArabic/>
      <ZoomBanner>
         مرّة في العالم العربي… تَجربة تدمُج بين أدوات الذّكاء الاصطناعي، ومَنهجيات الابتكار العالميّة، وطاقتِك <br className="hidden lg:block sm:hidden"/> الشعوريّة، لِتصميم مشروع ينبض بشغفك ويتحوّل إلى واقع
      </ZoomBanner>
      <WhatYouWillLearnArabic/>
      <ZoomBanner>
        كُل مُشترك سيحصل على 'دليل الانطلاقة بِذكاء' وهو إصدار خاص لحضور The Innovation Code، يَدمج بين تمارين <br className="hidden lg:block sm:hidden"/>اكتشاف الشّغف وتَحويله إلى بزنس حقيقي باستخدام التّفكير التّصميمي
      </ZoomBanner>
      <TestimonialsArabic/>
      <RegistrationFormArabic/>
      <FooterArabic/>
    </main>
  );
}
