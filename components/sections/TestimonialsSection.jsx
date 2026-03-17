import { useRef } from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import testimonials from '../../data/testimonials.json'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1,2,3,4,5].map(n => (
        <svg key={n} width="16" height="16" viewBox="0 0 24 24"
          fill={n <= rating ? '#fbbf24' : '#e5e7eb'} stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section id="testimonials" className="section-padding" style={{ background: 'var(--bg-section)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag dark:bg-[#1e3a5f] dark:text-aqua-300 dark:border-[#1e3a5f]">Happy Customers</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ocean-dark dark:text-aqua-100 mb-4">
  What People <span className="gradient-text">Say</span>
</h2>
         <p className="text-ocean-base/70 dark:text-aqua-300/80 max-w-md mx-auto">
  Real reviews from our happy customers in Delhi &amp; Noida.
</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="pb-10">
            {testimonials.map((t) => (
              <div key={t.id} className="px-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-6 h-full transition-all duration-300"
style={{
  background: 'var(--bg-card)',
  backdropFilter: 'blur(10px)',
  border: '1px solid var(--border-color)',
  boxShadow: '0 2px 20px rgba(0,119,182,0.08)',
  minHeight: '200px',
}}
                >
                  <Quote size={28} className="text-aqua-200 mb-3" />
                  <StarRating rating={t.rating} />
                  <p className="text-ocean-dark/80 dark:text-aqua-100/80 text-sm leading-relaxed mb-5 italic">
  "{t.review}"
</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-aqua-100 dark:border-[#1e3a5f]">
                    {/* Avatar */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #00b4d8, #0077b6)' }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-ocean-dark dark:text-aqua-100 text-sm">{t.name}</div>
<div className="text-xs text-ocean-base/60 dark:text-aqua-300/60">{t.city} · {t.aquariumSize} tank</div> </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

          {/* Custom nav arrows */}
          <div className="flex justify-center gap-3 mt-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-x-0.5 dark:bg-[#1e3a5f] dark:border-[#2a4f7f] dark:text-aqua-300"
style={{ background: '#e0f2fe', border: '1px solid #bae6fd', color: '#0077b6' }}>
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:translate-x-0.5"
              style={{ background: 'linear-gradient(135deg, #00b4d8, #0077b6)', color: '#fff' }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
