"use client"

import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function ThankYouPage() {
  const params = useSearchParams()
  const isFree = params.get("free") === "true"
  const isPaid = params.get("paid") === "true"

  const message =
    isFree || isPaid
      ? "تم التسجيل بنجاح."
      : "تم التسجيل بنجاح."

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* ✅ Header */}
      <header className="bg-[#14697A] text-white w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Desktop */}
          <div className="hidden lg:flex items-center h-28 justify-between">
            <div className="flex-grow flex justify-start items-center px-6">
              <p className="text-base font-bold text-right leading-snug">
                الماستر كلاس الأكثر ابتكارًا عبر منصة زووم | يومي 11 و 12 يوليو 2025
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
                الماستر كلاس الأكثر ابتكارًا عبر منصة زووم | يومي 11 و 12 يوليو 2025
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Content */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 py-24 text-center">
        <div className="flex flex-col items-center justify-center gap-6 max-w-2xl w-full text-center">
          <Image
            src="/tick.png"
            alt="تم التحقق"
            width={100}
            height={100}
            className="object-contain"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-[#14697A] text-center" dir="rtl">
            {message}
          </h1>

          <div className="space-y-5 text-slate-700 text-lg md:text-xl leading-loose text-center" dir="rtl">
            <p className="text-center">
              أهلاً بك في ماستر كلاس <strong className="text-[#FC8A0A] font-lato">The Innovation Code</strong> يسعدنا انضمامك إلى هذه التجربة الملهمة التي ستأخذك نحو وضوح أكبر وخطوات عملية لبناء مشروعك بذكاء.
            </p>
            <p className="text-center">
              سيتم إرسال جميع التفاصيل والمعلومات اللازمة إلى بريدك الإلكتروني خلال دقائق.
            </p>
            <p className="text-center">
              يُرجى التحقق من صندوق الوارد، وإن لم تصلك الرسالة، يرجى مراجعة بريد <br />Spam أو Junk.
            </p>
          </div>


          <div className="mt-6">
            <div className="bg-[#FC8A0A] text-white font-bold py-3 px-8 rounded-none text-lg shadow-md hover:shadow-lg transition-all duration-200 font-lato">
              The Innovation Code
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
