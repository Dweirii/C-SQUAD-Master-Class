"use client"

import Image from "next/image"
import Link from "next/link"

export default function ArabicHeroSection() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Arabic Header Bar */}
      <header className="bg-[#14697A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Desktop & Mobile Row */}
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
            {/* 1) Language Switcher (RTL - now on left) */}
            <div className="flex justify-start">
              <Link href="/" aria-label="Switch to English">
                <button className="px-3 py-1 border border-white/40 rounded hover:bg-white/10 transition">EN</button>
              </Link>
            </div>

            {/* 2) Banner Text (lg+) - Center */}
            <div className="hidden lg:block text-center text-base font-semibold">
              الماستر كلاس الأكثر ابتكارا عبر منصة زووم | يومي 27 و 28 يونيو 2025
            </div>

            {/* 3) Logo (RTL - now on right) */}
            <div className="flex justify-end">
              <Image src="/c-squad-logo.png" alt="شعار سي-سكواد" width={120} height={35} className="object-contain" />
            </div>
          </div>

          {/* Mobile Banner (smaller gap) */}
          <div className="mt-1 lg:hidden border-t border-white/20 pt-1">
            <div className="text-center text-sm font-medium">
              الماستر كلاس الأكثر ابتكارا عبر منصة زووم | يومي 27 و 28 يونيو 2025
            </div>
          </div>
        </div>
      </header>

      {/* Main Arabic Hero Content */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Arabic Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FC8A0A] mb-4 sm:mb-6 lg:mb-8 leading-tight">
              The Innovation Code
            </h1>

            {/* Arabic Subtitle */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-600 mb-2 sm:mb-12 lg:mb-8 leading-relaxed">
              صمّم مشروعك بذكاء, انطلق في السّوق بإبداع, واخلُق أثر بِرسالة تُشبهك
            </h2>

            {/* Arabic Description */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-12 sm:mb-16 lg:mb-20">
              <p>
                ماستر كلاس يدمُج بين منهجيّات وادي السّيليكون، وأدوات الإبداع الحديثة، واستخدام ذكيّ لأدوات الذّكاء الاصطناعي
                التي تُساعدك على تطوير مشروعِك، واتخاذ قرارات أسرع، وتصميم بِزنس يتوسّع بثقة.
              </p>
              <p>
                في يومين فقط، ستبني أساسًا قوّيًا لمشروعِك الحالي أو القادم، بخطوات واضِحة، وسِيستم عمليّ يفتح لكَ أبواب السوق
                بثبات ويُعبّر عنك.
              </p>
            </div>

            {/* Arabic CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#register"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#FC8A0A] hover:bg-[#e67c09] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <span>انضم الآن مقابل 9 دولارات فقط</span>
                <span className="mr-2 text-white/80 line-through text-xs sm:text-sm">[بدلاً من 199 دولار]</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
