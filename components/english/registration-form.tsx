"use client"

import React, { useEffect, useState } from "react"
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
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid Email address"
    if (!formData.phone.trim()) newErrors.phone = "Mobile number is required"
    else if (!validatePhone(formData.phone)) newErrors.phone = "Please enter a valid mobile numbers"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    if (name === "code") {
      setPromoValidated(false)
    }
  }

  useEffect(() => {
    if (!formData.code || promoValidated) return

    const timeout = setTimeout(async () => {
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
          setErrors((prev) => ({ ...prev, code: "Invalid Promo Code!" }))
          setPromoValidated(false)
          setDiscountAmount(0)
          setPriceAfterDiscount(74)
          return
        }

        setErrors((prev) => ({ ...prev, code: undefined }))
        setDiscountAmount(data.discount || 0)
        const discounted = 74 - (74 * (data.discount || 0) / 100)
        setPriceAfterDiscount(discounted)
        setPromoValidated(true)
      } catch (error) {
        setIsValidatingPromo(false)
        setErrors((prev) => ({ ...prev, code: "Something went wrong please try again" }))
      }
    }, 200)

    return () => clearTimeout(timeout)
  }, [formData.code])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
             Register for the Masterclass   
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-bold leading-relaxed">
            If you can&apos;t give your dream a few hours now… then when?
          </p>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-bold lg:mb-12 leading-relaxed">
            We&apos;re here for those truly ready to commit to their next step — toward a clear, grounded, and successful
            business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

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
                    placeholder="First Name"
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
                    placeholder="Last Name"
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
                  placeholder="Email Address"
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
                  placeholder="Mobile Number"
                  dir="ltl"
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
                    placeholder="Promo Code (Optional)"
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
                  ? "Please wait..."
                  : isValidatingPromo
                  ? "Validating the promo code"
                  : promoValidated || !formData.code.trim()
                  ? "Reserve your ticket for Innovation now"
                  : "Validate the promo code"}
              </button>
            </form>
          </div>
          <div className="space-y-6">
            
            <div className="bg-[#FC8A0A] text-white rounded-none p-3 text-center">
              <div className="text-lg sm:text-sm font-bold mb-2 lg:text-lg">
                The Original Price: <span className="line-through text-xl">200$</span>
              </div>
              <div className="text-lg lg:text-lg sm:text-xl font-bold">
                 But today, you can join for just $74!
              </div>
            </div>
            <div className="text-gray-600 rounded-none p-6 text-center">
              <h3 className="text-base sm:text-lg mb-2">Live on Zoom in two sessions</h3>
              <p className="text-base sm:text-lg mb-2">Friday & Saturday, July 11–12, 2025</p>
              <p className="text-base sm:text-lg"> 6:00–9:00 PM (Mecca Time)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}