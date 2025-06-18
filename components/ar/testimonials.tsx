"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Hiba Naser",
    country: "الولايات المتحدة",
    flag: "🇺🇸",
    testimonial: "ألهمني هذا لأبدأ رحلتي كامرأة ناجحة تحمل في قلبها قيماً عظيمة.",
  },
  {
    id: 2,
    name: "Nedaa Qarmash",
    country: "الأردن",
    flag: "🇯🇴",
    testimonial:
      "لم يكن هناك وقت للشعور بالملل، طريقتها في إيصال المعلومات كانت رائعة، ومنذ اللحظة الأولى استطاعت أن تخطف انتباهنا بسهولة. شكرًا للجميع على وقتكم الثمين وعلى هذه الفرصة الجميلة.",
  },
  {
    id: 3,
    name: "Sandra Sleman",
    country: "الدنمارك",
    flag: "🇩🇰",
    testimonial:
      "كوتش آلاء أنت سفاحة ومبدعة، الورشة كتير غنية وقيّمة، كاملة متكاملة فيها وعي وتفاصيل بتضوي كل اللمبات اللي براسنا، طاقتك غير، كل شي قدمتيه من القلب للقلب وعطيتيني الخطوة الأولى بالصفر تبعي وعصفتي كتير معتقدات عندي عنجد عنجد شكرا شكرا شكرا شكرا.",
  },
  {
    id: 6,
    name: "Lama alomari",
    country: "Canada",
    flag: "🇨🇦",
    testimonial:
      "رائعة جداً وكلها حماس وطاقة ايجابية... بحر المعلومات والتكنيك الصح اللي واثقة منه... انتي انسانة مبدعة ما شاء الله عليكي.",
  },
  {
    id: 11,
    name: "روعة محمد القيسي",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    testimonial: "رائعة كوتش آلاء، أعطت من قلبها... حسيت بكل كلمة إلها، دعمها وحماسها رائع.",
  },
  {
    id: 12,
    name: "Lina AlQariab",
    country: "Qatar",
    flag: "🇶🇦",
    testimonial: "رغم أني ما تخيلت أنسجم بهيك أبروتش... بس قدرتي تخليني مشدودة طول الوقت وفهمت كل التفاصيل بسهولة.",
  },
  {
    id: 13,
    name: "Hadla AL Nabulsi",
    country: "Jordan",
    flag: "🇯🇴",
    testimonial: "رائعة وحماسية تغير تفكير الشخص.",
  },
  {
    id: 14,
    name: "Esra'a Jehad",
    country: "Jordan",
    flag: "🇯🇴",
    testimonial: "ممتعة وحماسية وتفاعلية بطريقة رهيبة... موضوع فتح الكاميرا أثناء الشرح كان جميل.",
  },
  {
    id: 15,
    name: "Maryya Jawarneh",
    country: "Jordan",
    flag: "🇯🇴",
    testimonial: "لقد كانت ورشة رائعة، مثيرة، ملهمة، مليئة بالأفكار... أبدعتي كوتش، ربنا يزيدك من فضله.",
  },
  {
    id: 16,
    name: "Faisal saleh alshehri",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    testimonial: "لمسة حواس عميقة، طورت طريقة تفكيري للمشكلات وطرق تحليلها ومعالجتها.",
  },
  {
    id: 4,
    name: "غير مُعلَن",
    country: "Jordan",
    flag: "🇯🇴",
    testimonial:
      "قبل الورشة: شخص ما بيعرف يحدد التحديات و المشاكل... بعد الورشة: بدأ يحدد مشاكل وتحديات معينة... *التفكير اختلف تماماً* الموضوع فعلاً مفيد بكل مناحي الحياة مش بس بالبزنس. شكراً كثير كوتش آلاء والشكر لفريق العمل.",
  },
  {
    id: 5,
    name: "Leena AbuTaleb",
    country: "Jordan",
    flag: "🇯🇴",
    testimonial:
      "أنا ممتنة لحضوري هذه الورشة في هذا الوقت تحديدًا... ممتنة للكوتش آلاء على كرمها وطاقتها وكل المعلومات القيّمة التي شاركتها معنا. شكرًا للجميع.",
  },
  {
    id: 7,
    name: "حلا الرموني",
    country: "Jordan",
    flag: "🇯🇴",
    testimonial: "أضافت إلي الكثير، أهمها التفكير الإبداعي... هذه الورشة بالنسبة إلي كبوصلة و نقطة انطلاق للهدف.",
  },
  {
    id: 8,
    name: "Taqwa Fawzi Bani Amer",
    country: "Jordan",
    flag: "🇯🇴",
    testimonial: "كانت ورشة عمل مفيدة ورائعة جدًا. تعلمت من خلالها بعض التقنيات الجديدة لتوليد أفكار لمشاريعي.",
  },
  {
    id: 9,
    name: "Hashem hussein al Rabiee",
    country: "Jordan",
    flag: "🇯🇴",
    testimonial: "شي كثير حلو مبادرة حلوه وبتجنن... مجرد وجود ناس متل هيك بنعرف أنو الدنيا لسا بخير.",
  },
  {
    id: 10,
    name: "Amal Taani",
    country: "Jordan",
    flag: "🇯🇴",
    testimonial: "قيمّة، تم طرح المعلومات بشكل مبسط مع الأمثلة... وأحببت القدرة على التفاعل وطرح الأسئلة.",
  },
]

export default function TestimonialsArabicCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Initial states assume a common default (e.g., desktop or a specific fallback)
  // These will be updated on mount and resize by useEffect
  const [itemsPerPage, setItemsPerPage] = useState(6) // Default to desktop items
  const [columnsInGrid, setColumnsInGrid] = useState(3) // Default to desktop columns

  useEffect(() => {
    const getScreenConfig = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 1024) return { items: 6, cols: 3 } // Desktop
        if (window.innerWidth >= 768) return { items: 2, cols: 2 } // Tablet
        return { items: 1, cols: 1 } // Mobile
      }
      // SSR fallback or non-browser environment
      return { items: 6, cols: 3 } // Consistent with initial state
    }

    const handleResize = () => {
      const config = getScreenConfig()
      setItemsPerPage(config.items)
      setColumnsInGrid(config.cols)

      const newTotalPages = config.items > 0 ? Math.ceil(testimonials.length / config.items) : 0
      if (currentPage >= newTotalPages && newTotalPages > 0) {
        setCurrentPage(newTotalPages - 1) // Go to last valid page
      } else if (currentPage >= newTotalPages && newTotalPages === 0) {
        setCurrentPage(0) // No pages, reset to 0
      }
    }

    handleResize() // Call on mount to set initial responsive values
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentPage]) // Re-evaluate on currentPage change if needed, though primarily for resize.

  const totalPages = itemsPerPage > 0 ? Math.ceil(testimonials.length / itemsPerPage) : 0

  const nextPage = () => {
    if (isTransitioning || totalPages <= 1) return
    setIsTransitioning(true)
    setCurrentPage((prev) => (prev + 1) % totalPages)
    setTimeout(() => setIsTransitioning(false), 600) // Animation duration
  }

  const prevPage = () => {
    if (isTransitioning || totalPages <= 1) return
    setIsTransitioning(true)
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    setTimeout(() => setIsTransitioning(false), 600) // Animation duration
  }

  const getCurrentTestimonials = () => {
    if (itemsPerPage <= 0) return []
    const start = currentPage * itemsPerPage
    const end = start + itemsPerPage
    return testimonials.slice(start, end)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(0) // Reset touchEnd
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isTransitioning) return
    const distance = touchStart - touchEnd
    const swipeThreshold = 30 // Min distance for a swipe

    if (distance > swipeThreshold) {
      nextPage()
    } else if (distance < -swipeThreshold) {
      prevPage()
    }
    // Reset touch coordinates
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
            آراء المشتركين في الماستر كلاس السابق
          </h2>
          <p className="text-[#545454] font-bold text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            تجارب حقيقية من المشاركين الذين حوّلوا أفكارهم إلى واقع ملموس.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevPage}
            disabled={totalPages <= 1 || isTransitioning}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
            aria-label="Previous testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={nextPage}
            disabled={totalPages <= 1 || isTransitioning}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
            aria-label="Next testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

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

function TestimonialCardArabic({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-[#F9FAFB] p-4 sm:p-6 h-full flex flex-col border border-gray-100">
      <div className="absolute inset-0 bg-[#F9FAFB] rounded-none"></div>

      {/* ⭐⭐⭐⭐⭐ النجوم الذهبية */}
      <div className="flex mb-3 sm:mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.286 3.96c.3.921-.755 1.688-1.54 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.784.57-1.838-.197-1.539-1.118l1.286-3.96a1 1 0 00-.364-1.118l-3.37-2.45c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.959z" />
          </svg>
        ))}
      </div>

      <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow relative z-10">
        "{testimonial.testimonial}"
      </blockquote>

      <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-200 relative z-10 ">
        <span className="text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110">
          {testimonial.flag}
        </span>
        <div>
          <div className="font-semibold text-gray-900 text-sm sm:text-base">
            {testimonial.name}
          </div>
          <div className="text-gray-500 text-xs sm:text-sm transition-colors duration-300">{testimonial.country}</div>
        </div>
      </div>
    </div>
  )
}

