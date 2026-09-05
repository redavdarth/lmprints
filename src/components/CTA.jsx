import { Printer, Mail, Facebook } from 'lucide-react'
import Reveal from './Reveal'

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594041388240'

export default function CTA() {
  return (
    <section className="w-full bg-[#fcfaff] px-5 py-20 sm:py-24 lg:px-8">
      <Reveal
        className="cta-panel mx-auto max-w-6xl px-6 py-12 text-center sm:px-12"
      >
        <div className="relative z-10">
          <Printer className="mx-auto mb-5 h-10 w-10 text-purple-100" />
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Need Quality Printing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-purple-100">
            We're ready to help with your IDs, documents, photos, and laminating
            needs.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-purple-800 transition hover:-translate-y-0.5 hover:bg-purple-50 focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Us</span>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/45 bg-white/10 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              <Facebook className="h-5 w-5" />
              <span>View Facebook Page</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
