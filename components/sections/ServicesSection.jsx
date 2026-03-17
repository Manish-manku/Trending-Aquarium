import { motion } from 'framer-motion'
import { Droplets, FlaskConical, Wrench, CalendarCheck, Sparkles } from 'lucide-react'

const icons = { Droplets, FlaskConical, Wrench, CalendarCheck, Sparkles }

const services = [
  {
    icon: 'Droplets',
    title: 'Aquarium Cleaning',
    description: 'Complete cleaning of tank glass, gravel, filters, and decorations. We ensure your aquarium sparkles and fish thrive in a hygienic environment.',
    color: '#0ea5e9',
    bg: '#e0f2fe',
  },
  {
    icon: 'FlaskConical',
    title: 'Water Quality Management',
    description: 'Professional water testing for pH, ammonia, nitrite & nitrate levels. We adjust parameters to keep your aquatic life healthy and vibrant.',
    color: '#0077b6',
    bg: '#bae6fd',
  },
  {
    icon: 'Wrench',
    title: 'Aquarium Setup & Installation',
    description: 'Full setup from scratch — tank placement, filtration, lighting, substrate, plants & fish stocking. We handle everything for you.',
    color: '#00b4d8',
    bg: '#caf0f8',
  },
  {
    icon: 'CalendarCheck',
    title: 'Monthly Maintenance Plans',
    description: 'Worry-free monthly visits covering cleaning, water changes, filter maintenance & fish health checks at affordable, transparent prices.',
    color: '#0369a1',
    bg: '#dbeafe',
  },
  {
    icon: 'Sparkles',
    title: 'Custom Aquarium Design',
    description: 'Dream aquarium? We design stunning themed tanks — planted, marine, cichlid or biotope setups tailored to your style and budget.',
    color: '#7c3aed',
    bg: '#ede9fe',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white dark:bg-[#0d1526] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 dark:opacity-10"
       style={{ background: 'radial-gradient(circle, #00b4d8, transparent)', transform: 'translate(40%, -40%)' }} />
     <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 dark:opacity-10"
      style={{ background: 'radial-gradient(circle, #0077b6, transparent)', transform: 'translate(-40%, 40%)' }} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag dark:bg-[#1e3a5f] dark:text-aqua-300 dark:border-[#1e3a5f]">What We Do</span>
         <h2 className="font-display font-bold text-4xl sm:text-5xl text-ocean-dark dark:text-aqua-100 mb-4">
  Our <span className="gradient-text">Services</span>
</h2>
          <p className="text-ocean-base/70 dark:text-aqua-300/80 max-w-xl mx-auto text-lg">
  From basic cleaning to full custom builds — we take care of every drop.
</p>
          <div
  className="inline-block mt-5 px-5 py-2 rounded-full text-sm font-medium text-ocean-deep dark:text-aqua-300 dark:border-[#2a4f7f]"
  style={{ background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)', border: '1px solid #90e0ef' }}
>
  💧 Services starting from affordable maintenance plans
</div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,119,182,0.18)' }}
               className="relative rounded-2xl p-7 cursor-pointer transition-all duration-300 group dark:bg-[#111827] dark:border-[#1e3a5f]"
                style={{
                 background: 'rgba(255,255,255,0.9)',
                 border: '1px solid #e0f2fe',
                  boxShadow: '0 2px 16px rgba(0,119,182,0.07)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: service.bg }}
                >
                  <Icon size={26} color={service.color} strokeWidth={1.8} />
                </div>

               <h3 className="font-display font-semibold text-xl text-ocean-dark dark:text-aqua-100 mb-3 leading-snug">
  {service.title}
</h3>
               <p className="text-ocean-base/75 dark:text-aqua-300/70 text-sm leading-relaxed">
  {service.description}
</p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                />
              </motion.div>
            )
          })}

          {/* CTA card */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="rounded-2xl p-7 flex flex-col items-center justify-center text-center"
            style={{ background: 'linear-gradient(135deg, #0077b6, #00b4d8)', boxShadow: '0 8px 32px rgba(0,119,182,0.30)' }}
          >
            <div className="text-4xl mb-4">🐠</div>
            <h3 className="font-display font-bold text-xl text-white mb-3">Not sure which plan?</h3>
            <p className="text-white/80 text-sm mb-5 leading-relaxed">
              Tell us about your aquarium and we'll suggest the best service for you.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-ocean-deep font-semibold rounded-full text-sm hover:-translate-y-1 transition-transform"
            >
              Get Free Advice →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
