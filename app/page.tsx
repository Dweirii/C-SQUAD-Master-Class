import CoachIntro from "@/components/en/CoachIntro";
import HeroSection from "@/components/en/HeroSection";
import MasterclassAudience from "@/components/en/MasterclassAudience";
import MasterclassDescription from "@/components/en/MasterclassDescription";
import RegistrationForm from "@/components/en/registration-form";
import Testimonials from "@/components/en/testimonials";
import WhatYouWillLearn from "@/components/en/WhatYouWillLearn";
import Footer from "@/components/footer";
import ZoomBanner from "@/components/ZoomBanner";

export default function Page() {
  return (
    <main>
      <HeroSection />
      {/* Add more English sections below as needed */}
      <ZoomBanner text="Two interactive live sessions on Zoom | Friday & Saturday, June 27–28, 2025 (Evenings)" />
      <MasterclassAudience />
      <ZoomBanner
        text="The Innovation Code is not just another masterclass — it’s a space to reconnect with your creative self.
        This experience is designed to inspire you to create a new reality — one filled with meaning and innovation, instead
        of repeating paths that have lost their purpose."
      />
      <MasterclassDescription />
      <CoachIntro/>
      <ZoomBanner
        text="For the first time in the region…
        an experience that blends AI tools, global innovation methods, and your emotional energy — to design a
        business that carries your passion and brings it to life." 
      />
      <WhatYouWillLearn/>
      <ZoomBanner
        text="Every participant will receive “The  Innovative-Start Guide” — a special edition created exclusively for The
        Innovation Code.
        It combines passion discovery exercises with a step-by-step approach to turning your ideas into a real business
        using Design Thinking." 
      />
      <Testimonials/>
      <RegistrationForm/>
      <Footer/>
    </main>
  );
}
