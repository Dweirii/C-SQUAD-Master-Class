
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
      <ZoomBanner text="في يومين فقط، ستبني أساسًا قوّيًا لمشروعِك الحالي أو القادم، بخطوات واضِحة، وسِيستم عمليّ يفتح لكَ أبواب السوق بثبات ويُعبّر عنك"/>
      <MasterclassAudienceArabic/>
      <ZoomBanner
        text="هذا المَاستر كلاس مساحة خُلِقت لكل شخص لديه فكرة، أو شغف يُناديه، أو رغبة في بناء بِزنس حقيقي... لكنّه يشعُر بالضّياع أو لا يعرِف من أينَ يبدأ.. "
      />
      <MasterclassDescriptionArabic/>
      <CoachIntroArabic/>
      <ZoomBanner text="لأوّل مرّة في العالم العربي… تَجربة تدمُج بين أدوات الذّكاء الاصطناعي، ومَنهجيات الابتكار العالميّة، وطاقتِك الشعوريّة، لِتصميم مشروع ينبض بشغفك ويتحوّل إلى واقع"/>
      <WhatYouWillLearnArabic/>
      <ZoomBanner
        text="كُل مُشترك سيحصل على 'دليل الانطلاقة بِذكاء' وهو إصدار خاص لحضور The Innovation Code، يَدمج بين تمارين اكتشاف الشّغف وتَحويله إلى بزنس حقيقي باستخدام التّفكير التّصميمي ."
      />
      <TestimonialsArabic/>
      <RegistrationFormArabic/>
      <FooterArabic/>
    </main>
  );
}
