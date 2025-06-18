import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
          <div className="text-center lg:text-right sm:text-left lg:border-r lg:border-gray-300 lg:pr-12">
            <h3 className="text-sm text-left sm:text-left font-semibold text-[#666883] mb-4 tracking-wide">قوة  “C”!</h3>
            <p className="text-[#666883] text-left sm:text-left pt-0 sm:pt-0 lg:pt-5 text-sm sm:text-base leading-relaxed">
              
          من أجل بدء عمليتنا الإبداعية وإنتاج منتج أو خدمة جديدة أو حتى نموذج عمل جديد للجمهور الذي نصمم من أجله ، نبدأ العمل الذي نقوم به بشغف من منطلق الرغبة في فهم ما يهم الناس.
            </p>
          </div>

          {/* Right Section - Company Address */}
          <div className="text-left lg:text-left sm:text-left lg:border-r lg:border-gray-300 lg:pr-12">
            <h3 className="text-sm text-left lg:text-right sm:text-left font-sm text-[#666883] mb-6 tracking-wide">
              عنوان الشركة:
            </h3>

            <div className="space-y-4 mb-8">
              {/* US */}
              <div className="flex items-center text-left sm:text-left gap-3">
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="United States flag"
                  width={32}
                  height={24}
                  className="object-contain"
                />
                <span className="text-[#666883] text-left sm:text-left font-sm">الولايات المتحدة الامريكية</span>
              </div>
              {/* Jordan */}
              <div className="flex items-center text-left gap-3">
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
              <div className="flex items-center text-left gap-3 ">
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
            <div className="flex  gap-6">
              <Link href="#" aria-label="Follow us on Facebook" className='fill text-black'>
                <FaFacebook className="w-4 h-4 text-[#333] hover:text-[#FC8A0A] transition-colors duration-200" />
              </Link>
              <Link href="#" aria-label="Follow us on Instagram">
                <FaInstagram fill='black' className="w-4 h-4 hover:text-[#FC8A0A] transition-colors duration-200" />
              </Link>
              <Link href="#" aria-label="Connect with us on LinkedIn">
                <FaLinkedin className="w-4 h-4 text-[#333] hover:text-[#FC8A0A] transition-colors duration-200" />
              </Link>
            </div>
          </div>
        </div>
        {/* الحد الأسفل */}
        <div className="pt-1">
        </div>
      </div>
    </footer>
  );
}
