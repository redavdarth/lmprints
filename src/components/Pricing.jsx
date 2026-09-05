import { Contact, FileText, Image as ImageIcon, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'

const rushPackages = [
  { name: 'Package 1', detail: '2x2 (4 pieces) • 1x1 (8 pieces)', price: '₱40.00' },
  { name: 'Package 2', detail: '2x2 (6 pieces)', price: '₱30.00' },
  {
    name: 'Package 3',
    detail: 'Passport Size (6 pieces) • 1x1 (8 pieces)',
    price: '₱50.00',
  },
  {
    name: 'Package 4',
    detail: 'Passport Size (4 pieces) • 2x2 (2 pieces) • 1x1 (4 pieces)',
    price: '₱50.00',
  },
]

const documentRows = [
  { type: 'TEXT ONLY', short: '₱3.00', a4: '₱3.00', long: '₱3.00' },
  { type: 'TEXT & IMAGE', short: '₱5.00', a4: '₱5.00', long: '₱7.00' },
  { type: 'IMAGE ONLY', short: '₱10.00', a4: '₱10.00', long: '₱12.00' },
]

const photoSizes = [
  { size: 'A4', price: '₱50.00' },
  { size: '6R', price: '₱30.00' },
  { size: '5R', price: '₱25.00' },
  { size: '4R', price: '₱15.00' },
  { size: '3R', price: '₱10.00' },
]

const laminateItems = [
  { name: 'A4', detail: '125 microns', price: '₱30.00' },
  { name: 'ID CARD SIZE', detail: '125 microns', price: '₱15.00' },
]

function PriceHead({ icon: Icon, title }) {
  return (
    <div className="price-head">
      <Icon className="h-6 w-6" />
      <h3>{title}</h3>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-band w-full px-5 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-kicker mb-3">Simple and clear</p>
          <h2 className="section-title">Our Prices</h2>
          <p className="mt-4 leading-7 text-purple-950/65">
            Choose the service you need and check the price below.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Rush ID */}
          <Reveal as="article" id="rush-id-prices" className="price-card p-5 sm:p-6">
            <PriceHead icon={Contact} title="RUSH ID" />
            <div>
              {rushPackages.map((pkg) => (
                <div key={pkg.name} className="price-row">
                  <div>
                    <p className="text-sm font-bold text-[#2d1744]">{pkg.name}</p>
                    <p className="mt-1 text-xs leading-5 text-purple-950/65">
                      {pkg.detail}
                    </p>
                  </div>
                  <p className="price-value">{pkg.price}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Document Printing */}
          <Reveal as="article" id="document-prices" className="price-card p-5 sm:p-6">
            <PriceHead icon={FileText} title="DOCUMENT PRINTING" />
            <div className="table-scroll mt-6 self-center">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Short</th>
                    <th>A4</th>
                    <th>Long</th>
                  </tr>
                </thead>
                <tbody>
                  {documentRows.map((row) => (
                    <tr key={row.type}>
                      <td>{row.type}</td>
                      <td>{row.short}</td>
                      <td>{row.a4}</td>
                      <td>{row.long}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Photo Print */}
          <Reveal as="article" id="photo-prices" className="price-card p-5 sm:p-6">
            <PriceHead icon={ImageIcon} title="PHOTO PRINT" />
            <div>
              {photoSizes.map((item) => (
                <div key={item.size} className="price-row">
                  <p className="text-sm font-semibold text-[#2d1744]">{item.size}</p>
                  <p className="price-value">{item.price}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Laminate */}
          <Reveal as="article" id="laminate-prices" className="price-card p-5 sm:p-6">
            <PriceHead icon={ShieldCheck} title="LAMINATE" />
            <div>
              {laminateItems.map((item) => (
                <div key={item.name} className="price-row">
                  <div>
                    <p className="text-sm font-semibold text-[#2d1744]">{item.name}</p>
                    <p className="mt-1 text-xs text-purple-950/65">{item.detail}</p>
                  </div>
                  <p className="price-value">{item.price}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
