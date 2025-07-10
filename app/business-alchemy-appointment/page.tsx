"use client"

import Image from "next/image"
import Footer from "@/components/ar/footer"
import Script from "next/script"

export default function AppointmentPage() {
  return (
    <>
      {/* Header Bar */}
      <header className="bg-[#14697A] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="hidden lg:flex items-center">
                  <div className="flex-grow flex justify-start items-start px-6">
                    <p className="text-base font-bold text-right pb-1">
                      البرنامج العَملي الأول من نوعه لإطلاق و تطوير المشاريع الإبتكارية
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
                      البرنامج العَملي الأول من نوعه لإطلاق و تطوير المشاريع الإبتكارية
                    </p>
                  </div>
                </div>
              </div>
            </header>

      <main className="flex flex-col min-h-[70vh] bg-gray-50 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-lg text-gray-700 text-center mb-4">
            الرجاء إدخال معلوماتك واختيار الوقت المُناسب لك ليتم تأكيد حجز مكالمتك الاستشارية
          </h1>

          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/alaa-karss-c-squad/meet-with-me-1"
            style={{ minWidth: "320px", height: "700px" }}
          />

          {/* Calendly widget script */}
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />

          <p className="text-lg text-gray-700 text-center mt-4">
            إذا لم تجد الوقت المناسب، أو واجهتك مشكلة، بإمكانك التواصل معنا عبر{" "}
            <a
              href="https://wa.me/962790719021"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold underline"
            >
              الواتساب
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}
