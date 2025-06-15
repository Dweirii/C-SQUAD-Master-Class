"use client"

import type React from "react"

import { useState } from "react"

export default function RegistrationFormArabic() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    code: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (data.redirectUrl) {
      window.location.href = data.redirectUrl
      return
    }

    if (data.url) {
      window.location.href = data.url
      return
    }

    alert("Something went wrong. Please try again.")
  }

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Right Side - Pricing Info (RTL - moved to right) */}
          <div className="space-y-8 lg:order-2">
            {/* Pricing Card */}
            <div className="bg-[#FC8A0A] text-white rounded-none p-8 text-center">
              <div className="mb-4">
                <div className="text-lg font-medium mb-2">السِعر الحقيقي $199</div>
                <div className="text-3xl font-bold">لكنك اليوم ستحصل عليه بـ $9 فقط!</div>
              </div>
            </div>

            {/* Additional Info */}
            <div className=" rounded-none p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                بسعر فنجان قهوة 9$، ستغيّر طريقة تفكيرك في بناء مشروعك…
              </h3>

              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-lg">مباشر عبر منصة زوم في جلستين</p>
                <p className="text-lg font-bold text-[#14697A]">|يومي الجمعة 27 والسبت 28 يونيو 2025 |</p>
                <p className="text-lg font-bold text-[#14697A]">6:00 - 9:00 مساءً بتوقيت مكة</p>
              </div>
            </div>
          </div>

          {/* Left Side - Form (RTL - moved to left) */}
          <div className="bg-white rounded-none p-8 sm:p-10  lg:order-1">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FC8A0A] mb-6 leading-tight">
                الاشتراك في هذا الماستر كلاس
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                إن لم تُخصّص بِضع ساعات لحُلمك الآن… فَمتى؟
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                نحن نبحَث عن المستعدّين فعلاً للالتزام بخطوتهم القادمة نحو مشروع واضِح وناجِح.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-2 focus:ring-[#FC8A0A] focus:border-[#FC8A0A] transition-colors text-base"
                    placeholder="الاسم الأول"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-2 focus:ring-[#FC8A0A] focus:border-[#FC8A0A] transition-colors text-base"
                    placeholder="الاسم الأخير"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-2 focus:ring-[#FC8A0A] focus:border-[#FC8A0A] transition-colors text-base"
                  placeholder="عنوان البريد الإلكتروني"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  dir="rtl"
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-2 focus:ring-[#FC8A0A] focus:border-[#FC8A0A] transition-colors text-base"
                  placeholder="رقم الهاتف"
                />
              </div>
              {/* Discount Code */}
            <div>
                <input
                    type="text"
                    id="code"
                    name="code"
                    value={formData.code || ""}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-2 focus:ring-[#FC8A0A] focus:border-[#FC8A0A] transition-colors text-base"
                    placeholder="كود الخصم (اختياري)"
                />
            </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FC8A0A] hover:bg-[#e67c09] text-white font-bold py-4 px-6 rounded-none text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                احجز مكانك الآن بـ 9 دولارات
              </button>
            </form>

            {/* Bottom Note */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                في حال اشتركت ولم تتمكّن من الحضور، ستَحصل على "دليل الانطلاقة بِذكاء" وتسجيل الماستر كلاس كاملاً بجودة
                عالية
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
