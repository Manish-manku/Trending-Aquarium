import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

// ── Replace this embed URL with your actual Google Maps embed URL ──
// Go to: maps.google.com → Search your location → Share → Embed a map → Copy iframe src
const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48957787568!2d77.06889754725782!3d28.52728034196053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'

const serviceAreas = [
  { city: 'Delhi and Delhi NCR', areas: 'South Delhi, West Delhi, North Delhi, East Delhi, Central Delhi, Noida, Greater Noida', icon: '🏙️' },
  { city: 'gurgaon', areas: 'DLF City, MG Road,New Gurgaon, Sohna Road, Sector 49.',          icon: '🌆' },
]

export default function MapSection() {
  return (
    <section id="map" className="section-padding" style={{ background: 'var(--bg-section)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag dark:bg-[#1e3a5f] dark:text-aqua-300 dark:border-[#1e3a5f]">Where We Serve</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ocean-dark dark:text-aqua-100 mb-4">
  Our <span className="gradient-text">Service Areas</span>
</h2>
         <p className="text-ocean-base/70 dark:text-aqua-300/80 max-w-lg mx-auto">
  We provide aquarium services across Delhi &amp; Gurgaon. Home visits and on-site maintenance available.
</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Map embed */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="lg:col-span-2 rounded-3xl overflow-hidden shadow-aqua-md dark:border-[#1e3a5f]"
  style={{ border: '2px solid #bae6fd', minHeight: '400px' }}
>
            {/* 
              IMPORTANT: Replace the src URL below with your actual Google Maps embed URL.
              Steps:
              1. Go to maps.google.com
              2. Search your business location
              3. Click Share → Embed a map
              4. Copy the src="..." URL from the iframe code
              5. Paste it below
            */}
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Trending Aquarium Service Areas — Delhi & gurgaon"
            />
          </motion.div>

          {/* Service area info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {serviceAreas.map((area) => (
             <div
  key={area.city}
  className="rounded-2xl p-6 dark:bg-[#111827] dark:border-[#1e3a5f]"
 style={{
  background: 'var(--bg-card)',
  border: '1px solid var(--border-color)',
  boxShadow: '0 2px 16px rgba(0,119,182,0.07)',
}}
>
              
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{area.icon}</span>
                  <h3 className="font-display font-bold text-xl text-ocean-dark dark:text-aqua-100">{area.city}</h3>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-ocean-base mt-0.5 flex-shrink-0" />
                  <p className="text-ocean-base/70 dark:text-aqua-300/70 text-sm leading-relaxed">{area.areas}</p>
                </div>
              </div>
            ))}

            {/* Business hours */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(135deg, #0077b6, #00b4d8)',
                boxShadow: '0 4px 24px rgba(0,119,182,0.25)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} color="white" />
                <h3 className="font-semibold text-white text-base">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm text-white/85">
                <div className="flex justify-between">
                  <span>Monday – Friday</span><span className="font-medium">9 AM – 7 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span><span className="font-medium">9 AM – 5 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span><span className="font-medium text-aqua-200">Emergency only</span>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/20 flex items-center gap-2">
                <Phone size={14} color="white" />
                <span className="text-white text-sm font-medium">+91-93540-11835</span>
              </div>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
