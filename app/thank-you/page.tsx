"use client"
import Image from "next/image"
import Link from "next/link"
import { Cairo } from "next/font/google"
import { Calendar, CheckCircle, ChevronLeft, Clock, MapPin } from "lucide-react"

// Initialize Cairo font
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export default function ThankYouPage() {
  return (
    <div
      className={`min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 ${cairo.className}`}
      dir="rtl">
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
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 md:py-12">
        {/* Thank you card */}
        <div className="bg-white shadow-md p-6 md:p-10 mt-10 mb-8 border-t-4 border-teal-700 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center">
              <CheckCircle size={40} className="text-teal-700" />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">تم تأكيد حجزك بنجاح!</h1>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            شكراً لحجزك استشارة تطوير المشاريع الريادية. لقد تم إرسال تفاصيل الموعد إلى بريدك الإلكتروني. سيقوم فريقنا
            بالتواصل معك قبل الموعد للتأكيد.
          </p>

          <div className="bg-gray-50 p-6 mb-8 border max-w-xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">تفاصيل الحجز</h2>

            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <Calendar size={20} className="ml-3 text-teal-700 flex-shrink-0" />
                <div>
                  <p className="font-medium">استشارة تطوير المشاريع الريادية</p>
                </div>
              </div>

              <div className="flex items-center text-gray-700">
                <Clock size={20} className="ml-3 text-teal-700 flex-shrink-0" />
                <div>
                  <p className="font-medium">مدة الجلسة: 30 دقيقة</p>
                </div>
              </div>

              <div className="flex text-gray-700">
                <MapPin size={20} className="ml-3 text-teal-700 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-700">ستصلك رابط الاجتماع قبل الموعد</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-[#14697A] text-white  transition-colors"
            >
              العودة للصفحة الرئيسية
            </Link>

            <Link
              href="/booking"
              className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 border border-teal-700 text-teal-700 bg-white transition-colors"
            >
              <ChevronLeft size={18} className="ml-1" />
              العودة لصفحة الحجز
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}