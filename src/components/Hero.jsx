import { Printer, ArrowDown, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="home" className="hero-field w-full">
      <div className="dot-layer absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="hero-orb left-[-100px] top-24 h-64 w-64 bg-purple-300 opacity-30"
        aria-hidden="true"
      />
      <div
        className="hero-orb bottom-[-120px] right-[-80px] h-80 w-80 bg-fuchsia-300 opacity-30"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <img
              src="/lm-prints-logo.png"
              className="h-16 w-16 rounded-xl object-cover"
              loading="lazy"
              alt="LM Prints logo with purple printer illustration"
            />
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-[#2d1744]">
                LM PRINTS
              </p>
              <p className="text-sm font-semibold text-purple-700">
                Printing Services
              </p>
            </div>
          </div>

          <p className="section-kicker mb-4">Fast • Friendly • Affordable</p>
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-[#2d1744] sm:text-5xl lg:text-6xl">
            Printing made easy, fast, and affordable.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-purple-950/70 sm:text-lg">
            Quality printing services for IDs, documents, photos, and laminating.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="primary-action focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              <Printer className="h-5 w-5" />
              <span>View Our Services</span>
            </a>
            <a
              href="#pricing"
              className="outline-action focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              <ArrowDown className="h-5 w-5" />
              <span>See Our Prices</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="printer-scene" aria-label="Illustration of a purple printer">
            <div className="printer-paper" />
            <div className="printer-body" />
            <div className="scene-label">
              <Sparkles className="h-4 w-4" />
              <span>Print made simple</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
