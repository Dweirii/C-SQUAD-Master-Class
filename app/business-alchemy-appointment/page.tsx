"use client"

import Image from "next/image"
import Footer from "@/components/ar/footer"
import Script from "next/script"
import Link from "next/link"

export default function AppointmentPage() {
  return (
    <>
      {/* Header Bar */}
      <header className="bg-[#14697A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center h-28">
            <div className="flex-grow flex justify-start items-start px-6">
              <p className="text-base font-bold text-right">
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

          {/* Mobile Header */}
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
      <div className="flex flex-col space-y-4  w-full">
        <div className="flex items-center justify-center pt-20">
            <h1 className="font-semibold text-2xl">الرّجاء ادخال معلوماتِك واختيار الوقت المُناسب لكَ ليتم تأكيد حَجز مُكالمتك الاستشاريّة</h1>
        </div>
      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/alaa-karss-c-squad/meet-with-me-1"
        style={{ minWidth: "320px", height: "700px" }}
      />

      {/* Calendly widget script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
        <div className="flex items-center justify-center pb-20">
            <Link href="https://wa.me/9647517621752">
            <h1 className="font-semibold text-2xl">إذا لم تجد الوقت المناسب أو واجهتك مشكلة بإمكانك التواصل معنا عبر الواتساب</h1>
            </Link>
        </div>
      <Footer />
    </>
  )
}
