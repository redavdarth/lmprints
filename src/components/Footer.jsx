import { Facebook, Mail } from 'lucide-react'

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594041388240'
const EMAIL = 'hello.lmprints@gmail.com'

export default function Footer() {
  return (
    <footer className="w-full bg-[#321751] px-5 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
        <div>
          <p className="text-xl font-extrabold">LM PRINTS</p>
          <p className="mt-1 text-sm text-purple-200">Printing Services</p>
          <p className="mt-2 text-sm font-medium text-white">
            Rush ID • Document Printing • Photo Print • Laminate
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex gap-3">
            <a
              className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-purple-300"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LM Prints on Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-purple-300"
              href={`mailto:${EMAIL}`}
              aria-label="Email LM Prints"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-purple-200">
            © 2026 LM Prints. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
