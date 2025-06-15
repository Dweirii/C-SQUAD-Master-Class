"use client"

import { url } from "inspector"
import type React from "react"

import { useState } from "react"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    code:"",
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
    
    const res = await fetch("/api/checkout",{
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(formData),
    })

    if(res.redirected){
        window.location.href = res.url
    }
  }

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Form */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FC8A0A] mb-6 leading-tight">
                Register for the Masterclass
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                If you can't give your dream a few hours now… then when?
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We're here for those truly ready to commit to their next step — toward a clear, grounded, and successful
                business.
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
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC8A0A] focus:border-[#FC8A0A] transition-colors text-base"
                    placeholder="First Name"
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
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC8A0A] focus:border-[#FC8A0A] transition-colors text-base"
                    placeholder="Last Name"
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
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC8A0A] focus:border-[#FC8A0A] transition-colors text-base"
                  placeholder="Email Address"
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
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC8A0A] focus:border-[#FC8A0A] transition-colors text-base"
                  placeholder="Phone Number"
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
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC8A0A] focus:border-[#FC8A0A] transition-colors text-base"
                    placeholder="Promo Code (Optional)"
                />
            </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FC8A0A] hover:bg-[#e67c09] text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Reserve your spot now for just $9
              </button>
            </form>

            {/* Bottom Note */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                If you register but can't attend live, you'll still receive The Innovative-Start Guide and full
                high-quality recordings of the masterclass.
              </p>
            </div>
          </div>

          {/* Right Side - Pricing Info */}
          <div className="space-y-8">
            {/* Pricing Card */}
            <div className="bg-[#FC8A0A] text-white rounded-2xl p-8 text-center">
              <div className="mb-4">
                <div className="text-lg font-medium mb-2">The original value: $199</div>
                <div className="text-3xl font-bold">But today, you can join for just $9!</div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                For the price of coffee, you'll completely shift the way you think about building your business.
              </h3>

              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-lg">Live on Zoom in two sessions</p>
                <p className="text-lg font-bold text-[#14697A]">| Friday & Saturday, June 27–28, 2025 |</p>
                <p className="text-lg font-bold text-[#14697A]">6:00–9:00 PM (Mecca Time)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
