interface ZoomBannerProps {
  text: string
}

export default function ZoomBanner({ text }: ZoomBannerProps) {
  return (
    <section className="bg-[#F7F7FA] border-t border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 py-6 sm:py-8">
        <p className="text-center text-[#545454] font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          {text}
        </p>
      </div>
    </section>
  )
}
