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
  "مُوظف وأسعى لتطوير مهاراتي العملية أو خلق مصدر دخل إضافي",
  "طالب وأسعى لزيادة تميزي ومهاراتي لمواكبة سوق العمل",
], {
    errorMap: () => ({ message: "يرجى اختيار المرحلة الحالية" }),
  }),
  aboutUs: z.enum(["السوشيال ميديا", "صديق", "أخرى"], {
    errorMap: () => ({ message: "يرجى اختيار مصدر معرفتك بنا" }),
  }),
  aboutUsOther: z.string().optional(),
  aboutYouAndWhy: z.string().min(10, "يرجى كتابة نبذة عنك ولماذا ترغب بالإنضمام"),
  checkFirst: z.boolean().refine((v) => v === true, {
    message: "يجب الموافقة على الشروط والأحكام",
  }),
  checkSecond: z.boolean().optional(),
})

export type RegisterFormData = z.infer<typeof registerSchema>

export async function registerUser(formData: RegisterFormData) {
  try {
    // اختبار الاتصال بقاعدة البيانات
    try {
      await prisma.$connect()
    } catch (dbError) {
      return {
        success: false,
        message: "خطأ في الاتصال بقاعدة البيانات. يرجى المحاولة لاحقاً.",
      }
    }

    const result = registerSchema.safeParse(formData)

    // تحقق إضافي فقط إذا كانت aboutUs = "أخرى"
    if (result.success && result.data.aboutUs === "أخرى") {
      if (!result.data.aboutUsOther || result.data.aboutUsOther.trim().length < 3) {
        return {
          success: false,
          errors: { aboutUsOther: ["يرجى توضيح الخيار الآخر"] },
        }
      }
    }

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
    // تحسين رسائل الخطأ
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return {
          success: false,
          message: "البريد الإلكتروني مسجل مسبقاً",
        }
      }
      if (error.message.includes('Connection')) {
        return {
          success: false,
          message: "خطأ في الاتصال بقاعدة البيانات. يرجى المحاولة لاحقاً.",
        }
      }
    }
    return {
      success: false,
      message: "حدث خطأ غير متوقع أثناء المعالجة. يرجى المحاولة لاحقًا.",
    }
  }
}
