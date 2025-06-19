"use client"

import React, { useState } from "react"
import { toast } from "sonner"

interface ValidationErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  code?: string
}

export default function RegistrationFormArabic() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    code: "",
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isValidatingPromo, setIsValidatingPromo] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+$/.test(email)
  const validatePhone = (phone: string) => /^[+]?[0-9\s\-()]{8,}$/.test(phone)

  const validateForm = () => {
    const newErrors: ValidationErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = "الاسم الأول مطلوب"
    if (!formData.lastName.trim()) newErrors.lastName = "الاسم الأخير مطلوب"
    if (!formData.email.trim()) newErrors.email = "عنوان البريد الإلكتروني مطلوب"
    else if (!validateEmail(formData.email)) newErrors.email = "يرجى إدخال بريد إلكتروني صحيح"
    if (!formData.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب"
    else if (!validatePhone(formData.phone)) newErrors.phone = "يرجى إدخال رقم هاتف صحيح"

    setErrors(newErrors)
    if (Object.keys(newErrors).length) {
      toast.error("يرجى تصحيح الأخطاء")
      return false
    }
    return true
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    toast.loading("جاري المعالجة...")

    if (formData.code.trim()) {
      setIsValidatingPromo(true)
      const promoRes = await fetch("/api/validate-promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ promoCode: formData.code }),
      })
      const promoData = await promoRes.json()
      setIsValidatingPromo(false)

      if (!promoRes.ok || !promoData.valid) {
        setErrors((prev) => ({ ...prev, code: "كود الخصم غير صحيح أو منتهي الصلاحية" }))
        toast.dismiss()
        toast.error("كود الخصم غير صحيح أو منتهي الصلاحية")
        setIsSubmitting(false)
        return
      }
      toast.success(promoData.message)
    }

    try {
      const checkoutRes = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const checkoutData = await checkoutRes.json()
      toast.dismiss()

      if (checkoutData.redirectUrl) {
        toast.success("تم إنشاء طلبك بنجاح!")
        window.location.href = checkoutData.redirectUrl
      } else if (checkoutData.url) {
        toast.success("جاري توجيهك لصفحة الدفع...")
        window.location.href = checkoutData.url
      } else {
        toast.error(checkoutData.error || "حدث خطأ، يرجى المحاولة مرة أخرى.")
      }
    } catch {
      toast.dismiss()
      toast.error("حدث خطأ، يرجى المحاولة مرة أخرى.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-10 sm:py-14 lg:py-2 mt-4 lg:mt-0ç lg:mb-24 mb-14 sm:mb-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FC8A0A] mb-4 sm:mb-6 lg:mb-12">
            الاشتراك في هذا الماستر كلاس
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-bold leading-relaxed">
            إن لم تُخصّص بِضع ساعات لحُلمك الآن… فَمتى؟
          </p>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-bold lg:mb-12 leading-relaxed">
            نحن نبحث عن المستعدين فعلاً للالتزام بخطوتهم القادمة نحو مشروع واضح وناجح.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-[#FC8A0A] text-white rounded-none p-3 text-center">
              <div className="text-lg sm:text-sm font-bold mb-2 lg:text-lg">
                السعر الأصلي <span className="line-through">200$</span>
              </div>
              <div className="text-lg sm:text-xl font-bold">
                لكنّك اليوم ستحصل عليه بـ 74$ فقط!
              </div>
            </div>
            <div className="text-gray-600 rounded-none p-6 text-center">
              <h3 className="text-base sm:text-lg mb-2">مباشر عبر منصة زوم في جلستين</h3>
              <p className="text-base sm:text-lg mb-2">يومي الجمعة 11 والسبت 12 يوليو 2025</p>
              <p className="text-base sm:text-lg">6:00 - 9:00 مساءً بتوقيت مكة</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 flex flex-col items-center justify-center"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="الاسم الأول"
                    className={`w-full px-4 py-3 border-2 rounded-none focus:outline-none focus:ring-2 focus:ring-[#FC8A0A] transition-colors ${
                      errors.firstName ? "border-red-500" : "border-gray-100"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1 text-left">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="الاسم الأخير"
                    className={`w-full px-4 py-3 border-2 rounded-none focus:outline-none focus:ring-2 focus:ring-[#FC8A0A] transition-colors ${
                      errors.lastName ? "border-red-500" : "border-gray-100"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1 text-left">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="عنوان البريد الإلكتروني"
                  className={`w-full px-4 py-3 border-2 text-left rounded-none focus:outline-none focus:ring-2 focus:ring-[#FC8A0A] transition-colors ${
                    errors.email ? "border-red-500" : "border-gray-100"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="رقم الهاتف"
                  dir="rtl"
                  className={`w-full px-4 py-3 border-2 rounded-none focus:outline-none focus:ring-2 focus:ring-[#FC8A0A] transition-colors ${
                    errors.phone ? "border-red-500" : "border-gray-100"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 text-left">{errors.phone}</p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleInputChange}
                  placeholder="كود الخصم"
                  className={`w-full px-4 py-3 border-2 rounded-none focus:outline-none focus:ring-2 focus:ring-[#FC8A0A] transition-colors ${
                    errors.code ? "border-red-500" : "border-gray-100"
                  }`}
                />
                {isValidatingPromo && (
                  <p className="text-gray-600 text-sm mt-1 text-left">جاري التحقق من كود الخصم...</p>
                )}
                {errors.code && (
                  <p className="text-red-500 text-sm mt-1 text-left">{errors.code}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isValidatingPromo}
                className="w-full sm:w-auto px-6 lg:max-w-sm bg-[#FC8A0A] hover:bg-[#e67c09] justify-center text-center disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 rounded-none text-lg sm:text-xl transition-all duration-200 mx-auto"
              >
                {isSubmitting ? "جاري المعالجة..." : "احجز مكانك في رحلة الابتكار الآن"}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}