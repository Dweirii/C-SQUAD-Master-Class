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
    id: 6,
    name: "Lama alomari",
    country: "Canada",
    flag: "🇨🇦",
    testimonial:
      "رائعة جداً وكلها حماس وطاقة ايجابية... بحر المعلومات والتكنيك الصح اللي واثقة منه... انتي انسانة مبدعة ما شاء الله عليكي.",
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
]

export default function TestimonialsArabicCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  // Calculate items per page based on screen size
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3 // Desktop: 3 items
      if (window.innerWidth >= 768) return 2 // Tablet: 2 items
      return 1 // Mobile: 1 item
    }
    return 3 // Default for SSR
  }

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage()
      setItemsPerPage(newItemsPerPage)

      // Reset to first page if current page is out of bounds
      const newTotalPages = Math.ceil(testimonials.length / newItemsPerPage)
      if (currentPage >= newTotalPages) {
        setCurrentPage(0)
      }
    }

    // Set initial value
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentPage])

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextPage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const prevPage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const goToPage = (page: number) => {
    if (isTransitioning || page === currentPage) return
    setIsTransitioning(true)
    setCurrentPage(page)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  // Get current testimonials for the current page
  const getCurrentTestimonials = () => {
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return testimonials.slice(startIndex, endIndex)
  }

  // Enhanced touch handlers with momentum
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 30
    const isRightSwipe = distance < -30

    if (isLeftSwipe && !isTransitioning) {
      nextPage()
    } else if (isRightSwipe && !isTransitioning) {
      prevPage()
    }
  }

  const currentTestimonials = getCurrentTestimonials()

  return (
    <section className="bg-white overflow-hidden lg:py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-[#FC8A0A] mb-4 leading-tight">
            آراء المشتركين في الماستر كلاس السابق
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            تجارب حقيقية من المشاركين الذين حوّلوا أفكارهم إلى واقع ملموس.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - RTL adjusted */}
          <button
            onClick={prevPage}
            disabled={totalPages <= 1 || isTransitioning}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A] hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
            aria-label="الصفحة السابقة"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={nextPage}
            disabled={totalPages <= 1 || isTransitioning}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A] hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
            aria-label="الصفحة التالية"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonials Container with Smooth Sliding */}
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative h-auto">
              {/* Current Page */}
              <div
                className={`grid gap-6 transition-all duration-700 ease-out ${
                  itemsPerPage === 3 ? "lg:grid-cols-3" : itemsPerPage === 2 ? "md:grid-cols-2" : "grid-cols-1"
                } ${isTransitioning ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"}`}
              >
                {currentTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${currentPage}`}
                    className="transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animation: isTransitioning ? "none" : `slideInUp 0.6s ease-out ${index * 150}ms both`,
                    }}
                  >
                    <TestimonialCardArabic testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden justify-center gap-4 mt-8">
            <button
              onClick={prevPage}
              disabled={totalPages <= 1 || isTransitioning}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A] hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
              aria-label="الصفحة السابقة"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={nextPage}
              disabled={totalPages <= 1 || isTransitioning}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#FC8A0A] hover:border-[#FC8A0A] hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
              aria-label="الصفحة التالية"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}

function TestimonialCardArabic({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white p-6 sm:p-7 h-full flex flex-col transition-all duration-500 ease-out border border-gray-100 hover:border-[#FC8A0A]/30 group relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FC8A0A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Quote Icon */}
      <div className="text-[#FC8A0A] mb-4 relative z-10 transition-transform duration-300 group-hover:scale-110">
        <Quote className="w-6 h-6" />
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 flex-grow relative z-10 transition-colors duration-300 group-hover:text-gray-800">
        "{testimonial.testimonial}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-200 relative z-10 transition-all duration-300 group-hover:border-[#FC8A0A]/20">
        <span className="text-xl transition-transform duration-300 group-hover:scale-110">{testimonial.flag}</span>
        <div>
          <div className="font-semibold text-gray-900 text-sm sm:text-base transition-colors duration-300 group-hover:text-[#FC8A0A]">
            {testimonial.name}
          </div>
          <div className="text-gray-500 text-xs sm:text-sm transition-colors duration-300">{testimonial.country}</div>
        </div>
      </div>
    </div>
  )
}
