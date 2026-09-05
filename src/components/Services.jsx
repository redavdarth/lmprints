import { Contact, FileText, Camera, ShieldCheck, ArrowDown } from 'lucide-react'
import Reveal from './Reveal'

const services = [
  {
    icon: Contact,
    title: 'RUSH ID',
    description:
      'Fast and affordable ID photo printing for your school, work, and other needs.',
    link: '#rush-id-prices',
  },
  {
    icon: FileText,
    title: 'DOCUMENT PRINTING',
    description:
      'Print your important documents in different paper sizes and formats.',
    link: '#document-prices',
  },
  {
    icon: Camera,
    title: 'PHOTO PRINTING',
    description: 'Print your favorite photos in different sizes.',
    link: '#photo-prices',
  },
  {
    icon: ShieldCheck,
    title: 'LAMINATING',
    description:
      'Protect your documents and IDs with quality lamination.',
    link: '#laminate-prices',
  },
]

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#fcfaff] px-5 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-kicker mb-3">What we offer</p>
          <h2 className="section-title">Our Services</h2>
          <p className="mt-4 leading-7 text-purple-950/65">
            Simple printing help for school, work, memories, and everyday needs.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Reveal
                key={service.title}
                as="article"
                className="service-card flex flex-col p-6"
              >
                <div className="service-icon mb-5">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-[#2d1744]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-purple-950/65">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="outline-action mt-6 w-full focus:outline-none focus:ring-4 focus:ring-purple-200"
                >
                  <ArrowDown className="h-4 w-4" />
                  <span>View Prices</span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
