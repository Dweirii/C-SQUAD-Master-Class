"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
// import VideoHero from "../video"

const testimonials = [
  {
    id: 7,
    name: "Lama Alomari",
    image: "/omari.jpg",
    country: "Canada",
    flag: "https://flagcdn.com/w40/ca.png",
    testimonial:
      "برنامج MYZ كان نقلة نوعية في حياتي. كوتش آلاء بخبرتها وطاقتها الإيجابية ساعدتني أركز وأنفذ. البرنامج غيّر طريقة تفكيري كلياً.",
  },
  {
    id: 8,
    name: "Galia Habiba",
    image: "/ghalia.jpg",
    country: "Australia",
    flag: "https://flagcdn.com/w40/au.png",
    testimonial:
      "برنامج MYZ هو برنامج منظم يساعد على مواجهة التحديات بطريقة منهجية تعتمد على التفكير التصميمي. كوتش آلاء كانت قادرة على ربط هذا العلم بريادة الأعمال، وساعدتني على التحول إلى نسخة أفضل. أشكر الله على جمعي بها وبفريقها المحترف.",
  },
  {
    id: 9,
    name: "Gufran Al-Mehdi",
    image: "/ghufran.jpg",
    country: "USA",
    flag: "https://flagcdn.com/w40/us.png",
    testimonial:
      "كوتش آلاء أحدثت فرقًا كبيرًا في رحلتي. زودتني بثقة، توجيه، وحكمة لا تقدر بثمن. ساعدتني أكون النسخة الأفضل من نفسي، وأنا ممتنة للغاية لهذه التجربة.",
  },
  {
    id: 1,
    name: "Lina Zalloum",
    image: "/lina.png",
    country: "Canada",
    flag: "https://flagcdn.com/w40/ca.png",
    testimonial:
      "برنامج من الطراز الرفيع. المدربة مؤهلة تأهيلاً عالياً وتقدم بطريقة جذابة وبسيطة، لكنها في غاية الاحترافية. شاملة للغاية، مدروسة ولديها جانب إنساني جميل فيما تفعله. الفريق فعال للغاية وسريع الاستجابة! المهام لم تتوافق معي لكن المدربة آلاء كانت سريعة في ملاحظة ذلك وإيجاد حل له!",
  },
  {
    id: 2,
    name: "Samah Awad",
    image: "/samah.jpeg",
    country: "UAE",
    flag: "https://flagcdn.com/w40/ae.png",
    testimonial:
      "تعجز كلماتي عن وصف البرنامج بتفاصيله... شعرت بنداء روحي لتواجدي مع كوتش آلاء، وكان هذا البرنامج هو الداعم والمرشد لي في وقت التحديات. كنت أنتظر الجلسات بفارغ الصبر لما فيها من رسائل وفتوحات، وممتنة لعائلة روحية أنارت دربي.",
  },
  {
    id: 3,
    name: "Ro’aa Khreis",
    image: "/roa'a.jpeg",
    country: "Saudi Arabia",
    flag: "https://flagcdn.com/w40/sa.png",
    testimonial:
      "برنامج رائع، يفتح الأعين ويغير الحياة... يمنحك نظرة مختلفة وإدراكًا جديدًا، والأهم من ذلك يزرع الأمل والطاقة الإيجابية.",
  },
  {
    id: 6,
    name: "Rawa’a AlQasi",
    image: "/roaa1.jpg",
    country: "Saudi Arabia",
    flag: "https://flagcdn.com/w40/sa.png",
    testimonial:
      "برنامج MYZ من أفضل البرامج التي اشتركت فيها. كوتش آلاء بتاخذك من الصفر إلى هدفك مع دعم لا يتوقف. شعرت لأول مرة أن البزنس ممتع وسهل. أنصح به بشدة!",
  },
  {
    id: 4,
    name: "Areen Shehab",
    image: "/aren.jpg",
    country: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
    testimonial:
      "من فترة أخدت قرار حاسم بحياتي وكوتش آلاء آمنت فيّ وبلشنا نشتغل خطوة بخطوة. الكورس يلي بتعطيه عظيم وفادني كتير.",
  },
  {
    id: 5,
    name: "Lara Masad",
    image: "/ai.jpg",
    country: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
    testimonial:
      "شعور رائع من التمكن مع هذا البرنامج، التعلم المستمر والتطور دافع لإنجازاتنا. إذا كنت جاد بريادة الأعمال فـ هذا البرنامج لك!",
  },
]


export default function TestimonialsArabicCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const [itemsPerPage, setItemsPerPage] = useState(6) // Default to desktop items
  const [columnsInGrid, setColumnsInGrid] = useState(3)

  useEffect(() => {
    const getScreenConfig = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 1024) return { items: 9, cols: 3 } 
        if (window.innerWidth >= 768) return { items: 2, cols: 2 } 
        return { items: 1, cols: 1 } // Mobile
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

  const nextPage = () => {
    if (isTransitioning || totalPages <= 1) return
    setIsTransitioning(true)
    setCurrentPage((prev) => (prev + 1) % totalPages)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const prevPage = () => {
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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isTransitioning) return
    const distance = touchStart - touchEnd
    const swipeThreshold = 30

    if (distance > swipeThreshold) {
      nextPage()
    } else if (distance < -swipeThreshold) {
      prevPage()
    }
    setTouchStart(0)
    setTouchEnd(0)
  }

  const currentTestimonials = getCurrentTestimonials()
  const numDisplayRows = columnsInGrid > 0 ? Math.ceil(currentTestimonials.length / columnsInGrid) : 0

  return (
    <section className="bg-white overflow-hidden lg:py-6 mt-12 lg:mt-1 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 py-10 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FC8A0A] mb-0 leading-tight">
            آراء المُشتركين في البرامِج المشابِهة السّابقة
          </h2>
            <div className="max-w-6xl mx-auto px-6">
              {/* Hero Content */}
              <section className="py-10 lg:py-10">
                <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-right gap-10 max-w-6xl mx-auto px-4">
                  {/* Text Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-lg font-bold text-[#545454]">
                      لا نُخبرك فقط بما ستحصل عليه…
                      بل نترُك المُشتركين يخبرونك كيف غيّرتهم التجربة
                    </h3>
                  </div>

                  {/* Video Section 
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="w-full max-w-[400px] rounded-none overflow-hidden">
                      <VideoHero />
                    </div>
                  </div>
                  */}
                </div>
              </section>
            </div>
        </div>
        <div className="relative">
          <div
            className={`grid ${numDisplayRows <= 1 ? "grid-rows-1" : "grid-rows-2"} gap-4 transition-all duration-700 ease-out ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {Array.from({ length: numDisplayRows > 0 ? numDisplayRows : 0 }).map((_, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentTestimonials
                  .slice(rowIndex * columnsInGrid, (rowIndex + 1) * columnsInGrid)
                  .map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="transition-all transform "
                    >
                      <TestimonialCardArabic testimonial={testimonial} />
                    </div>
                  ))}
              </div>
            ))}
            {currentTestimonials.length === 0 && (
              <div className="col-span-full text-center py-10 text-gray-500">لا توجد آراء لعرضها حالياً.</div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex lg:hidden justify-center gap-4 mt-6">
              {" "}
              {/* Added mt-6 for spacing */}
              <button
                onClick={prevPage}
                disabled={isTransitioning}
                className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A]"
                aria-label="Previous testimonials mobile"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={nextPage}
                disabled={isTransitioning}
                className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-500"
                aria-label="Next testimonials mobile"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        /* Ensure the component takes up space even if content is transitioning or empty, to prevent layout jumps */
        .grid {
          min-height: 100px; /* Adjust as needed based on card height */
        }
      `}</style>
    </section>
  )
}

export function TestimonialCardArabic({ testimonial }: { testimonial: any }) {
  const countryCode = testimonial.country.toLowerCase().replace(/ /g, "-")

  return (
    <div className="bg-[#F9FAFB] p-4 sm:p-6 h-full flex flex-col border border-gray-100 rounded-md">
      <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow relative z-10 font-cairo">
        {testimonial.testimonial}
      </blockquote>

      <div className="text-left rtl:text-right">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
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
    </div>
  )
}