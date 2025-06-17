import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "C-SQUAD",
  description: "صمّم مشروعك بذكاء, انطلق في السّوق بإبداع, واخلُق أثر بِرسالة تُشبهك",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={cairo.className} suppressHydrationWarning={true}>
        {children}
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            style: {
              fontFamily: "inherit",
              direction: "rtl",
              textAlign: "right",
            },
          }}
        />
      </body>
    </html>
  );
}
