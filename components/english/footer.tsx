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
          <div className="text-center lg:text-center sm:text-center lg:border-l lg:border-gray-300 lg:pr-12">
            <h3 className="text-sm font-medium text-[#666883] mb-6 tracking-wide">
              OUR ADDRESS:
            </h3>

            <div className="space-y-4 mb-8">
              {/* US */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-[#666883] font-sm">United States</span>
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="United States flag"
                  width={32}
                  height={24}
                  className="object-contain"
                />
                
              </div>
              {/* Jordan */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-[#666883] font-sm">Amman, Jordan</span>
                <img
                  src="https://flagcdn.com/w40/jo.png"
                  alt="Jordan flag"
                  width={32}
                  height={24}
                  className="object-contain"
                />
                
              </div>
              {/* Saudi */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-[#666883] font-sm">Saudi Arabia</span>
                <img
                  src="https://flagcdn.com/w40/sa.png"
                  alt="Saudi Arabia flag"
                  width={32}
                  height={24}
                  className="object-contain"
                />
                
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 pb-12 mt-4">
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

          <div className="text-center lg:text-left sm:text-left lg:border-l lg:border-gray-300 lg:pl-12">
            <h3 className="text-sm text-right sm:text-right font-normal text-[#666883] mb-4 tracking-wide">!"Power of the "C  </h3>
            <p className="text-[#666883] text-right sm:text-right pt-0 sm:pt-0 lg:pt-5 text-sm sm:text-normal leading-relaxed">
              In order to begin our creative process and ultimately produce a new product, service, or even a business model for the audience we are designing for, we begin the job that we do with passion out of a desire to understand what matters to people.
            </p>
          </div>
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
        </div>
        <div className="pt-1 sm:pb-10">
        </div>
      </div>
    </footer>
  );
}
