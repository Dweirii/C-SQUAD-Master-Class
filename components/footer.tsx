import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7F7FA] sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
          {/* Left Section - Logo */}
          <div className="flex justify-center lg:justify-start items-start">
            <Image
              src="/Csquad.png"
              alt="C-SQUAD Logo"
              width={350}
              height={200}
              priority
              className="-mt-4" 
            />
          </div>

          {/* Middle Section - Company Description */}
          <div className="text-center lg:text-left lg:border-l lg:border-gray-300 lg:pl-12">
            <h3 className="text-sm font-base text-[#666883] mb-4 tracking-wide">
              POWER OF THE "C"!
            </h3>
            <p className="text-[#666883] text-sm sm:text-base">
              In order to begin our creative process and ultimately produce a new product, service, or even a business
              model for the audience we are designing for, we begin the job that we do with passion out of a desire to
              understand what matters to people.
            </p>
          </div>

          {/* Right Section - Company Address */}
          <div className="text-center lg:text-left lg:border-l lg:border-gray-300 lg:pl-12">
            <h3 className="text-sm font-sm text-[#666883] mb-6 tracking-wide">
              OUR ADDRESS:
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
                <span className="text-[#666883] font-sm">United States</span>
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
                <span className="text-[#666883] font-sm">Amman, Jordan</span>
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
                <span className="text-[#666883] font-sm">Riyadh, Jeddah Saudi Arabia</span>
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

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2025 C-SQUAD. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
