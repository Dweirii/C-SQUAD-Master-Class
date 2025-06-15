"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Calendar, Clock, Users, Mail } from "lucide-react"
import { useEffect } from "react"

export default function ThankYouPage() {
  const params = useSearchParams()
  const isFree = params.get("free") === "true"
  const isPaid = params.get("paid") === "true"
  const isArabic = params.get("lang") === "ar"
  const name = localStorage.getItem("name") || ""
  const email = localStorage.getItem("email") || ""
  const phone = localStorage.getItem("phone") || ""
  const stripeSessionId = params.get("session_id") || ""
  const amount = 900

  useEffect(() => {
    if (isPaid && email && stripeSessionId) {
      fetch("/api/track-paid-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, stripeSessionId, amount }),
      })
    }
  }, [isPaid, email, stripeSessionId])

  if (isArabic) {
    return <ThankYouPageArabic isFree={isFree} isPaid={isPaid} />
  }

  const message = isFree
    ? "Free Registration Successful! 🎉"
    : isPaid
      ? "Payment Successful! ✅"
      : "Thank You for Your Interest! 🧡"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-[#14697A] text-white py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Image src="/c-squad-logo.png" alt="C-SQUAD Logo" width={120} height={35} className="object-contain" />
          <Link href="/" className="text-white hover:text-orange-200 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Success Message */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center mb-8">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#FC8A0A] mb-4">{message}</h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Welcome to The Innovation Code Masterclass! We're excited to have you join us on this transformative
              journey.
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-[#FC8A0A]/10 to-[#14697A]/10 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FC8A0A] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Confirmation Email</p>
                  <p className="text-gray-600 text-sm">Check your inbox for session details and Zoom link</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#14697A] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp Group</p>
                  <p className="text-gray-600 text-sm">Join our exclusive participant community</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Session Details */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Session Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#14697A] mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              Session Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Clock className="w-5 h-5 text-[#FC8A0A]" />
                <div>
                  <p className="font-semibold text-gray-900">Friday & Saturday</p>
                  <p className="text-gray-600">June 27-28, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Clock className="w-5 h-5 text-[#FC8A0A]" />
                <div>
                  <p className="font-semibold text-gray-900">Time</p>
                  <p className="text-gray-600">6:00 - 9:00 PM (Mecca Time)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Users className="w-5 h-5 text-[#FC8A0A]" />
                <div>
                  <p className="font-semibold text-gray-900">Platform</p>
                  <p className="text-gray-600">Live on Zoom (Link will be sent via email)</p>
                </div>
              </div>
            </div>
          </div>

          {/* What You'll Receive */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#14697A] mb-6">What You'll Receive</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#FC8A0A] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">Live interactive sessions with Coach Ala'a Agha Karss</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#FC8A0A] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>"Smart Launch Guide"</strong> - Exclusive workbook for participants
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#FC8A0A] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">High-quality session recordings (if you can't attend live)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#FC8A0A] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">Access to exclusive participant WhatsApp community</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#FC8A0A] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">Design Thinking templates and AI tools resources</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-[#14697A] text-white rounded-2xl p-8 mt-8 text-center">
          <h3 className="text-xl font-bold mb-4">Need Help?</h3>
          <p className="mb-6">Our team is here to support you every step of the way.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:support@c-squad.com"
              className="flex items-center gap-2 bg-white text-[#14697A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Support
            </a>
            <Link
              href="/"
              className="flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#14697A] transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function ThankYouPageArabic({ isFree, isPaid }: { isFree: boolean; isPaid: boolean }) {
  const message = isFree ? "تم التسجيل المجاني بنجاح! 🎉" : isPaid ? "تم الدفع بنجاح! ✅" : "شكراً لاهتمامك! 🧡"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-[#14697A] text-white py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Image src="/c-squad-logo.png" alt="شعار سي-سكواد" width={120} height={35} className="object-contain" />
          <Link href="/ar" className="text-white hover:text-orange-200 transition-colors">
            العودة للرئيسية ←
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Success Message */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center mb-8">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#FC8A0A] mb-4">{message}</h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              أهلاً بك في ماستر كلاس "The Innovation Code"! نحن متحمسون لانضمامك إلينا في هذه الرحلة التحويلية.
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-[#FC8A0A]/10 to-[#14697A]/10 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">ما الذي سيحدث الآن؟</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-right">
              <div className="flex items-start gap-3">
                <div>
                  <p className="font-semibold text-gray-900">بريد التأكيد</p>
                  <p className="text-gray-600 text-sm">تحقق من بريدك الإلكتروني لتفاصيل الجلسة ورابط زووم</p>
                </div>
                <Mail className="w-5 h-5 text-[#FC8A0A] mt-1 flex-shrink-0" />
              </div>
              <div className="flex items-start gap-3">
                <div>
                  <p className="font-semibold text-gray-900">مجموعة واتساب</p>
                  <p className="text-gray-600 text-sm">انضم إلى مجتمع المشاركين الحصري</p>
                </div>
                <Users className="w-5 h-5 text-[#14697A] mt-1 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Session Details */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Session Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#14697A] mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              تفاصيل الجلسات
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">الجمعة والسبت</p>
                  <p className="text-gray-600">27-28 يونيو 2025</p>
                </div>
                <Clock className="w-5 h-5 text-[#FC8A0A]" />
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">التوقيت</p>
                  <p className="text-gray-600">6:00 - 9:00 مساءً (بتوقيت مكة)</p>
                </div>
                <Clock className="w-5 h-5 text-[#FC8A0A]" />
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">المنصة</p>
                  <p className="text-gray-600">مباشر عبر زووم (سيتم إرسال الرابط عبر البريد)</p>
                </div>
                <Users className="w-5 h-5 text-[#FC8A0A]" />
              </div>
            </div>
          </div>

          {/* What You'll Receive */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#14697A] mb-6">ما ستحصل عليه</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <p className="text-gray-700">جلسات تفاعلية مباشرة مع كوتش آلاء آغا كَرس</p>
                <div className="w-2 h-2 bg-[#FC8A0A] rounded-full mt-3 flex-shrink-0"></div>
              </div>
              <div className="flex items-start gap-3">
                <p className="text-gray-700">
                  <strong>"دليل الانطلاقة بِذكاء"</strong> - كتيب حصري للمشاركين
                </p>
                <div className="w-2 h-2 bg-[#FC8A0A] rounded-full mt-3 flex-shrink-0"></div>
              </div>
              <div className="flex items-start gap-3">
                <p className="text-gray-700">تسجيلات عالية الجودة للجلسات (في حال عدم التمكن من الحضور المباشر)</p>
                <div className="w-2 h-2 bg-[#FC8A0A] rounded-full mt-3 flex-shrink-0"></div>
              </div>
              <div className="flex items-start gap-3">
                <p className="text-gray-700">الوصول إلى مجتمع واتساب الحصري للمشاركين</p>
                <div className="w-2 h-2 bg-[#FC8A0A] rounded-full mt-3 flex-shrink-0"></div>
              </div>
              <div className="flex items-start gap-3">
                <p className="text-gray-700">قوالب التفكير التصميمي وموارد أدوات الذكاء الاصطناعي</p>
                <div className="w-2 h-2 bg-[#FC8A0A] rounded-full mt-3 flex-shrink-0"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-[#14697A] text-white rounded-2xl p-8 mt-8 text-center">
          <h3 className="text-xl font-bold mb-4">تحتاج مساعدة؟</h3>
          <p className="mb-6">فريقنا هنا لدعمك في كل خطوة.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:support@c-squad.com"
              className="flex items-center gap-2 bg-white text-[#14697A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              الدعم عبر البريد
            </a>
            <Link
              href="/ar"
              className="flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#14697A] transition-colors"
            >
              العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
