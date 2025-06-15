"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Hiba Naser",
    country: "United States",
    flag: "🇺🇸",
    testimonial: "It motivated me to start my journey as a successful woman with great values.",
  },
  {
    id: 2,
    name: "Nedaa Qarmash",
    country: "Jordan",
    flag: "🇯🇴",
    testimonial:
      "There was no time to feel bored, her way of delivering the information was amazing, from the very start she stole our attention easily. Thanks all for your precious time and for the lovely opportunity.",
  },
  {
    id: 3,
    name: "Sandra Sleman",
    country: "Denmark",
    flag: "🇩🇰",
    testimonial:
      "Coach Ala'a, you're fierce and absolutely brilliant. This workshop was so rich and valuable — truly complete. It lit up all the bulbs in my head with awareness and clarity. Your energy is something else. Everything you shared came straight from the heart, and you gave me my very first step from ground zero. You shattered so many limiting beliefs I had. Truly, truly — thank you, thank you, thank you. Grateful for you and your generosity. May it all be added to your blessings.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        {/* Compact Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FC8A0A] mb-4 leading-tight">
            What past participants are saying?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Real experiences from participants who transformed their ideas into reality.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A] transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A] transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonials Container */}
          <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop View - 3 Cards */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => {
                const isActive = index === currentIndex

                return (
                  <div
                    key={testimonial.id}
                    className={`transition-all duration-500 cursor-pointer ${
                      isActive ? "scale-105 opacity-100" : "scale-95 opacity-75 hover:opacity-90 hover:scale-100"
                    }`}
                    onClick={() => goToSlide(index)}
                  >
                    <TestimonialCard testimonial={testimonial} isActive={isActive} />
                  </div>
                )
              })}
            </div>

            {/* Tablet View - 2 Cards */}
            <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-4">
              {[currentIndex, (currentIndex + 1) % testimonials.length].map((index) => (
                <div key={testimonials[index].id} className="transition-all duration-300">
                  <TestimonialCard testimonial={testimonials[index]} isActive={index === currentIndex} />
                </div>
              ))}
            </div>

            {/* Mobile View - Single Card */}
            <div className="md:hidden">
              <TestimonialCard testimonial={testimonials[currentIndex]} isActive={true} />
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden justify-center gap-3 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A] transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A] transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Compact Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-200 rounded-full ${
                  index === currentIndex ? "w-6 h-2 bg-[#FC8A0A]" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Compact TestimonialCard component
function TestimonialCard({ testimonial, isActive }: { testimonial: any; isActive: boolean }) {
  return (
    <div
      className={`bg-gray-50 rounded-2xl p-5 sm:p-6 h-full flex flex-col shadow-md hover:shadow-lg transition-all duration-300 border ${
        isActive ? "border-[#FC8A0A]/20" : "border-gray-100"
      }`}
    >
      {/* Compact Quote Icon */}
      <div className={`text-2xl mb-3 ${isActive ? "text-[#FC8A0A]" : "text-gray-400"}`}>
        <Quote className="w-5 h-5" />
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
        "{testimonial.testimonial}"
      </blockquote>

      {/* Compact Author Info */}
      <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
        <span className="text-lg">{testimonial.flag}</span>
        <div>
          <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
          <div className="text-gray-500 text-xs sm:text-sm">{testimonial.country}</div>
        </div>
      </div>
    </div>
  )
}
