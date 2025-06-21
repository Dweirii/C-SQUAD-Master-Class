"use client"

import { useRef, useState } from "react"
import Image from "next/image"

export default function VideoHero() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    setPlaying(true)
    setTimeout(() => {
      videoRef.current?.play()
    }, 100)
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-none overflow-hidden shadow-lg bg-black">
      {/* Overlay Poster with Play Button */}
      {!playing && (
        <button
          aria-label="تشغيل الفيديو"
          className="absolute inset-0 z-10 flex items-center justify-center w-full h-full cursor-pointer bg-white"
          onClick={handlePlay}
        >
          <Image
            src="https://c-squad.b-cdn.net/Master-Class/thumb.png"
            alt="The Innovation Code Poster"
            fill
            className="object-cover"
            priority
          />
          <span className="absolute flex items-center justify-center w-full h-full">
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="36" cy="36" r="36" fill="white" fillOpacity="0.88"/>
              <path d="M46 36L32 44V28L46 36Z" fill="#FC8A0A"/>
            </svg>
          </span>
        </button>
      )}

        <video
          ref={videoRef}
          className={`w-full h-full object-cover ${playing ? "" : "pointer-events-none"}`}
          controls={playing}
          poster="https://c-squad.b-cdn.net/Master-Class/thumb.png"
          preload="metadata"
          playsInline
          muted
          style={{ display: playing ? "block" : "none" }}
        >

        <source
          src="https://c-squad.b-cdn.net/Master-Class/The-Innovation-Code-Master-Class.mp4"
          type="video/mp4"
        />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>
    </div>
  )
}
