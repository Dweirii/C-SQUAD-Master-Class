
interface ZoomBannerProps {
  children: React.ReactNode
}

export default function ZoomBanner({ children }: ZoomBannerProps) {
  return (
    <section className="bg-[#F7F7FA] border-t border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 py-6 sm:py-8">
        <p className="text-center text-[#545454] font-bold lg:font-bold md:font-medium sm:text-lg md:text-xl lg:text-xl leading-relaxed">
          {children}
        </p>
      </div>
    </section>
  )
}
