import { motion } from 'framer-motion'
import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

// ── Placeholder gallery images (replace with real photos in /public/images/gallery) ──
// Real images: put JPG/PNG files in /public/images/gallery/
// and update this array with actual filenames.
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=600&q=80', alt: 'Beautiful planted aquarium', height: 280 },
  { src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&q=80', alt: 'Colourful tropical fish tank', height: 200 },
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', alt: 'Marine reef aquarium', height: 320 },
  { src: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=600&q=80', alt: 'Freshwater community tank', height: 220 },
  { src: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&q=80', alt: 'Custom aquarium setup', height: 260 },
  { src: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&q=80', alt: 'Office aquarium installation', height: 300 },
  { src: 'https://images.unsplash.com/photo-1516715094483-75da7dee9758?w=600&q=80', alt: 'Planted tank with driftwood', height: 240 },
  { src: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=600&q=80', alt: 'Large custom aquarium', height: 200 },
  { src: 'https://images.unsplash.com/photo-1570483762892-8a4e33d4bcae?w=600&q=80', alt: 'Aquarium maintenance', height: 280 },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding" style={{ background: '#f0f9ff' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag">Our Work</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ocean-dark mb-4">
            Portfolio <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-ocean-base/70 max-w-lg mx-auto">
            Real aquariums we have set up and maintain for homes and offices across Delhi &amp; Noida.
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
                    style={{ height: img.height }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
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

        <div className="text-center mt-10">
          <p className="text-sm text-ocean-base/60 italic">
            📷 Replace placeholder images with your real aquarium photos in <code className="bg-aqua-100 px-1.5 py-0.5 rounded text-ocean-deep">/public/images/gallery/</code>
          </p>
        </div>
      </div>
    </section>
  )
}
