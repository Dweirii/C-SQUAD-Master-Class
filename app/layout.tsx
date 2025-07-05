import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Cairo, Lato } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});
export const metadata: Metadata = {
  title: "C-SQUAD",
  description:
    "صمّم مشروعك بذكاء, انطلق في السّوق بإبداع, واخلُق أثر بِرسالة تُشبهك",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="ar" dir="rtl" className={`${cairo.variable } ${lato.variable}`}>
        <head>
          {/* ✅ Google Analytics */}
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-HC9LTW29VD"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HC9LTW29VD');
            `}
          </Script>

          {/* ✅ Microsoft Clarity */}
          <Script id="clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s1appg41wf");
            `}
          </Script>

          {/* ✅ Meta Pixel (Facebook) */}
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1956474694748421');
              fbq('track', 'PageView');
            `}
          </Script>

          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1956474694748421&ev=PageView&noscript=1"
            />
          </noscript>
        </head>
        <body className={cairo.className} suppressHydrationWarning={true}>
          {children}
          <Analytics/>
        </body>
      </html>
  )
}
