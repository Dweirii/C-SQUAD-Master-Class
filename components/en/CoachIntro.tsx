import Image from "next/image"
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"

export default function CoachIntro() {
  const achievements = [
    "Serial entrepreneur and founder of multiple companies in app development, innovation, and design thinking.",
    "Selected as one of the Top 100 Women in Tech globally through the TechWomen program, where she won the program's top competition award. Received mentorship at Twitter (now X) and participated in high-level events across leading tech companies in Silicon Valley.",
    "Studied Design Thinking at Stanford University and deepened her practice through mentorship programs by IDEO, the global leader in innovation design.",
    'Holds several prestigious awards, including the title "Jordan Womenpreneur of 2019."',
    "Over 12 years of experience as a local and international trainer in coding and innovation, plus more than 5 years mentoring startup founders in major organizations including Jusoor, Manar, and Flat6Labs.",
  ]

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left: Coach Image and Info */}
          <div className="flex flex-col items-center justify-center md:items-center lg:items-start">
            {/* Coach Image */}
            <div className="relative mb-8 w-full max-w-sm">
              <Image
                src="/c-squad.png"
                alt="Coach Ala'a Agha Karss - Design Thinking Expert"
                width={300}
                height={400}
                className="rounded-none object-cover w-full h-auto "
                priority
              />
            </div>

            {/* Social Links */}
            <div className="flex gap-4 items-center justify-center mb-6 lg:pl-20 lg:mb-0">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#FC8A0A] hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Connect on LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#FC8A0A] hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Follow on Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#FC8A0A] hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Connect on Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>

          {/* Right: Bio Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FC8A0A] mb-4 leading-tight">
                About Business Coach Ala'a Agha Karss
              </h2>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#14697A] uppercase tracking-wide">
                  Design Thinking & Digital Transformation Expert
                </p>
                <p className="text-sm text-gray-500 italic">(From Silicon Valley to the Arab world)</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed mb-10">
              <p className="text-lg sm:text-xl font-medium text-gray-800">
                A global entrepreneur with a proven track record of success, Ala'a Agha Karss is the CEO and founder of
                multiple thriving companies.
              </p>
              <p>
                She's an expert in{" "}
                <span className="font-semibold text-[#14697A] bg-[#14697A]/10 px-2 py-1 rounded">Design Thinking</span>,
                a <span className="font-semibold text-[#FC8A0A]">TechWomen alumna</span>, a{" "}
                <span className="font-semibold text-[#FC8A0A]">TEDx speaker</span>, an international trainer, and an
                active voice in empowering women and youth across the region.
              </p>
            </div>

            {/* Professional Achievements */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Professional Achievements</h3>
              <div className="space-y-5">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-3"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
