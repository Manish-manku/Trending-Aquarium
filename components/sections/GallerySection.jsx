import { motion } from 'framer-motion'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

// ── Placeholder gallery images (replace with real photos in /public/images/gallery) ──
// Real images: put JPG/PNG files in /public/images/gallery/
// and update this array with actual filenames.
const galleryImages = [
  { src: '/images/aquarium/aquarium1.jpeg', alt: 'Aquarium setup Delhi' },
  { src: '/images/aquarium/aquarium2.jpeg', alt: 'Custom aquarium Noida' },
  { src: '/images/fish/fish1.jpeg', alt: 'Colorful tropical fish' },
  { src: '/images/aquarium/aquarium4.jpeg', alt: 'Fish tank maintenance' },
  { src: '/images/fish/fish6.jpeg', alt: 'Exotic freshwater fish' },
  { src: '/images/aquarium/aquarium6.jpeg', alt: 'Office aquarium setup' },
  { src: '/images/fish/fish2.jpeg', alt: 'Flowerhorn cichlid' },
  { src: '/images/fish/fish8.jpeg', alt: 'Oscar' },
  { src: '/images/fish/fish7.jpeg', alt: 'Bule peacock cichlid' },
  { src: '/images/fish/fish3.jpeg', alt: 'Discus fish' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding" style={{ background: 'var(--bg-section)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag dark:bg-[#1e3a5f] dark:text-aqua-300 dark:border-[#1e3a5f]">Our Work</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ocean-dark dark:text-aqua-100 mb-4">
  Portfolio <span className="gradient-text">Gallery</span>
</h2>
          <p className="text-ocean-base/70 dark:text-aqua-300/80 max-w-lg mx-auto">
  Real aquariums we have set up and maintain for homes and offices across Delhi &amp; Gurgaon.
</p>
        </div>

        {/* Masonry gallery */}
        <PhotoProvider
          maskOpacity={0.85}
          bannerVisible={false}
          speed={() => 300}
        >
          <div className="masonry-grid">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className="masonry-item"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <PhotoView src={img.src}>
                  <div
  className="relative overflow-hidden rounded-2xl cursor-zoom-in group"
>
  <img
    src={img.src}
    alt={img.alt}
    loading="lazy"
    className="w-full h-auto block transition-transform duration-500"
    style={{ transition: 'transform 0.5s ease' }}
    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
  />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium">{img.alt}</p>
                    </div>
                    {/* Zoom icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0077b6" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
                    </div>
                  </div>
                </PhotoView>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>


      </div>
    </section>
  )
}
