import { motion } from 'framer-motion'

const fishTypes = [
  { name: 'Goldfish',       emoji: '🐡', desc: 'Hardy & beautiful',        color: '#fbbf24' },
  { name: 'Guppy',          emoji: '🐠', desc: 'Colourful & easy',          color: '#f472b6' },
  { name: 'Arowana',        emoji: '🐟', desc: 'Premium & exotic',          color: '#34d399' },
  { name: 'Oscar',          emoji: '🐡', desc: 'Bold & interactive',        color: '#fb923c' },
  { name: 'Discus',         emoji: '🐠', desc: 'Stunning & graceful',       color: '#60a5fa' },
  { name: 'Betta',          emoji: '🐟', desc: 'Vibrant & low-maintenance', color: '#a78bfa' },
  { name: 'Cichlid',        emoji: '🐡', desc: 'Active & diverse',          color: '#4ade80' },
  { name: 'Koi',            emoji: '🐟', desc: 'Traditional & majestic',    color: '#f87171' },
]

const plants = [
  { name: 'Java Fern',     emoji: '🌿' },
  { name: 'Anubias',       emoji: '🍃' },
  { name: 'Amazon Sword',  emoji: '🌱' },
  { name: 'Moss Balls',    emoji: '🔵' },
  { name: 'Water Sprite',  emoji: '🌿' },
  { name: 'Cryptocoryne',  emoji: '🍂' },
]

const brands = [
  { name: 'Minjiang',   img:'/images/products/product1.jpeg'},
  { name: 'Sera',       img:'/images/products/product2.jpeg'},
  { name: 'Hikari',     img:'/images/products/product3.jpeg'},
  { name: 'Optimum',    img:'/images/products/product4.jpeg'},
  { name: 'Tetra',      img:'/images/products/product5.jpeg'},
  { name: 'Sobo',       img:'/images/products/product6.png'},
]

export default function ProductsSection() {
  return (
    <section id="products" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">

        {/* ── Fish Types ──────────────────────── */}
        <div className="text-center mb-12">
          <span className="section-tag dark:bg-[#1e3a5f] dark:text-aqua-300 dark:border-[#1e3a5f]">What We Keep</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ocean-dark dark:text-aqua-100 mb-4">
  Fish &amp; <span className="gradient-text">Plants</span>
</h2>
         <p className="text-ocean-base/70 dark:text-aqua-300/80 max-w-lg mx-auto">
  We work with a wide variety of freshwater and marine species — carefully selected for health and compatibility.
</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {fishTypes.map((fish, i) => (
            <motion.div
              key={fish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -5 }}
             className="rounded-2xl p-5 text-center cursor-default transition-all duration-300"
style={{
  background: 'var(--bg-card)',
  border: '1px solid var(--border-color)',
  boxShadow: '0 2px 12px rgba(0,119,182,0.07)',
}}
            >
              <div className="text-3xl mb-2">{fish.emoji}</div>
              <div className="font-semibold text-ocean-dark dark:text-aqua-100 text-sm">{fish.name}</div>
<div className="text-xs text-ocean-base/60 dark:text-aqua-300/60 mt-0.5">{fish.desc}</div>
        </motion.div>
          ))}
        </div>

        {/* ── Plants ──────────────────────────── */}
        <div className="mb-16">
          <h3 className="font-display font-semibold text-2xl text-ocean-dark dark:text-aqua-100 mb-6 text-center">
  🌿 Aquarium Plants
</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {plants.map((plant, i) => (
              <motion.span
                key={plant.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
               className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-ocean-deep dark:text-aqua-300 dark:border-[#1e3a5f]"
style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }} >
                {plant.emoji} {plant.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ── Trusted Brands ──────────────────── */}
        <div>
          <div className="text-center mb-8">
            <h3 className="font-display font-semibold text-2xl text-ocean-dark dark:text-aqua-100 mb-2">
  🏷️ Trusted Brands We Use
</h3>
<p className="text-ocean-base/60 dark:text-aqua-300/60 text-sm">Only quality-certified products for your aquarium</p>  </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand, i) => (
              <motion.div
  key={brand.name}
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.08 }}
  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,119,182,0.20)' }}
  className="rounded-2xl p-5 text-center transition-all duration-300"
style={{
  background: 'var(--bg-card)',
  border: '1.5px solid var(--border-color)',
  boxShadow: '0 2px 12px rgba(0,119,182,0.10)',
}}
>
  <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center">
    <img
      src={brand.img}
      alt={brand.name}
      className="w-full h-full object-contain scale-150"
    />
  </div>
  <div className="font-bold text-ocean-dark dark:text-aqua-100 text-sm">{brand.name}</div>
</motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
