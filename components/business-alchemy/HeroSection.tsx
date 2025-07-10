"use client"

import Image from "next/image"
import "@vime/core/themes/default.css"
import VideoHero from "./video"

export default function ArabicHeroSection() {
  return (
    <div dir="rtl" className="bg-white font-cairo">
      <header className="bg-[#14697A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="hidden lg:flex items-center">
            <div className="flex-grow flex justify-start items-start px-6">
              <p className="text-base font-bold text-right">
                البرنامج التَطبيقي الأول من نوعه لإطلاق و تطوير المشاريع الإبتكارية
              </p>
            </div>
            <Image
              src="/c-squad-logo.png"
              alt="C-SQUAD LOGO"
              width={110}
              height={30}
              className="object-contain lg:ml-7"
            />
          </div>

          <div className="lg:hidden">
            <div className="flex items-center justify-center pt-8 pb-4 h-14">
              <Image
                src="/c-squad-logo.png"
                alt="شعار سي-سكواد"
                width={100}
                height={28}
                className="object-contain"
              />
            </div>
            <div className="border-t border-white/20 mt-1 py-4">
              <p className="text-center text-xs font-bold sm:text-sm">
                البرنامج التَطبيقي الأول من نوعه لإطلاق و تطوير المشاريع الإبتكارية
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 lg:py-3 lg:pt-24 sm:py-10 pb-22 lg:pb-24 flex justify-center">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-5 items-center">
          <div className="text-right space-y-4 mx-auto lg:pl-2 lg:col-span-2">
            <h1 className="text-[#FC8A0A] text-center text-3xl lg:text-3xl font-bold font-cairo lg:whitespace-nowrap pr-5">
              <span className="font-cairo">[خِيمياء البِزنس]</span>{" "}
              <span className="font-lato">Business Alchemy</span>
            </h1>

            <h2 className="text-2xl sm:text-lg font-bold lg:pb-16 sm:pb-8 text-center text-[#545454] pr-5">
              خيمياء البِزنس = إبداع من القلب + تصميم عَملي بذكاء
            </h2>

            <p className="text-[#545454] text-base pb-0 lg:text-xl sm:pb-8 text-center sm:text-lg font-normal leading-loose pr-5">
              البرنامج العَملي الأول من نوعه لتحويل شغفك أو مشروعك الحالي إلى بزنس حقيقي، مُبدع، ومُتكامل&nbsp;بخطة واضحة، وأسس نجاح مدروسة.
            </p>
          </div>

          <div className="w-full flex justify-center lg:col-span-3">
            <div className="w-full max-w-2xl rounded-none overflow-hidden">
              <VideoHero />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Full-width Section (OUTSIDE section) */}
      <div className="w-full bg-[#F9F9FB] mb-2 pb-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6 px-2 text-center w-full max-w-none">
          <div className="space-y-2">
            <Image src="/myz5.svg" alt="أونلاين مباشر" width={80} height={80} className="mx-auto" />
            <p className="text-[#FC8A0A] font-bold text-sm">
             احضَر من أي مكان<br />(أونلاين-مباشر)
            </p>
          </div>
          <div className="space-y-2">
            <Image src="/myz33.svg" alt="جلسات جماعية" width={80} height={80} className="mx-auto" />
            <p className="text-[#FC8A0A] font-bold text-sm leading-snug pt-1">
              جلسات تدريب جماعية<br />(مجتمع إبداعي)
            </p>
          </div>
          <div className="space-y-2">
            <Image src="/myz2.svg" alt="جلسة إرشادية" width={80} height={80} className="mx-auto" />
            <p className="text-[#FC8A0A] font-bold text-sm leading-snug pt-1">
              جلسة إرشادية فردية<br />(استشارة في الخطة)
            </p>
          </div>
          <div className="space-y-2">
            <Image src="/lamp.svg" alt="خطة المشروع" width={80} height={80} className="mx-auto" />
            <p className="text-[#FC8A0A] font-bold text-sm leading-snug">
              خطة نجاح المشروع<br />(مع التحقق من السوق)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
