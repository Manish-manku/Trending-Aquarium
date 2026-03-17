import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+919354011835'
const WA_MSG   = encodeURIComponent('Hello, I saw your website and I want to know more about your aquarium products and services.')

const cities = ['Delhi', 'gurgaon', 'Other']
const sizes  = ['1 foot', '2 feet', '3 feet', '4 feet', '5 feet', '6+ feet', 'Not sure']

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', aquariumSize: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.city || !form.message) {
      toast.error('Please fill all required fields.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        toast.success('🐠 Enquiry sent! We will contact you soon.')
        setForm({ name: '', phone: '', city: '', aquariumSize: '', message: '' })
      } else {
        toast.error(data.error || 'Something went wrong.')
      }
    } catch {
      toast.error('Network error. Please try WhatsApp instead.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #00b4d8, transparent)', transform: 'translateX(30%)' }} />
        <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #0077b6, transparent)', transform: 'translateX(-30%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">Get In Touch</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ocean-dark mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-ocean-base/70 max-w-lg mx-auto">
            Have a question or ready to get started? Reach us on WhatsApp for quick replies or fill the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Left: Info & WhatsApp ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick contact cards */}
            <a
              href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
                border: '1px solid #86efac',
                boxShadow: '0 2px 16px rgba(37,211,102,0.12)',
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: '#25d366' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <div>
                <div className="font-semibold text-green-800 text-base">Chat on WhatsApp</div>
                <div className="text-green-700/70 text-sm mt-0.5">Fastest response — usually within minutes</div>
                <div className="text-green-600 text-xs mt-1.5 font-medium group-hover:underline">Tap to open WhatsApp →</div>
              </div>
            </a>

            <div className="flex items-center gap-5 p-6 rounded-2xl"
              style={{ background: '#f0f9ff', border: '1px solid #bae6fd' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0ea5e9, #0077b6)' }}>
                <Phone size={24} color="white" />
              </div>
              <div>
                <div className="font-semibold text-ocean-dark">Phone</div>
                <div className="text-ocean-base text-sm mt-0.5">+91 93540 11835</div>
                <div className="text-ocean-base/55 text-xs mt-1">Mon – Sat · 9 AM – 7 PM</div>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-2xl"
              style={{ background: '#f0f9ff', border: '1px solid #bae6fd' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0ea5e9, #0077b6)' }}>
                <MapPin size={24} color="white" />
              </div>
              <div>
                <div className="font-semibold text-ocean-dark">Service Areas</div>
                <div className="text-ocean-base text-sm mt-0.5">Delhi &amp; gurgaon</div>
                <div className="text-ocean-base/55 text-xs mt-1">Home visits available across both cities</div>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-2xl"
              style={{ background: '#f0f9ff', border: '1px solid #bae6fd' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0ea5e9, #0077b6)' }}>
                <Mail size={24} color="white" />
              </div>
              <div>
                <div className="font-semibold text-ocean-dark">Email</div>
                <div className="text-ocean-base text-sm mt-0.5">info@trendingaquarium.in</div>
                <div className="text-ocean-base/55 text-xs mt-1">We reply within 24 hours</div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Enquiry Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-8"
              style={{
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid #bae6fd',
                boxShadow: '0 4px 32px rgba(0,119,182,0.10)',
              }}
            >
              <h3 className="font-display font-bold text-2xl text-ocean-dark mb-6 flex items-center gap-2">
                <Mail size={22} className="text-ocean-base" />
                Send an Enquiry
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-ocean-dark mb-1.5">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="form-input"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-ocean-dark mb-1.5">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="form-input"
                    required
                  />
                </div>

                {/* City & Size row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ocean-dark mb-1.5">
                      City <span className="text-red-400">*</span>
                    </label>
                    <select name="city" value={form.city} onChange={handleChange} className="form-input" required>
                      <option value="">Select city</option>
                      {cities.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ocean-dark mb-1.5">
                      Aquarium Size
                    </label>
                    <select name="aquariumSize" value={form.aquariumSize} onChange={handleChange} className="form-input">
                      <option value="">Select size</option>
                      {sizes.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-ocean-dark mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your aquarium or what service you need..."
                    rows={4}
                    className="form-input resize-none"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <><Send size={17} /> Send Enquiry</>
                  )}
                </button>

                <p className="text-center text-xs text-ocean-base/50 mt-2">
                  Or for instant response, use <a href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="text-green-500 font-semibold hover:underline">WhatsApp</a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
