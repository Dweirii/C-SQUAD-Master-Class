"use client"

import React, { useState } from "react"

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
  const [promoValidated, setPromoValidated] = useState(false)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(74)



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

  if (!promoValidated) {
    if (!formData.code.trim()) {
      setPromoValidated(true)
      return
    }

    setIsValidatingPromo(true)

    try {
      const res = await fetch("/api/validate-promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ promoCode: formData.code }),
      })

      const data = await res.json()
      setIsValidatingPromo(false)

      if (!res.ok || !data.valid) {
        setErrors((prev) => ({ ...prev, code: data.message || "كود الخصم غير صحيح" }))
        return
      }
      setDiscountAmount(data.discount || 0)
      const discounted = 74 - (74 * (data.discount || 0) / 100)
      setPriceAfterDiscount(discounted)
      setPromoValidated(true)

    } catch (error) {
      setErrors((prev) => ({ ...prev, code: "حدث خطأ أثناء التحقق من الكود" }))
      setIsValidatingPromo(false)
    }

    return
  }

  if (!validateForm()) return

  setIsSubmitting(true)

  try {
    const checkoutRes = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, discount: discountAmount }),
    })

    const checkoutData = await checkoutRes.json()

    if (checkoutData.redirectUrl) {
      window.location.href = checkoutData.redirectUrl
    } else if (checkoutData.url) {
      window.location.href = checkoutData.url
    }
  } catch (err) {
    console.error("Something went wrong", err)
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <section className="py-10 sm:py-14 lg:py-0 mt-4 lg:mt-0 lg:mb-24 mb-14 sm:mb-14">
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
                السعر الأصلي <span className="line-through text-xl">200$</span>
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
                  type="text"
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
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    placeholder="كود الخصم (اختياري)"
                    className={`w-full px-4 py-3 border-2 rounded-none focus:outline-none focus:ring-2 focus:ring-[#FC8A0A] transition-colors ${
                      errors.code ? "border-red-500" : "border-gray-100"
                    }`}
                  />
                  <p
                    className={`text-sm min-h-[20px] text-left ${
                      errors.code ? "text-red-500" : "text-transparent"
                    }`}
                  >
                    {errors.code || "."}
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    value={`$${priceAfterDiscount.toFixed(2)}`}
                    disabled
                    className="w-full px-4 py-3 border-2 bg-gray-100 rounded-none text-center font-bold"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isValidatingPromo}
                className="w-full px-6 max-w-md bg-[#FC8A0A] hover:bg-[#e67c09] text-white font-bold py-3 rounded-none text-lg sm:text-xl transition-all duration-200 mx-auto text-center disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? "يرجى الانتظار..."
                  : isValidatingPromo
                  ? "جاري التحقق من كود الخصم..."
                  : promoValidated || !formData.code.trim()
                  ? "تأكيد التسجيل"
                  : "تحقق من كود الخصم"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}