import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar       from '../components/Navbar'
import Footer       from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

// Sections — dynamically imported for code splitting
const HeroSection         = dynamic(() => import('../components/sections/HeroSection'),         { ssr: false })
const ServicesSection     = dynamic(() => import('../components/sections/ServicesSection'))
const GallerySection      = dynamic(() => import('../components/sections/GallerySection'))
const ProductsSection     = dynamic(() => import('../components/sections/ProductsSection'))
const TestimonialsSection = dynamic(() => import('../components/sections/TestimonialsSection'), { ssr: false })
const ContactSection      = dynamic(() => import('../components/sections/ContactSection'))
const MapSection          = dynamic(() => import('../components/sections/MapSection'))

export default function Home() {
  return (
    <>
      <Head>
        <title>Trending Aquarium — Professional Aquarium Services in Delhi & Noida</title>
      </Head>

      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ProductsSection />
        <TestimonialsSection />
        <ContactSection />
        <MapSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
