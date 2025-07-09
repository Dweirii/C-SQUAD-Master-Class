"use server"

import { z } from "zod"
import { prisma } from "@/lib/prisma"

const registerSchema = z.object({
  fullName: z.string().min(3, "يرجى إدخال الاسم الكامل"),
  gender: z.enum(["ذكر", "أنثى"], {
    errorMap: () => ({ message: "يرجى اختيار الجنس" }),
  }),
  email: z.string().email("يرجى إدخال بريد إلكتروني صحيح"),
  phone: z.string().min(5, "يرجى إدخال رقم الهاتف"),
  country: z.string().min(2, "يرجى إدخال اسم الدولة"),
  currentStage: z.enum([
    "أحاول أبدأ مشروع من شغفي",
    "أعمل على مشروع حاليًا وأواجه تحديات",
    "موظف أو طالب وأسعى لتطوير مهاراتي المهنية",
  ], {
    errorMap: () => ({ message: "يرجى اختيار المرحلة الحالية" }),
  }),
  aboutUs: z.enum(["دروب ليست", "السوشيال ميديا", "صديق", "أخرى"], {
    errorMap: () => ({ message: "يرجى اختيار مصدر معرفتك بنا" }),
  }),
  aboutUsOther: z.string().optional().refine((val) => {
    return val === undefined || val.trim().length > 2
  }, {
    message: "يرجى توضيح الخيار الآخر"
  }),
  aboutYouAndWhy: z.string().min(10, "يرجى كتابة نبذة عنك ولماذا ترغب بالإنضمام"),
  checkFirst: z.boolean().refine((v) => v === true, {
    message: "يجب الموافقة على الشروط والأحكام",
  }),
  checkSecond: z.boolean().optional(),
})

export type RegisterFormData = z.infer<typeof registerSchema>

export async function registerUser(formData: RegisterFormData) {
  try {
    const result = registerSchema.safeParse(formData)

    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
      }
    }

    const {
      fullName,
      gender,
      email,
      phone,
      country,
      currentStage,
      aboutUs,
      aboutUsOther,
      aboutYouAndWhy,
      checkFirst,
      checkSecond,
    } = result.data

    const registration = await prisma.businessRegistration.create({
      data: {
        fullName,
        gender,
        email,
        phone,
        country,
        currentStage,
        aboutUs,
        aboutUsOther: aboutUs === "أخرى" ? aboutUsOther : null,
        aboutYouAndWhy,
        checkFirst,
        checkSecond: checkSecond ?? false,
      },
    })

    return {
      success: true,
      message: "تم تسجيل طلبك بنجاح",
      data: {
        id: registration.id,
        registrationDate: registration.createdAt.toISOString(),
      },
    }
  } catch (error) {
    console.error("Unexpected error:", error)
    return {
      success: false,
      message: "حدث خطأ غير متوقع أثناء المعالجة. يرجى المحاولة لاحقًا.",
    }
  }
}
