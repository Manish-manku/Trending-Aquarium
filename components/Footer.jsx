import { Fish, Mail, Phone, MapPin, Heart } from 'lucide-react'

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+919354011835'
const WA_MSG   = encodeURIComponent('Hello, I want to enquire about aquarium services.')

const navLinks = [
  { label: 'Services',     href: '#services' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Products',     href: '#products' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

const services = [
  'Aquarium Cleaning',
  'Water Quality Management',
  'Aquarium Setup & Installation',
  'Monthly Maintenance Plans',
  'Custom Aquarium Design',
]

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-6 px-4 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #03045e 0%, #0077b6 100%)' }}
    >
      {/* Bubble decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width:  `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              left:   `${5 + i * 12}%`,
              bottom: `${10 + (i % 4) * 15}%`,
              animation: `bubbleRise ${7 + i}s linear infinite`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <Fish size={22} color="white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-none">Trending</div>
                <div className="text-aqua-300 text-xs tracking-widest uppercase">Aquarium</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Professional aquarium maintenance, setup &amp; custom design services across Delhi &amp; gurgaon.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#25d366]"
              style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)' }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25d366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href}
                    className="text-white/60 text-sm hover:text-aqua-300 transition-colors hover:pl-1 duration-200 block">
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <a href="#services"
                    className="text-white/60 text-sm hover:text-aqua-300 transition-colors hover:pl-1 duration-200 block">
                    🐠 {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-aqua-300 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white/80 text-sm">+91 93540 11835</div>
                  <div className="text-white/40 text-xs">Mon–Sat, 9AM–7PM</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-aqua-300 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm break-all">info@trendingaquarium.in</div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-aqua-300 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">Delhi &amp; gurgaon, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Trending Aquarium. All rights reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Made with <Heart size={10} className="text-red-400 fill-red-400" /> for aquarium lovers
          </p>
        </div>
      </div>
    </footer>
  )
}
