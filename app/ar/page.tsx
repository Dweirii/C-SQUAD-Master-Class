import HeroSection from "@/components/ar/HeroSection";
import ZoomBanner from "@/components/ZoomBanner";
import MasterclassAudienceArabic from "@/components/ar/masterClass-audienace";
import MasterclassDescriptionArabic from "@/components/ar/master-class-description";
import CoachIntroArabic from "@/components/ar/coach-intro";
import WhatYouWillLearnArabic from "@/components/ar/what-you-will-learn";
import TestimonialsArabic from "@/components/ar/testimonials";
import FooterArabic from "@/components/ar/footer";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ZoomBanner text="جَلستان تفاعُليّتان, مُباشِر عَبر منصّة زوم خلال يومَي: الجمعة 27 والسبت 28 يونيو 2025 مساءً"/>
      <MasterclassAudienceArabic/>
      <ZoomBanner 
        text="'The Innovation Code'
             ,ليسَ مُجرد ماستر كلاس, بل مساحة حقيقيّة لإعادة اكتشاف ذاتِك الابداعية 
             صُمّمت هذه التجربة لتُلهم الجميع لِخلق واقع جديد، مليء بالإبداع والمعنى، بدلاً من تكرار طرقٍ فقدت معناها"
      />
      <MasterclassDescriptionArabic/>
      <CoachIntroArabic/>
      <ZoomBanner text="لأوّل مرّة في العالم العربي… تَجربة تدمُج بين أدوات الذّكاء الاصطناعي، ومَنهجيات الابتكار العالميّة، وطاقتِك الشعوريّة، لِتصميم مشروع ينبض بشغفك ويتحوّل إلى واقع"/>
      <WhatYouWillLearnArabic/>
      <ZoomBanner
        text="كُل مُشترك سيحصل على 'دليل الانطلاقة بِذكاء' وهو إصدار خاص لحضور The Innovation Code، يَدمج بين تمارين اكتشاف الشّغف وتَحويله إلى بزنس حقيقي باستخدام التّفكير التّصميمي ."
      />
      <TestimonialsArabic/>
      <FooterArabic/>
    </main>
  );
}
