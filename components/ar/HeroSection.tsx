"use client"

import Image from "next/image"
import Link from "next/link"

export default function ArabicHeroSection() {
  return (
    <div dir="rtl" className="bg-white">
      {/* Header Bar */}
      <header className="bg-[#14697A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center h-16">
            {/* Right section in RTL (EN button & Logo) */}
            <div className="flex items-center gap-x-4 shrink-0">
              <Link href="/en" aria-label="Switch to English">
                <button className="px-3 py-1.5 border border-white/40 rounded hover:bg-white/10 transition text-sm font-medium">
                  EN
                </button>
              </Link>
            </div>
            {/* Center/Left section in RTL (Banner Text) */}
            <div className="flex-grow flex justify-center items-center px-6">
              <p className="text-base font-semibold text-center">
                الماستر كلاس الأكثر ابتكارا عبر منصة زووم | يومي 11 و 12 يونيو 2025
              </p>
            </div>
              <Image
                src="/c-squad-logo.png"
                alt="شعار سي-سكواد"
                width={110}
                height={30}
                className="object-contain"
              />
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between pt-8 pb-4  h-14">
              <Link href="/en" aria-label="Switch to English">
                <button className="px-3 py-1 border border-white/40 rounded hover:bg-white/10 transition text-sm font-medium">
                  EN
                </button>
              </Link>
              <Image
                src="/c-squad-logo.png"
                alt="شعار سي-سكواد"
                width={100}
                height={28}
                className="object-contain"
              />
            </div>
            <div className="border-t border-white/20 mt-1 py-4">
              <p className="text-center text-xs sm:text-sm font-medium">
                الماستر كلاس الأكثر ابتكارا عبر منصة زووم | يومي 11 و 12 يونيو 2025
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Text Content */}
          <div className="text-right space-y-4">
            <h1 className="text-[#FC8A0A] text-center text-3xl lg:pb-8 sm:text-4xl sm:pb-4 md:pb-2 font-bold">
              The Innovation Code
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold lg:pb-10 sm:pb-8 md:pb-2 text-center text-gray-800 leading-relaxed">
              صمّم مشروعك بذكاء، انطلق في الشوق بإبداع، واخلق أثر برسالة تُشبهك
            </h2>
            <p className="text-gray-600 text-base  lg:text-xl sm:pb-2 text-center sm:text-lg leading-loose">
              ماستر كلاس يدمج بين منهجيات وادي السيليكون، وأدوات الإبداع الحديثة،
              التي تساعدك على تطوير مشروعك، وتصميم بزنس يتوسع بثقة.
            </p>
          </div>

          {/* Video */}
          <div className="w-full rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/RMCmjTvtTcY"
              title="ماستر كلاس The Innovation Code"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
