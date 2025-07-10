"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { registerUser } from "@/lib/action"
import { useRouter } from "next/navigation"
import { toast, Toaster } from "sonner"
import { AlertCircle, Check, Loader2, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Footer from "@/components/ar/footer"

// Countries in Arabic
const countries = [
  { value: "الإمارات العربية المتحدة", label: "الإمارات العربية المتحدة" },
  { value: "المملكة العربية السعودية", label: "المملكة العربية السعودية" },
  { value: "مصر", label: "مصر" },
  { value: "الأردن", label: "الأردن" },
  { value: "لبنان", label: "لبنان" },
  { value: "سوريا", label: "سوريا" },
  { value: "العراق", label: "العراق" },
  { value: "الكويت", label: "الكويت" },
  { value: "قطر", label: "قطر" },
  { value: "البحرين", label: "البحرين" },
  { value: "عُمان", label: "عُمان" },
  { value: "اليمن", label: "اليمن" },
  { value: "فلسطين", label: "فلسطين" },
  { value: "المغرب", label: "المغرب" },
  { value: "الجزائر", label: "الجزائر" },
  { value: "تونس", label: "تونس" },
  { value: "ليبيا", label: "ليبيا" },
  { value: "السودان", label: "السودان" },
  { value: "الصومال", label: "الصومال" },
  { value: "جيبوتي", label: "جيبوتي" },
  { value: "موريتانيا", label: "موريتانيا" },
  { value: "جزر القمر", label: "جزر القمر" },
  { value: "الولايات المتحدة الأمريكية", label: "الولايات المتحدة الأمريكية" },
  { value: "كندا", label: "كندا" },
  { value: "المملكة المتحدة", label: "المملكة المتحدة" },
  { value: "فرنسا", label: "فرنسا" },
  { value: "ألمانيا", label: "ألمانيا" },
  { value: "إيطاليا", label: "إيطاليا" },
  { value: "إسبانيا", label: "إسبانيا" },
  { value: "هولندا", label: "هولندا" },
  { value: "بلجيكا", label: "بلجيكا" },
  { value: "سويسرا", label: "سويسرا" },
  { value: "النمسا", label: "النمسا" },
  { value: "السويد", label: "السويد" },
  { value: "النرويج", label: "النرويج" },
  { value: "الدنمارك", label: "الدنمارك" },
  { value: "فنلندا", label: "فنلندا" },
  { value: "أيرلندا", label: "أيرلندا" },
  { value: "البرتغال", label: "البرتغال" },
  { value: "اليونان", label: "اليونان" },
  { value: "تركيا", label: "تركيا" },
  { value: "روسيا", label: "روسيا" },
  { value: "أوكرانيا", label: "أوكرانيا" },
  { value: "بولندا", label: "بولندا" },
  { value: "التشيك", label: "التشيك" },
  { value: "المجر", label: "المجر" },
  { value: "رومانيا", label: "رومانيا" },
  { value: "بلغاريا", label: "بلغاريا" },
  { value: "كرواتيا", label: "كرواتيا" },
  { value: "صربيا", label: "صربيا" },
  { value: "البوسنة والهرسك", label: "البوسنة والهرسك" },
  { value: "الصين", label: "الصين" },
  { value: "اليابان", label: "اليابان" },
  { value: "كوريا الجنوبية", label: "كوريا الجنوبية" },
  { value: "الهند", label: "الهند" },
  { value: "باكستان", label: "باكستان" },
  { value: "بنغلاديش", label: "بنغلاديش" },
  { value: "إندونيسيا", label: "إندونيسيا" },
  { value: "ماليزيا", label: "ماليزيا" },
  { value: "تايلاند", label: "تايلاند" },
  { value: "سنغافورة", label: "سنغافورة" },
  { value: "الفلبين", label: "الفلبين" },
  { value: "فيتنام", label: "فيتنام" },
  { value: "أستراليا", label: "أستراليا" },
  { value: "نيوزيلندا", label: "نيوزيلندا" },
  { value: "جنوب أفريقيا", label: "جنوب أفريقيا" },
  { value: "نيجيريا", label: "نيجيريا" },
  { value: "كينيا", label: "كينيا" },
  { value: "إثيوبيا", label: "إثيوبيا" },
  { value: "غانا", label: "غانا" },
  { value: "البرازيل", label: "البرازيل" },
  { value: "الأرجنتين", label: "الأرجنتين" },
  { value: "المكسيك", label: "المكسيك" },
  { value: "تشيلي", label: "تشيلي" },
  { value: "كولومبيا", label: "كولومبيا" },
  { value: "بيرو", label: "بيرو" },
  { value: "فنزويلا", label: "فنزويلا" },
  { value: "الإكوادور", label: "الإكوادور" },
  { value: "أوروغواي", label: "أوروغواي" },
  { value: "إيران", label: "إيران" },
  { value: "أفغانستان", label: "أفغانستان" },
  { value: "أذربيجان", label: "أذربيجان" },
  { value: "أرمينيا", label: "أرمينيا" },
  { value: "جورجيا", label: "جورجيا" },
  { value: "كازاخستان", label: "كازاخستان" },
  { value: "أوزبكستان", label: "أوزبكستان" },
  { value: "قيرغيزستان", label: "قيرغيزستان" },
  { value: "طاجيكستان", label: "طاجيكستان" },
  { value: "تركمانستان", label: "تركمانستان" },
]

// Country codes
const countryCodes = [
  { value: "+971", label: "+971 (الإمارات)", country: "الإمارات العربية المتحدة" },
  { value: "+966", label: "+966 (السعودية)", country: "المملكة العربية السعودية" },
  { value: "+20", label: "+20 (مصر)", country: "مصر" },
  { value: "+962", label: "+962 (الأردن)", country: "الأردن" },
  { value: "+961", label: "+961 (لبنان)", country: "لبنان" },
  { value: "+963", label: "+963 (سوريا)", country: "سوريا" },
  { value: "+964", label: "+964 (العراق)", country: "العراق" },
  { value: "+965", label: "+965 (الكويت)", country: "الكويت" },
  { value: "+974", label: "+974 (قطر)", country: "قطر" },
  { value: "+973", label: "+973 (البحرين)", country: "البحرين" },
  { value: "+968", label: "+968 (عُمان)", country: "عُمان" },
  { value: "+967", label: "+967 (اليمن)", country: "اليمن" },
  { value: "+970", label: "+970 (فلسطين)", country: "فلسطين" },
  { value: "+212", label: "+212 (المغرب)", country: "المغرب" },
  { value: "+213", label: "+213 (الجزائر)", country: "الجزائر" },
  { value: "+216", label: "+216 (تونس)", country: "تونس" },
  { value: "+218", label: "+218 (ليبيا)", country: "ليبيا" },
  { value: "+249", label: "+249 (السودان)", country: "السودان" },
  { value: "+252", label: "+252 (الصومال)", country: "الصومال" },
  { value: "+253", label: "+253 (جيبوتي)", country: "جيبوتي" },
  { value: "+222", label: "+222 (موريتانيا)", country: "موريتانيا" },
  { value: "+269", label: "+269 (جزر القمر)", country: "جزر القمر" },
  { value: "+1", label: "+1 (أمريكا/كندا)", country: "الولايات المتحدة الأمريكية" },
  { value: "+44", label: "+44 (بريطانيا)", country: "المملكة المتحدة" },
  { value: "+33", label: "+33 (فرنسا)", country: "فرنسا" },
  { value: "+49", label: "+49 (ألمانيا)", country: "ألمانيا" },
  { value: "+39", label: "+39 (إيطاليا)", country: "إيطاليا" },
  { value: "+34", label: "+34 (إسبانيا)", country: "إسبانيا" },
  { value: "+31", label: "+31 (هولندا)", country: "هولندا" },
  { value: "+32", label: "+32 (بلجيكا)", country: "بلجيكا" },
  { value: "+41", label: "+41 (سويسرا)", country: "سويسرا" },
  { value: "+43", label: "+43 (النمسا)", country: "النمسا" },
  { value: "+46", label: "+46 (السويد)", country: "السويد" },
  { value: "+47", label: "+47 (النرويج)", country: "النرويج" },
  { value: "+45", label: "+45 (الدنمارك)", country: "الدنمارك" },
  { value: "+358", label: "+358 (فنلندا)", country: "فنلندا" },
  { value: "+353", label: "+353 (أيرلندا)", country: "أيرلندا" },
  { value: "+351", label: "+351 (البرتغال)", country: "البرتغال" },
  { value: "+30", label: "+30 (اليونان)", country: "اليونان" },
  { value: "+90", label: "+90 (تركيا)", country: "تركيا" },
  { value: "+7", label: "+7 (روسيا)", country: "روسيا" },
  { value: "+380", label: "+380 (أوكرانيا)", country: "أوكرانيا" },
  { value: "+48", label: "+48 (بولندا)", country: "بولندا" },
  { value: "+420", label: "+420 (التشيك)", country: "التشيك" },
  { value: "+36", label: "+36 (المجر)", country: "المجر" },
  { value: "+40", label: "+40 (رومانيا)", country: "رومانيا" },
  { value: "+359", label: "+359 (بلغاريا)", country: "بلغاريا" },
  { value: "+385", label: "+385 (كرواتيا)", country: "كرواتيا" },
  { value: "+381", label: "+381 (صربيا)", country: "صربيا" },
  { value: "+387", label: "+387 (البوسنة)", country: "البوسنة والهرسك" },
  { value: "+86", label: "+86 (الصين)", country: "الصين" },
  { value: "+81", label: "+81 (اليابان)", country: "اليابان" },
  { value: "+82", label: "+82 (كوريا الجنوبية)", country: "كوريا الجنوبية" },
  { value: "+91", label: "+91 (الهند)", country: "الهند" },
  { value: "+92", label: "+92 (باكستان)", country: "باكستان" },
  { value: "+880", label: "+880 (بنغلاديش)", country: "بنغلاديش" },
  { value: "+62", label: "+62 (إندونيسيا)", country: "إندونيسيا" },
  { value: "+60", label: "+60 (ماليزيا)", country: "ماليزيا" },
  { value: "+66", label: "+66 (تايلاند)", country: "تايلاند" },
  { value: "+65", label: "+65 (سنغافورة)", country: "سنغافورة" },
  { value: "+63", label: "+63 (الفلبين)", country: "الفلبين" },
  { value: "+84", label: "+84 (فيتنام)", country: "فيتنام" },
  { value: "+61", label: "+61 (أستراليا)", country: "أستراليا" },
  { value: "+64", label: "+64 (نيوزيلندا)", country: "نيوزيلندا" },
  { value: "+27", label: "+27 (جنوب أفريقيا)", country: "جنوب أفريقيا" },
  { value: "+234", label: "+234 (نيجيريا)", country: "نيجيريا" },
  { value: "+254", label: "+254 (كينيا)", country: "كينيا" },
  { value: "+251", label: "+251 (إثيوبيا)", country: "إثيوبيا" },
  { value: "+233", label: "+233 (غانا)", country: "غانا" },
  { value: "+55", label: "+55 (البرازيل)", country: "البرازيل" },
  { value: "+54", label: "+54 (الأرجنتين)", country: "الأرجنتين" },
  { value: "+52", label: "+52 (المكسيك)", country: "المكسيك" },
  { value: "+56", label: "+56 (تشيلي)", country: "تشيلي" },
  { value: "+57", label: "+57 (كولومبيا)", country: "كولومبيا" },
  { value: "+51", label: "+51 (بيرو)", country: "بيرو" },
  { value: "+58", label: "+58 (فنزويلا)", country: "فنزويلا" },
  { value: "+593", label: "+593 (الإكوادور)", country: "الإكوادور" },
  { value: "+598", label: "+598 (أوروغواي)", country: "أوروغواي" },
  { value: "+98", label: "+98 (إيران)", country: "إيران" },
  { value: "+93", label: "+93 (أفغانستان)", country: "أفغانستان" },
  { value: "+994", label: "+994 (أذربيجان)", country: "أذربيجان" },
  { value: "+374", label: "+374 (أرمينيا)", country: "أرمينيا" },
  { value: "+995", label: "+995 (جورجيا)", country: "جورجيا" },
  { value: "+77", label: "+77 (كازاخستان)", country: "كازاخستان" },
  { value: "+998", label: "+998 (أوزبكستان)", country: "أوزبكستان" },
  { value: "+996", label: "+996 (قيرغيزستان)", country: "قيرغيزستان" },
  { value: "+992", label: "+992 (طاجيكستان)", country: "طاجيكستان" },
  { value: "+993", label: "+993 (تركمانستان)", country: "تركمانستان" },
]

interface SearchableSelectProps {
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
  placeholder: string
  searchPlaceholder: string
  error?: boolean
}

function SearchableSelect({ options, value, onChange, placeholder, searchPlaceholder, error }: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()))

  const selectedOption = options.find((option) => option.value === value)

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchTerm("")
        setHighlightedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        setIsOpen(true)
      }
      return
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setHighlightedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : 0))
        break
      case "ArrowUp":
        e.preventDefault()
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : filteredOptions.length - 1))
        break
      case "Enter":
        e.preventDefault()
        if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
          onChange(filteredOptions[highlightedIndex].value)
          setIsOpen(false)
          setSearchTerm("")
          setHighlightedIndex(-1)
        }
        break
      case "Escape":
        setIsOpen(false)
        setSearchTerm("")
        setHighlightedIndex(-1)
        break
    }
  }

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
    setSearchTerm("")
    setHighlightedIndex(-1)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`
          w-full bg-white rounded-none h-10 md:h-14 lg:h-16 
          text-xs md:text-base lg:text-base text-right
          border border-input px-3 py-2
          flex items-center justify-between
          transition-all duration-200
          hover:border-gray-400
          focus:outline-none focus:ring-2
          ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
        `}
        dir="rtl"
      >
        <span className={`truncate ${!selectedOption ? "text-gray-500" : "text-gray-900"}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          {/* Search Input */}
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setHighlightedIndex(-1)
                }}
                placeholder={searchPlaceholder}
                className="w-full pr-10 pl-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                dir="rtl"
              />
            </div>
          </div>

          {/* Options List */}
          <div className="max-h-48 md:max-h-60 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-3 py-4 text-sm text-gray-500 text-center">لا توجد نتائج</div>
            ) : (
              filteredOptions.map((option, index) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleOptionClick(option.value)}
                  className={`
                    w-full px-3 py-3 text-right text-sm
                    transition-colors duration-150
                    flex items-center justify-between
                    ${highlightedIndex === index ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50"}
                    ${selectedOption?.value === option.value ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-900"}
                  `}
                  dir="rtl"
                >
                  <span className="truncate">{option.label}</span>
                  {selectedOption?.value === option.value && (
                    <Check className="h-4 w-4 text-blue-600 flex-shrink-0 ml-2" />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function RegistrationForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    countryCode: "",
    phone: "",
    country: "",
    currentStage: "",
    aboutUs: "",
    aboutUsOther: "",
    aboutYouAndWhy: "",
    checkFirst: false,
    checkSecond: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [registrationId, setRegistrationId] = useState<string | null>(null)

  const errorMessages: Record<string, string> = {
    fullName: "يرجى إدخال الاسم الكامل",
    gender: "يرجى اختيار الجنس",
    email: "يرجى إدخال بريد إلكتروني صحيح",
    countryCode: "يرجى اختيار رمز الدولة",
    phone: "يرجى إدخال رقم هاتف صحيح",
    country: "يرجى اختيار بلد الإقامة",
    currentStage: "يرجى اختيار مرحلتك الحالية",
    aboutUs: "هذا الحقل إجباري",
    aboutUsOther: "يرجى تحديد كيف عرفت عنا",
    aboutYouAndWhy: "هذا الحقل إجباري",
    checkFirst: "هذا الحقل إجباري",
    checkSecond: "هذا الحقل إجباري",
  }

  const validateField = (name: string, value: string | boolean) => {
    if (name === "email" && typeof value === "string") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!value) return errorMessages.email
      if (!emailRegex.test(value)) return errorMessages.email
      return ""
    }

    if (name === "phone" && typeof value === "string") {
      if (!value.trim()) return errorMessages.phone
      if (value.length < 5) return errorMessages.phone
      return ""
    }

    if (name === "aboutUsOther" && typeof value === "string") {
      if (formData.aboutUs === "أخرى" && !value.trim()) {
        return errorMessages.aboutUsOther
      }
      return ""
    }

    if ((name === "checkFirst" || name === "checkSecond") && typeof value === "boolean") {
      return value ? "" : errorMessages[name]
    }

    if (typeof value === "string" && !value.trim()) {
      return errorMessages[name] || "هذا الحقل مطلوب"
    }

    return ""
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === "aboutUs" && value !== "أخرى") {
      setFormData((prev) => ({ ...prev, aboutUsOther: "" }))
    }

    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, checked) }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    let isValid = true

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "aboutUsOther" && formData.aboutUs !== "أخرى") {
        return // Skip validation for aboutUsOther if aboutUs is not "أخرى"
      }

      const error = validateField(key, value as any)
      if (error) {
        newErrors[key] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}))
    
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      
      // التحقق من أن جميع الحقول المطلوبة موجودة
      const requiredFields = {
        fullName: formData.fullName,
        gender: formData.gender,
        email: formData.email,
        countryCode: formData.countryCode,
        phone: formData.phone,
        country: formData.country,
        currentStage: formData.currentStage,
        aboutUs: formData.aboutUs,
        aboutYouAndWhy: formData.aboutYouAndWhy,
        checkFirst: formData.checkFirst,
        checkSecond: formData.checkSecond,
      }
      
      
      const result = await registerUser({
        fullName: formData.fullName,
        gender: formData.gender as "ذكر" | "أنثى",
        email: formData.email,
        phone: `${formData.countryCode}${formData.phone}`,
        country: formData.country,
        currentStage: formData.currentStage as
  | "أحاول أبدأ مشروع من شغفي"
  | "أعمل على مشروع حاليًا وأواجه تحديات"
  | "موظف وأسعى لتطوير مهاراتي العملية أو خلق مصدر دخل إضافي"
  | "طالب وأسعى لزيادة تميزي ومهاراتي لمواكبة سوق العمل",

        aboutUsOther: formData.aboutUsOther,
        aboutYouAndWhy: formData.aboutYouAndWhy,
        checkFirst: formData.checkFirst,
        checkSecond: formData.checkSecond,
      })

      if (result.success) {
        toast.success("تم التسجيل بنجاح!", {
          description: "سيتم توجيهك إلى صفحة الحجز",
          className: "font-cairo",
        })
        
        // إضافة تأخير قصير قبل إعادة التوجيه
        setTimeout(() => {
          router.push("/business-alchemy-appointment")
        }, 1500)
      } else {
        if (result.errors) {
          const serverErrors: Record<string, string> = {}
          Object.entries(result.errors).forEach(([field, messages]) => {
            if (Array.isArray(messages) && messages.length > 0) {
              serverErrors[field] = messages[0]
            }
          })
          setErrors((prev) => ({ ...prev, ...serverErrors }))
        } else {
          toast.error("خطأ في التسجيل", {
            description: result.message || "حدث خطأ أثناء معالجة طلبك",
            className: "font-cairo",
          })
        }
      }
    } catch (error) {
      toast.error("خطأ في النظام", {
        description: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى لاحقاً.",
        className: "font-cairo",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setIsSuccess(false)
    setRegistrationId(null)
    setFormData({
      fullName: "",
      gender: "",
      email: "",
      countryCode: "",
      phone: "",
      country: "",
      currentStage: "",
      aboutUs: "",
      aboutUsOther: "",
      aboutYouAndWhy: "",
      checkFirst: false,
      checkSecond: false,
    })
    setErrors({})
    setTouched({})
  }

  return (
    <div className="min-h-screen flex flex-col bg-white" dir="rtl">
      <header className="bg-[#14697A] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="hidden lg:flex items-center">
                  <div className="flex-grow flex justify-start items-start px-6">
                    <p className="text-base font-bold text-right pb-1">
                      البرنامج العَملي الأول من نوعه لإطلاق و تطوير المشاريع الإبتكارية
                    </p>
                  </div>
                  <Image
                    src="/c-squad-logo.png"
                    alt="C-SQUAD LOGO"
                    width={110}
                    height={30}
                    className="object-contain lg:ml-7"
                  />
                </div>
      
                <div className="lg:hidden">
                  <div className="flex items-center justify-center pt-8 pb-4 h-14">
                    <Image
                      src="/c-squad-logo.png"
                      alt="شعار سي-سكواد"
                      width={100}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div className="border-t border-white/20 mt-1 py-4">
                    <p className="text-center text-xs font-bold sm:text-sm">
                      البرنامج العَملي الأول من نوعه لإطلاق و تطوير المشاريع الإبتكارية
                    </p>
                  </div>
                </div>
              </div>
            </header>
      <main className="flex-1 bg-white p-4 md:p-8 py-8 lg:py-28">
        <div className="max-w-6xl px-4 md:px-14 py-8 md:py-14 mx-auto bg-gray-50 rounded-none shadow-sm">
          <h2 className="text-lg md:text-2xl lg:text-2xl font-cairo font-semibold text-center mb-4 md:mb-6 text-gray-800">
             شكرًا على اهتمامك بالانضمام إلى برنامج "خِيمياء البزنس - Business Alchemy"
          </h2>
          <p className="text-xs md:text-sm lg:text-base font-semibold text-gray-700 mb-6 md:mb-8 text-center px-2">
            هذه المكالمة مُخصّصة لمساعدتك على فهم تَحدياتك، واكتشاف كيف يمكن للبرنامج دعمك في تصميم بزنس يُشبهك ويتقدّم بثقة
          </p>
            <form onSubmit={handleSubmit} className="space-y-6 pt-8 md:pt-14">
              {/* Full Name and Gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                    الإسم الكامل
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=" الإسم بالكامل"
                    className={`w-full bg-white rounded-none h-10 md:h-14 lg:h-16 text-xs md:text-base lg:text-base  ${
                      errors.fullName && touched.fullName ? "border-red-500 focus-visible:ring-red-500" : ""
                    }`}
                  />
                  {errors.fullName && touched.fullName && (
                    <div className="flex items-center mt-1 text-red-600 text-xs font-cairo">
                      <AlertCircle className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                      <span className="text-xs">{errors.fullName}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2" dir="rtl">
                  <label className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700">الجِندر</label>
                  <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                    <SelectTrigger
                      dir="rtl"
                      className={`w-full bg-white rounded-none h-10 md:h-14 lg:h-16 text-xs md:text-base lg:text-base text-right ${
                        errors.gender && touched.gender ? "border-red-500 focus-visible:ring-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="اختر الجِندر" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" className="text-right">
                      <SelectItem value="ذكر" className="text-right">
                        ذكر
                      </SelectItem>
                      <SelectItem value="أنثى" className="text-right">
                        أنثى
                      </SelectItem>
                      <SelectItem value="أفضل عدم الإجابة" className="text-right">
                        لا خيار
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && touched.gender && (
                    <div className="flex items-center mt-1 text-red-600 text-xs font-cairo">
                      <AlertCircle className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                      <span className="text-xs">{errors.gender}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2 mx-auto">
                <label htmlFor="email" className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                  البريد الإلكتروني
                </label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="يُفضل إضافة البريد الإلكتروني الشخصي"
                  className={`w-full bg-white rounded-none h-10 md:h-14 lg:h-16 text-xs md:text-base lg:text-base ${
                    errors.email && touched.email ? "border-red-500 focus-visible:ring-red-500" : ""
                  }`}
                />
                {errors.email && touched.email && (
                  <div className="flex items-center mt-1 text-red-600 text-xs font-cairo">
                    <AlertCircle className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                    <span className="text-xs">{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Phone with Country Code */}
              <div className="space-y-2 mx-auto">
                <label className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                  رقم الهاتف
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                  <div className="md:col-span-1">
                    <Select
                      value={formData.countryCode}
                      onValueChange={(value) => handleSelectChange("countryCode", value)}
                    >
                      <SelectTrigger
                        dir="rtl"
                        className={`w-full bg-white rounded-none h-10 md:h-14 lg:h-16 text-xs md:text-base lg:text-base text-right ${
                          errors.countryCode && touched.countryCode ? "border-red-500 focus-visible:ring-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="رمز الدولة" />
                      </SelectTrigger>
                      <SelectContent dir="rtl" className="text-right max-h-60">
                        {countryCodes.map((code) => (
                          <SelectItem key={code.value} value={code.value} className="text-right">
                            {code.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.countryCode && touched.countryCode && (
                      <div className="flex items-center mt-1 text-red-600 text-xs font-cairo">
                        <AlertCircle className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                        <span className="text-xs">{errors.countryCode}</span>
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="رقم الهاتف"
                      className={`w-full bg-white rounded-none h-10 md:h-14 lg:h-16 text-xs md:text-base lg:text-base ${
                        errors.phone && touched.phone ? "border-red-500 focus-visible:ring-red-500" : ""
                      }`}
                    />
                    {errors.phone && touched.phone && (
                      <div className="flex items-center mt-1 text-red-600 text-xs font-cairo">
                        <AlertCircle className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                        <span className="text-xs">{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center md:text-right">ليتم التواصل معك عبر الواتساب</p>
              </div>

              {/* Country with Modern Searchable Dropdown */}
              <div className="space-y-2 mx-auto">
                <label className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                  بلد الإقامة الحالي
                </label>
                <SearchableSelect
                  options={countries}
                  value={formData.country}
                  onChange={(value) => handleSelectChange("country", value)}
                  placeholder="اختر بلد الإقامة"
                  searchPlaceholder="ابحث عن البلد..."
                />
                {errors.country && touched.country && (
                  <div className="flex items-center mt-1 text-red-600 text-xs font-cairo">
                    <AlertCircle className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                    <span className="text-xs">{errors.country}</span>
                  </div>
                )}
              </div>

              {/* Current Stage */}
                <div className="space-y-2 mx-auto">
                  <label className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                    أين أنت في عالم البِزنس الآن؟
                  </label>
                  <Select
                    value={formData.currentStage}
                    onValueChange={(value) => handleSelectChange("currentStage", value)}
                  >
                    <SelectTrigger
                      className={`w-full bg-white rounded-none h-10 md:h-14 lg:h-16 text-xs md:text-base lg:text-base ${
                        errors.currentStage && touched.currentStage
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }`}
                      dir="rtl"
                    >
                      <SelectValue placeholder="أين أنت في عالم البِزنس الآن؟ " />
                    </SelectTrigger>

                    <SelectContent dir="rtl" className="text-right">
                      <SelectItem
                        value="أحاول أبدأ مشروع من شغفي"
                        className="text-right justify-end"
                        dir="rtl"
                      >
                        أحاول أبدأ مشروع من شغفي
                      </SelectItem>
                      <SelectItem
                        value="أعمل على مشروع حاليًا وأواجه تحديات"
                        className="text-right justify-end"
                        dir="rtl"
                      >
                        أعمل على مشروع حاليًا وأواجه تحديات
                      </SelectItem>
                      <SelectItem
                        value="موظف وأسعى لتطوير مهاراتي العملية أو خلق مصدر دخل إضافي"
                        className="text-right justify-end"
                        dir="rtl"
                      >
                        موظف وأسعى لتطوير مهاراتي العملية أو خلق مصدر دخل إضافي
                      </SelectItem>
                      <SelectItem
                        value="طالب وأسعى لزيادة تميزي ومهاراتي لمواكبة سوق العمل"
                        className="text-right justify-end"
                        dir="rtl"
                      >
                        طالب وأسعى لزيادة تميزي ومهاراتي لمواكبة سوق العمل
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  {errors.currentStage && touched.currentStage && (
                    <div className="flex items-center mt-1 text-red-600 text-xs font-cairo">
                      <AlertCircle className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                      <span className="text-xs">{errors.currentStage}</span>
                    </div>
                  )}
                </div>


              {/* How did you hear about us */}
              <div className="space-y-2 mx-auto">
                <label className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                  كيف عرفت عنا؟
                </label>
                <Select value={formData.aboutUs} onValueChange={(value) => handleSelectChange("aboutUs", value)}>
                  <SelectTrigger
                    className={`w-full bg-white rounded-none h-10 md:h-14 lg:h-16 text-xs md:text-base lg:text-base ${
                      errors.aboutUs && touched.aboutUs ? "border-red-500 focus-visible:ring-red-500" : ""
                    }`}
                    dir="rtl"
                  >
                    <SelectValue placeholder="نرجوا التحديد حتى نتمكن من تحسين آليه التسويق لدينا" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem className="text-right" dir="rtl" value="السوشيال ميديا">
                      من خلال صديق 
                    </SelectItem>
                    <SelectItem className="text-right" dir="rtl" value="صديق">
                      من خلال مُجتمع أنتمي له
                    </SelectItem>
                    <SelectItem className="text-right" dir="rtl" value="صديق">
                      من خلال مواقِع التّواصل الاجتماعي 
                    </SelectItem>
                    <SelectItem className="text-right" dir="rtl" value="أخرى">
                      أخرى
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.aboutUs && touched.aboutUs && (
                  <div className="flex items-center mt-1 text-red-600 text-xs font-cairo">
                    <AlertCircle className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                    <span className="text-xs">{errors.aboutUs}</span>
                  </div>
                )}

                {/* Conditional Other Input */}
                {formData.aboutUs === "أخرى" && (
                  <div className="mt-2">
                    <Input
                      name="aboutUsOther"
                      value={formData.aboutUsOther}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="يرجى التحديد"
                      className={`w-full bg-white rounded-none h-10 md:h-14 lg:h-16 text-xs md:text-base lg:text-base ${
                        errors.aboutUsOther && touched.aboutUsOther ? "border-red-500 focus-visible:ring-red-500" : ""
                      }`}
                    />
                    {errors.aboutUsOther && touched.aboutUsOther && (
                      <div className="flex items-center mt-1 text-red-600 text-xs font-cairo">
                        <AlertCircle className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                        <span className="text-xs">{errors.aboutUsOther}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* About You and Why Program - Merged */}
              <div className="space-y-2 mx-auto">
                <label
                  htmlFor="aboutYouAndWhy"
                  className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700"
                >
                  ما الذي تبحث عنه حاليًا في رحلتك في عالم البِزنس؟    
                </label>
                <Textarea
                  id="aboutYouAndWhy"
                  name="aboutYouAndWhy"
                  value={formData.aboutYouAndWhy}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="ما الذي تبحث عنه حاليًا في رحلتك في عالم البِزنس؟"
                  className={`w-full bg-white rounded-none min-h-[120px] text-xs md:text-base lg:text-base resize-none ${
                    errors.aboutYouAndWhy && touched.aboutYouAndWhy ? "border-red-500 focus-visible:ring-red-500" : ""
                  }`}
                />
                {errors.aboutYouAndWhy && touched.aboutYouAndWhy && (
                  <div className="flex items-center mt-1 text-red-600 text-xs font-cairo">
                    <AlertCircle className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                    <span className="text-xs">{errors.aboutYouAndWhy}</span>
                  </div>
                )}
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 pt-2 md:pt-4 mx-auto">
                <div className="flex items-start">
                  <Checkbox
                    id="checkFirst"
                    checked={formData.checkFirst}
                    onCheckedChange={(checked) => handleCheckboxChange("checkFirst", checked as boolean)}
                    className={`mt-1 ${
                      errors.checkFirst && touched.checkFirst ? "border-red-500 data-[state=checked]:bg-red-500" : ""
                    }`}
                  />
                  <div className="mr-2">
                    <label htmlFor="checkFirst" className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      أوافق على التواصل معي عبر البريد الإلكتروني او الواتس اب
                    </label>
                  </div>
                </div>
                {errors.checkFirst && touched.checkFirst && (
                  <div className="flex items-center mt-1 text-red-600 text-xs font-cairo mr-6">
                    <AlertCircle className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                    <span className="text-xs">{errors.checkFirst}</span>
                  </div>
                )}

                <div className="flex items-start pb-6">
                  <Checkbox
                    id="checkSecond"
                    checked={formData.checkSecond}
                    onCheckedChange={(checked) => handleCheckboxChange("checkSecond", checked as boolean)}
                    className={`mt-1 ${
                      errors.checkSecond && touched.checkSecond ? "border-red-500 data-[state=checked]:bg-red-500" : ""
                    }`}
                  />
                  <label htmlFor="checkSecond" className="mr-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                    أنا أعلم عن السعر و مستعد للإستثمار في نفسي (1500) دولار أمريكي
                  </label>
                </div>
                {errors.checkSecond && touched.checkSecond && (
                  <div className="flex items-center mt-1 text-red-600 text-xs font-cairo mr-6">
                    <AlertCircle className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                    <span className="text-xs">{errors.checkSecond}</span>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="
                  mx-auto
                  w-full
                  max-w-xs
                  sm:max-w-sm
                  md:max-w-md
                  lg:max-w-lg
                  h-12
                  md:h-14
                  bg-[#FC8A0A] hover:bg-orange-600
                  text-white
                  transition-colors
                  rounded-none
                  flex
                  items-center
                  justify-center
                  text-sm
                  md:text-base
                "
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    جاري الإرسال
                  </>
                ) : (
                  "احجز مكالمتك الإستشارية المجانية"
                )}
              </Button>
            </form>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
