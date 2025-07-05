import { Check } from "lucide-react"
import Image from "next/image"

export default function MasterclassBenefitsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 my-6 lg:my-1 mb-4 lg:mb-6 lg:py-11">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 lg:mt-10">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-[#FC8A0A] leading-tight mb-6">
            What will you walk away with in just 2 days?
          </h2>
          <div className="text-[#545454] text-lg sm:text-xl max-w-4xl mx-auto font-semibold">
            <p>This masterclass includes two interactive sessions, each 3 hours long - a practical gateway </p>
            <p>into the world of innovation, creativity, and modern business thinking.</p>
          </div>
        </div>

        {/* Main 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 items-start">
          {/* Right Column - 3 Benefits (Order in code for RTL display) */}
          <div className="space-y-10 text-right lg:order-1 pt-10">
            {/* Benefit 1 */}
            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-[#F7F7FA] rounded-full p-3">
                  <div className="bg-[#FC8A0A] rounded-full p-1">
                    <Check className="w-4 h-4 text-white stroke-[3px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#545454] mb-2 text-center">Build a Strong Business Foundation</h3>
              <p className="text-[#545454] text-base text-center leading-relaxed">
                Learn global best practices to create a
                <br />
                stable, high-impact business at any
                <br />
                stage
              </p>
            </div>

            {/* Benefit 2 */}
            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-[#F7F7FA] rounded-full p-3">
                  <div className="bg-[#FC8A0A] rounded-full p-1">
                    <Check className="w-5 h-5 text-white stroke-[3px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#545454] mb-2 text-center">Learn from Real Examples</h3>
              <p className="text-[#545454] text-base  text-center">
                See how tools are applied through real
                <br />
                cases and interactive discussions
              </p>
            </div>

            {/* Benefit 3 */}

            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-[#F7F7FA] rounded-full p-3">
                  <div className="bg-[#FC8A0A] rounded-full p-1">
                    <Check className="w-5 h-5 text-white stroke-[3px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#545454] mb-2 text-center">Shift Your Mindset for Growth</h3>
              <p className="text-[#545454] text-base  text-center">
                Gain the clarity and confidence to build
                <br />
                or restart your business with purpose
              </p>
            </div>
          </div>

          {/* Center Column - Image */}
          <div className="flex justify-center items-start lg:order-2">
            <div className="p-3 rounded-md">
              <Image
                src="/Masterclass.png"
                alt="Team collaboration"
                width={500}
                height={800}
                className="w-full h-auto rounded-sm max-w-md lg:max-w-xs xl:max-w-sm"
              />
            </div>
          </div>

          {/* Left Column - 3 Benefits (Order in code for RTL display) */}
          <div className="space-y-10 text-right lg:order-3 pt-10">
            {/* Benefit 1 */}
            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-[#F7F7FA] rounded-full p-3">
                  <div className="bg-[#FC8A0A] rounded-full p-1">
                    <Check className="w-5 h-5 text-white stroke-[3px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#545454] mb-2 text-center">Master Design Thinking</h3>
              <p className="text-[#545454] text-base  text-center">
                Use human-centered tools to
                <br />
                understand your audience and design
                <br />
                real solutions
              </p>
            </div>

            {/* Benefit 2 */}
            <div>
              <div className="flex justify-center mb-3">
                <div className="rounded-full bg-[#F7F7FA] p-3">
                  <div className="bg-[#FC8A0A] rounded-full p-1">
                    <Check className="w-5 h-5 text-white stroke-[3px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#545454] mb-2 text-center">Use AI to Work Smarter</h3>
              <p className="text-[#545454] text-base  text-center">
                Plan faster, make better decisions, and
                <br />
                boost efficiency with AI
              </p>
            </div>

            {/* Benefit 3 */}
            <div>
              <div className="flex justify-center mb-3">
                <div className="bg-[#F7F7FA] rounded-full p-3"> 
                  <div className="bg-[#FC8A0A] rounded-full p-1">
                    <Check className="w-5 h-5 text-white stroke-[3px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#545454] mb-2 text-center">Turn Ideas into Offers</h3>
              <p className="text-[#545454] text-base  text-center">
                Transform your idea or skill into an offer
                <br />
                that sells—confidently and clearly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
