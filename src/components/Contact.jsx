import { Facebook, Mail } from 'lucide-react'
import Reveal from './Reveal'

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594041388240'
const EMAIL = 'hello.lmprints@gmail.com'

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#f3e9ff] px-5 py-20 sm:py-24 lg:px-8">
      <Reveal className="contact-panel mx-auto max-w-5xl px-6 py-12 text-center sm:px-12">
        <p className="section-kicker mb-3">Let's connect</p>
        <h2 className="section-title">Get in Touch</h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-purple-950/65">
          Message or email us if you have questions about our printing services.
        </p>

        <div className="mx-auto mt-9 grid max-w-2xl gap-4 sm:grid-cols-2">
          <a
            className="contact-card flex min-h-32 flex-col items-center justify-center gap-2 p-5 text-purple-950 focus:outline-none focus:ring-4 focus:ring-purple-200"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-7 w-7 text-purple-700" />
            <span className="font-bold text-[#2d1744]">Facebook</span>
            <span className="text-sm text-purple-800/70">LM Prints</span>
          </a>

          <a
            className="contact-card flex min-h-32 flex-col items-center justify-center gap-2 p-5 text-purple-950 focus:outline-none focus:ring-4 focus:ring-purple-200"
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-7 w-7 text-purple-700" />
            <span className="font-bold text-[#2d1744]">Email</span>
            <span className="text-sm text-purple-800/70">{EMAIL}</span>
          </a>
        </div>
      </Reveal>
    </section>
  )
}
