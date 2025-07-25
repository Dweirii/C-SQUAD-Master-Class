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
    <footer role="contentinfo" dir="rtl" className="w-full bg-[#F7F7FA] lg:pt-20 lg:py-0 sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">     
          {/* القسم الأيسر - الشعار */}
          <div className="flex justify-center items-center lg:justify-end lg:items-start">
            <Image
              src="/Csquad.png"
              alt="شعار سي سكواد"
              width={300}
              height={200}
              priority
              className="object-cover pl-6 pt-5 lg:pt-0 lg:pl-0"
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
            <div className="flex gap-6 pb-12 mt-4">
              <Link href="https://www.facebook.com/C.SQUAD.DESIGN" aria-label="Follow us on Facebook">
                <img
                  src="https://cdn.prod.website-files.com/63aeab43493ff766ab5ba72e/63d8d762f34469064f8b39a4_facebook-f.svg"
                  alt="Facebook Icon"
                  width={15}
                  height={15}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="https://www.instagram.com/csquad.design/" aria-label="Instagram">
                <img
                  src="https://cdn.prod.website-files.com/63aeab43493ff766ab5ba72e/63d8d762f34469cc918b39a3_IG.svg"
                  alt="Instagram Icon"
                  width={15}
                  height={15}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="https://www.linkedin.com/company/c-squad" aria-label="LinkedIn">
                <img
                  src="https://cdn.prod.website-files.com/63aeab43493ff766ab5ba72e/63d8d762f34469ca628b39a2_linkedin.svg"
                  alt="LinkedIn Icon"
                  width={15}
                  height={15}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* الحد الأسفل */}
        <div className="pt-1 sm:pb-10">
        </div>
      </div>
    </footer>
  );
}
