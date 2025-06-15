"use client"

import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <>
      {/* Clean Header Bar */}
    <header className="bg-[#14697A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Desktop & Mobile Row */}
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
          {/* 1) Logo */}
          <div>
            <Image
              src="/c-squad-logo.png"
              alt="C-SQUAD Logo"
              width={120}
              height={35}
              className="object-contain"
            />
          </div>

          {/* 2) Banner Text (lg+) */}
          <div className="hidden lg:block text-center text-base font-semibold">
            The most innovative masterclass delivered live on Zoom | June 27–28, 2025
          </div>

          {/* 3) Lang Switcher */}
          <div className="flex justify-end">
            <Link href="/" aria-label="Switch to Arabic">
              <button className="px-3 py-1 border border-white/40 rounded hover:bg-white/10 transition">
                ع
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Banner (smaller gap) */}
        <div className="mt-1 lg:hidden border-t border-white/20 pt-1">
          <div className="text-center text-sm font-medium">
            The most innovative masterclass delivered live on Zoom | June 27–28, 2025
          </div>
        </div>
      </div>
    </header>

      {/* Main Hero Content */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FC8A0A] mb-4 sm:mb-6 lg:mb-8 leading-tight">
              The Innovation Code
            </h1>

            {/* Subtitle */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-600 mb-2 sm:mb-12 lg:mb-8 leading-relaxed">
              Build Smarter. Sell Faster. Grow with Purpose
            </h2>

            {/* Description */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-12 sm:mb-16 lg:mb-20">
              <p>
                A masterclass that blends Silicon Valley strategies, modern creativity tools, and intuitive use of AI —
                helping you develop your project, make smarter decisions, and design a business that grows with
                confidence.
              </p>
              <p>
                In just two days, you'll build a strong foundation for your current or future business — with clear
                steps, a practical system, and a soulful structure that opens doors in the market and reflects who you
                truly are.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#register"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#FC8A0A] hover:bg-[#e67c09] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <span>Join now for just $9</span>
                <span className="ml-2 text-white/80 line-through text-xs sm:text-sm">[originally $149]</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
