export const metadata = {
  title: "Business AlChemy - C-SQUAD",
  description:
    "في يومين فقط، ستبني أساسًا قويًا لمشروعك بخطوات واضحة، وسِيستم عمليّ يفتح لكَ أبواب السوق بثبات ويُعبّر عنك.",
  openGraph: {
    title: "Business AlChemy - C-SQUAD",
    description:
      "في يومين فقط، ستبني أساسًا قويًا لمشروعك بخطوات واضحة، وسِيستم عمليّ يفتح لكَ أبواب السوق بثبات ويُعبّر عنك.",
    url: "https://programs.c-squad.org/business-alchemy",
    siteName: "C-SQUAD",
    images: [
      {
        url: "https://programs.c-squad.org/link.png",
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
    title: "Business Alchemy - C-SQUAD",
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
import Component from "@/components/business-alchemy/blue-section";

export default function Page() {
  return (
    <main>
      <ArabicHeroSection />
      <MasterclassAudienceArabic/>
      <ZoomBanner>
        قد تملُك الشّغف والرؤية، لكن بين الخوف، الغُموض، وثِقل النمط التقليدي… تَجد نفسك عالقًا. <br/>
        وهنا تبدأ خيمياء الأعمال: مزيج من الحِكمة والتّفكير التّصميمي، لتصمّم مشروعًا يُشبهك ويفتح لك طريق النّجاح.
      </ZoomBanner>
      <MasterclassDescriptionArabic/>
      <CoachIntroArabic/>
      <ZoomBanner>
         صمّم بِزنسك بطريقة جديدة… بروحِك، وذكاءِك، وأدوات تفتَح لكَ أبواب السّوق
      </ZoomBanner>
      <WhatYouWillLearnArabic/>
      <ZoomBanner>
        حينَ ينسجِم الشّغف مع التّصميم… تولَد خِيمياء البِزنس الحقيقي
      </ZoomBanner>
      <TestimonialsArabic/>
      <Component/>
      <FooterArabic/>
    </main>
  );
}
