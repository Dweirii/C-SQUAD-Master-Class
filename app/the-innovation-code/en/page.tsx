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
        url: "https://programs.c-squad.org/meta.png",
        width: 1200,
        height: 630,
        alt: "C-SQUAD Masterclass",
      },
    ],
    locale: "en_EN",
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

import HeroSection from "@/components/english/HeroSection";
import ZoomBanner from "@/components/english/ZoomBanner";
import MasterclassAudienceArabic from "@/components/english/masterClass-audienace";
import MasterclassDescriptionArabic from "@/components/english/master-class-description";
import CoachIntroArabic from "@/components/english/coach-intro";
import WhatYouWillLearnArabic from "@/components/english/what-you-will-learn";
import TestimonialsArabic from "@/components/english/testimonials";
import FooterArabic from "@/components/english/footer";
import RegistrationFormArabic from "@/components/english/registration-form";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ZoomBanner>
       In just two days, you&apos;ll build a strong foundation for your current or future business — with clear steps, a
        practical system, and a soulful structure that opens doors in the market and reflects who you truly are.
      </ZoomBanner>
      <MasterclassAudienceArabic/>
      <ZoomBanner>
        This masterclass is a space designed for anyone with an idea, a calling, or a deep desire to build a real business 
        but who feels lost or unsure where to begin.
      </ZoomBanner>
      <MasterclassDescriptionArabic/>
      <CoachIntroArabic/>
      <ZoomBanner>
        For the first time in the region…

        an experience that blends AI tools, global innovation methods, and your emotional energy — to design a
        business that carries your passion and brings it to life.
      </ZoomBanner>
      <WhatYouWillLearnArabic/>
      <ZoomBanner>
       Every participant will receive “The Innovative-Start Guide” a special edition created exclusively for <br/> The
       Innovation Code.
        <br/>
       It combines passion discovery exercises with a step-by-step approach to turning your ideas into a real business
       using Design Thinking.
      </ZoomBanner>
      <TestimonialsArabic/>
      <RegistrationFormArabic/>
      <FooterArabic/>
    </main>
  );
}
