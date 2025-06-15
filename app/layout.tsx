import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo", // This enables the use of var(--font-cairo) in your CSS
  display: "swap",
});

export const metadata: Metadata = {
  title: "كود الابتكار - سي-سكواد",
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
      </body>
    </html>
  );
}
