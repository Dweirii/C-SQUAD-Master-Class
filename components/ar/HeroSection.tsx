"use client"

import Image from "next/image"
import {
  Player,
  Video,
  DefaultUi,
} from "@vime/react"
import "@vime/core/themes/default.css"
import VideoHero from "../video"

export default function ArabicHeroSection() {
  return (
    <div dir="rtl" className="bg-white">
      {/* Header Bar */}
      <header className="bg-[#14697A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center h-28">
            {/* Center/Left section in RTL (Banner Text) */}
            <div className="flex-grow flex justify-start items-start px-6">
              <p className="text-base font-bold text-right">
                 الماستر كلاس الأكثر ابتكارًا عبر منصة زووم | يومي 11 و 12 يوليو 2025 | 
              </p>
            </div>
            {/* Right section in RTL (EN button & Logo) */}
              <Image
                src="/c-squad-logo.png"
                alt="C-SQUAD LOGO"
                width={110}
                height={30}
                className="object-contain"
            />
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden">
            <div className="flex items-center justify-center pt-8 pb-4  h-14">
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
                 الماستر كلاس الأكثر ابتكارًا عبر منصة زووم | يومي 11 و 12 يوليو 2025 |
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="py-16 lg:py-24 sm:py-7 sm:pb-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Text Content */}
          <div className="text-right space-y-4 mx-auto lg:pl-10 lg:col-span-2">
            <h1 className="text-[#FC8A0A] font-bold text-center text-3xl lg:pb-8 sm:text-4xl sm:pb-4 md:pb-2" style={{ fontFamily: "var(--font-lato)" }}>
              The Innovation Code
            </h1>
            <h2 className="text-xl sm:text-lg font-bold lg:pb-10 sm:pb-8 md:pb-2  text-center text-[#545454] leading-relaxed">
              صمّم مشروعك بذكاء, انطلق في السّوق بإبداع, واخلُق أثر بِرسالة تُشبهك
            </h2>
            <p className="text-[#545454] text-base pb-0 lg:text-xl sm:pb-8 text-center sm:text-lg leading-loose">
              ماستر كلاس يدمُج بين منهجيّات وادي السّيليكون، وأدوات الإبداع الحديثة، التي تُساعدك على تطوير مشروعِك، وتصميم بِزنس يتوسّع بثقة    
            </p>
          </div>
          <div className="w-full flex justify-center lg:col-span-3">
            <div className="w-full max-w-5xl rounded-none overflow-hidden">
                <VideoHero/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
