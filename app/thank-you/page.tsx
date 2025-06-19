"use client";

import Footer from "@/components/ar/footer";
import ThankYouClient from "@/components/ThankYouClient";
import { Suspense } from "react";

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", margin: "50px 0" }}>...جاري التحميل</div>}>
      <ThankYouClient />
      <Footer/>
    </Suspense>
  );
}
