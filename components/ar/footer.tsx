import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { href: '#', label: 'تابعنا على فيسبوك', icon: Facebook },
  { href: '#', label: 'تابعنا على إنستغرام', icon: Instagram },
  { href: '#', label: 'تواصل معنا على لينكدإن', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer role="contentinfo" dir="rtl" className="w-full bg-[#F7F7FA] sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
          
          {/* القسم الأيسر - الشعار */}
          <div className="flex justify-center lg:justify-end items-start">
            <Image
              src="/Csquad.png"
              alt="شعار سي سكواد"
              width={350}
              height={200}
              priority
            />
          </div>

          {/* القسم الأوسط - نبذة عن الشركة */}
          <div className="text-center lg:text-right lg:border-r lg:border-gray-300 lg:pr-12">
            <h3 className="text-sm font-semibold text-[#666883] mb-4 tracking-wide">قوة الـ “C”!</h3>
            <p className="text-[#666883] pt-5 text-sm sm:text-base leading-relaxed">
              ننطلق بشغفٍ لإعادة ابتكار نموذج العمل بما يخدم رؤى عملائنا، مع التركيز على حلول استراتيجية قابلة للتطوير وتحقيق قيمة مستدامة.
            </p>
          </div>

          {/* Right Section - Company Address */}
          <div className="text-center lg:text-left lg:border-r lg:border-gray-300 lg:pr-12">
            <h3 className="text-sm lg:text-right font-sm text-[#666883] mb-6 tracking-wide">
              عنوان الشركة:
            </h3>

            <div className="space-y-4 mb-8">
              {/* US */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="United States flag"
                  width={32}
                  height={24}
                  className="object-contain"
                />
                <span className="text-[#666883] font-sm">الولايات المتحدة الامريكية</span>
              </div>
              {/* Jordan */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <img
                  src="https://flagcdn.com/w40/jo.png"
                  alt="Jordan flag"
                  width={32}
                  height={24}
                  className="object-contain"
                />
                <span className="text-[#666883] font-sm">عمان، الأردن</span>
              </div>
              {/* Saudi */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <img
                  src="https://flagcdn.com/w40/sa.png"
                  alt="Saudi Arabia flag"
                  width={32}
                  height={24}
                  className="object-contain"
                />
                <span className="text-[#666883] font-sm">السعودية</span>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <Link href="#" aria-label="Follow us on Facebook">
                <Facebook className="w-6 h-6 text-[#666883] hover:text-[#FC8A0A] transition-colors duration-200" />
              </Link>
              <Link href="#" aria-label="Follow us on Instagram">
                <Instagram className="w-6 h-6 text-[#666883] hover:text-[#FC8A0A] transition-colors duration-200" />
              </Link>
              <Link href="#" aria-label="Connect with us on LinkedIn">
                <Linkedin className="w-6 h-6 text-[#666883] hover:text-[#FC8A0A] transition-colors duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* الحد الأسفل */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-center text-sm text-gray-500">© 2025 سي سكواد. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
