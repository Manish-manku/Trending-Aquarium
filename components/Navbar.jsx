import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Fish, Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home',      href: '#hero' },
  { label: 'Services',  href: '#services' },
  { label: 'Gallery',   href: '#gallery' },
  { label: 'Products',  href: '#products' },
  { label: 'Reviews',   href: '#testimonials' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeSection, setActive] = useState('hero')
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+919354011835'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-aqua-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div><Image src="/logo.png" alt="Trending Aquarium" width={36} height={36} />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-ocean-dark leading-none block">
                Trending
              </span>
              <span className="text-[10px] tracking-widest uppercase text-ocean-base font-semibold">
                Aquarium
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    scrolled
                      ? 'text-ocean-dark hover:bg-aqua-100 hover:text-ocean-deep'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:+${whatsapp}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-ocean-deep' : 'text-white/90'
              }`}
            >
              <Phone size={15} />
              Call Us
            </a>
            <a
              href={`https://wa.me/${whatsapp}?text=Hello%2C%20I%20saw%20your%20website%20and%20I%20want%20to%20know%20more%20about%20your%20aquarium%20products%20and%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? 'text-ocean-dark hover:bg-aqua-100' : 'text-white hover:bg-white/15'
            }`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-4 right-4 z-40 bg-white rounded-2xl shadow-aqua-lg p-5 lg:hidden"
          >
            <ul className="flex flex-col gap-1 mb-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-ocean-dark font-medium hover:bg-aqua-50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${whatsapp}?text=Hello%2C%20I%20saw%20your%20website%20and%20I%20want%20to%20know%20more%20about%20your%20aquarium%20products%20and%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-sm"
            >
              WhatsApp Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
