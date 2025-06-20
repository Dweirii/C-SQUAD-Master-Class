"use client"

import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function ThankYouPage() {
  const params = useSearchParams()
  const isFree = params.get("free") === "true"
  const isPaid = params.get("paid") === "true"

  const message = isFree
    ? "تم التسجيل المجاني بنجاح!"
    : isPaid
    ? "تم الدفع بنجاح!"
    : "شكراً لاهتمامك! 🧡"

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* ✅ Header */}
      <header className="bg-[#14697A] text-white w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Desktop */}
          <div className="hidden lg:flex items-center h-28 justify-between">
            <div className="flex-grow flex justify-start items-center px-6">
              <p className="text-base font-bold text-right leading-snug">
                الماستر كلاس الأكثر ابتكارًا عبر منصة زووم | يومي 11 و 12 يوليو 2025 |
              </p>
            </div>
            <Image
              src="/c-squad-logo.png"
              alt="C-SQUAD LOGO"
              width={110}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Mobile */}
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
                الماستر كلاس الأكثر ابتكارًا عبر منصة زووم | يومي 11 و 12 يوليو 2025 |
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Content */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 py-40 sm:py-12 lg:py-40 text-center">
        <Image
          src="/tick.png"
          alt="تم التحقق"
          width={100}
          height={100}
          className="mb-6 object-contain"
        />

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-center sm:text-center font-bold text-[#14697A] mb-6" dir="rtl">
          {message}
        </h1>

        <div className="max-w-lg mb-8" dir="rtl">
          <p className="text-lg md:text-xl text-center text-slate-600 leading-relaxed">
            نشكرك من القلب على تخصيص وقتك لمشاركة
          </p>
          <p className="text-lg md:text-xl text-center text-slate-600 leading-relaxed">
            رأيك الذي يُلهمنا لتقديم الأفضل دائماً!
          </p>
        </div>

        <div className="bg-[#FC8A0A] text-white font-bold py-3 px-8 rounded-none text-lg shadow-lg transition-all duration-200 hover:shadow-xl">
          The Innovation Code
        </div>
      </section>
    </main>
  )
}