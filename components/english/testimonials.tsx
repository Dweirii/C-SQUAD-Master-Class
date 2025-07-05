"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Hiba Naser",
    country: "United States",
    flag: "https://flagcdn.com/w40/us.png",
    testimonial: "This inspired me to start my journey as a successful woman who carries great values in her heart.",
  },
  {
    id: 2,
    name: "Nedaa Qarmash",
    country: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
    testimonial:
      "There was no time to feel bored — her way of delivering the information was amazing. From the very start, she easily captured our attention. Thank you all for your precious time and for this beautiful opportunity.",
  },
  {
    id: 3,
    name: "Sandra Sleman",
    country: "Denmark",
    flag: "https://flagcdn.com/w40/dk.png",
    testimonial:
      "Coach Ala’a, you are fierce and creative. The workshop was rich and valuable — complete in every sense. It sparked awareness and clarity, lit up all the light bulbs in my head. Your energy is unmatched. Everything you shared came straight from the heart. You gave me my first step from ground zero and shattered many limiting beliefs. Truly, thank you, thank you, thank you.",
  },
  {
    id: 6,
    name: "Lama alomari",
    country: "Canada",
    flag: "https://flagcdn.com/w40/ca.png",
    testimonial:
      "Absolutely amazing — full of excitement and positive energy! A sea of knowledge and confident, solid techniques. You are truly a creative soul. Mashallah!",
  },
  {
    id: 11,
    name: "Rawa’a Al Qaisi",
    country: "Saudi Arabia",
    flag: "https://flagcdn.com/w40/sa.png",
    testimonial: "Coach Ala’a was amazing — she gave from the heart. I felt every word. Her support and passion were inspiring.",
  },
  {
    id: 12,
    name: "Lina AlQariab",
    country: "Qatar",
    flag: "https://flagcdn.com/w40/qa.png",
    testimonial: "I never thought I’d resonate with this kind of approach, but you kept me engaged the entire time. Everything was clear and easy to follow.",
  },
  {
    id: 13,
    name: "Hadla AL Nabulsi",
    country: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
    testimonial: "Powerful and energizing — it truly shifts your way of thinking.",
  },
  {
    id: 14,
    name: "Esra'a Jehad",
    country: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
    testimonial: "Engaging, energetic, and interactive in an amazing way. The idea of turning on the camera during the session was a beautiful touch.",
  },
  {
    id: 15,
    name: "Maryya Jawarneh",
    country: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
    testimonial: "It was a wonderful, exciting, and inspiring workshop full of ideas. You were amazing, Coach — may Allah bless you even more.",
  },
  {
    id: 16,
    name: "Faisal saleh alshehri",
    country: "Saudi Arabia",
    flag: "https://flagcdn.com/w40/sa.png",
    testimonial: "It touched something deep inside — it truly changed how I think about problems and how to analyze and solve them.",
  },
  {
    id: 4,
    name: "Anonymous",
    country: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
    testimonial:
      "Before the workshop: I was someone who couldn’t identify the challenges or problems I was facing. After the workshop: I started identifying specific challenges and hidden obstacles I hadn’t seen before. My thinking changed completely. This was truly beneficial in every aspect of life — not just business. Huge thanks to Coach Ala’a and the team.",
  },
  {
    id: 5,
    name: "Leena AbuTaleb",
    country: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
    testimonial:
      "I’m grateful I attended this workshop at this particular time. I’m thankful to Coach Ala’a for her generosity, energy, and all the valuable knowledge she shared with us. Thank you all.",
  },
  {
    id: 7,
    name: "Hala Al Ramony",
    country: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
    testimonial: "It added so much value — especially in developing creative thinking. It felt like a compass and a real starting point toward my goals.",
  },
  {
    id: 8,
    name: "Taqwa Fawzi Bani Amer",
    country: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
    testimonial: "It was a very useful and great workshop. I learned new techniques for generating business ideas.",
  },
  {
    id: 9,
    name: "Hashem hussein al Rabiee",
    country: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
    testimonial: "Such a beautiful and inspiring initiative. Knowing people like this exist reminds us there’s still goodness in the world.",
  },
  {
    id: 10,
    name: "Amal Taani",
    country: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
    testimonial: "Truly valuable. The information was presented simply with real-life examples. I loved being able to interact and ask questions.",
  },
];



export default function TestimonialsEnglishCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(6)
  const [columnsInGrid, setColumnsInGrid] = useState(3)

  useEffect(() => {
    const getScreenConfig = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 1024) return { items: 6, cols: 3 }
        if (window.innerWidth >= 768) return { items: 2, cols: 2 }
        return { items: 1, cols: 1 }
      }
      return { items: 6, cols: 3 }
    }

    const handleResize = () => {
      const config = getScreenConfig()
      setItemsPerPage(config.items)
      setColumnsInGrid(config.cols)

      const newTotalPages = config.items > 0 ? Math.ceil(testimonials.length / config.items) : 0
      if (currentPage >= newTotalPages && newTotalPages > 0) {
        setCurrentPage(newTotalPages - 1)
      } else if (currentPage >= newTotalPages && newTotalPages === 0) {
        setCurrentPage(0)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentPage])

  const totalPages = itemsPerPage > 0 ? Math.ceil(testimonials.length / itemsPerPage) : 0

  const  prevPage= () => {
    if (isTransitioning || totalPages <= 1) return
    setIsTransitioning(true)
    setCurrentPage((prev) => (prev + 1) % totalPages)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const nextPage = () => {
    if (isTransitioning || totalPages <= 1) return
    setIsTransitioning(true)
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const getCurrentTestimonials = () => {
    if (itemsPerPage <= 0) return []
    const start = currentPage * itemsPerPage
    const end = start + itemsPerPage
    return testimonials.slice(start, end)
  }

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isTransitioning) return
    const distance = touchStart - touchEnd
    const swipeThreshold = 30
    if (distance > swipeThreshold) nextPage()
    else if (distance < -swipeThreshold) prevPage()
    setTouchStart(0)
    setTouchEnd(0)
  }

  const currentTestimonials = getCurrentTestimonials()
  const numDisplayRows = columnsInGrid > 0 ? Math.ceil(currentTestimonials.length / columnsInGrid) : 0

  return (
    <section className="bg-white overflow-hidden lg:py-6 mt-12 lg:mt-1 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 py-10 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FC8A0A] mb-4 leading-tight">
            What past participants in similar events are saying?
          </h2>
          <p className="text-[#545454] font-bold text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We won’t just tell you what you’ll gain — we’ll let past participants show you how this experience changed
            everything for them.
          </p>
        </div>

        <div className="relative">
          <button onClick={prevPage} disabled={totalPages <= 1 || isTransitioning} className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110">
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={nextPage} disabled={totalPages <= 1 || isTransitioning} className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className={`grid ${numDisplayRows <= 1 ? "grid-rows-1" : "grid-rows-2"} gap-4 transition-all duration-700 ease-out ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            {Array.from({ length: numDisplayRows }).map((_, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentTestimonials.slice(rowIndex * columnsInGrid, (rowIndex + 1) * columnsInGrid).map((testimonial) => (
                  <div key={testimonial.id} className="transition-all transform">
                    <TestimonialCardArabic testimonial={testimonial} />
                  </div>
                ))}
              </div>
            ))}
            {currentTestimonials.length === 0 && (
              <div className="col-span-full text-center py-10 text-gray-500">No testimonials to display currently.</div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex lg:hidden justify-center gap-4 mt-6">
              <button onClick={prevPage} disabled={isTransitioning} className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A]">
                <ChevronRight className="w-5 h-5" />
              </button>
              <button onClick={nextPage} disabled={isTransitioning} className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-500">
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export function TestimonialCardArabic({ testimonial }: { testimonial: any }) {
  const countryCode = testimonial.country
    .toLowerCase()
    .replace(/ /g, "-")

  return (
    <div className="bg-[#F9FAFB] p-4 sm:p-6 h-full flex flex-col border border-gray-100">
      <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow relative z-10 font-cairo">
        {testimonial.testimonial}
      </blockquote>

      {/* ✅ Separator */}
      <div className="border-t border-gray-200 pt-4 relative z-10 flex items-center gap-4">
      <div className="text-left">
        <div className="font-bold text-gray-900 text-sm sm:text-base font-lato">
          {testimonial.name}
        </div>
        <div className="text-gray-600 text-xs sm:text-sm font-cairo flex items-center gap-2">
        <Image
          src={testimonial.flag}
          alt={`علم ${testimonial.country}`}
          width={24}
          height={16}
          className="object-cover rounded-none border w-[24px] h-[16px]"
          unoptimized
        />
            <span>{testimonial.country}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
