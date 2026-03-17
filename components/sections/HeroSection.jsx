import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+919354011835'
const WA_MSG = encodeURIComponent('Hello, I saw your website and I want to know more about your aquarium services.')

/* ── Aquarium canvas animation ─────────────── */
function useAquariumCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Bubbles
    const bubbles = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 200,
      r: 3 + Math.random() * 10,
      speed: 0.5 + Math.random() * 1.5,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.02 + Math.random() * 0.03,
    }))

    // Fish (simple)
    const fishes = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: 80 + Math.random() * (canvas.height - 200),
      size: 18 + Math.random() * 22,
      speed: (0.4 + Math.random() * 0.8) * (Math.random() > 0.5 ? 1 : -1),
      color: ['#90e0ef','#48cae4','#0096c7','#ade8f4','#caf0f8'][i % 5],
      tailPhase: Math.random() * Math.PI * 2,
    }))

    // Plants (static bottom decoration)
    const plants = Array.from({ length: 8 }, (_, i) => ({
      x: (canvas.width / 8) * i + 30 + Math.random() * 20,
      height: 40 + Math.random() * 60,
      color: i % 2 === 0 ? '#0ea5e9' : '#38bdf8',
    }))

    const drawBubble = (b) => {
      ctx.beginPath()
      ctx.arc(b.x + Math.sin(b.wobble) * 8, b.y, b.r, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.55)'
      ctx.lineWidth = 1.5
      ctx.stroke()
      const grad = ctx.createRadialGradient(b.x - b.r * 0.3, b.y - b.r * 0.3, 0, b.x, b.y, b.r)
      grad.addColorStop(0, 'rgba(255,255,255,0.35)')
      grad.addColorStop(1, 'rgba(144,224,239,0.08)')
      ctx.fillStyle = grad
      ctx.fill()
    }

    const drawFish = (f) => {
      ctx.save()
      ctx.translate(f.x, f.y)
      if (f.speed < 0) ctx.scale(-1, 1)

      const tailWag = Math.sin(f.tailPhase) * 0.25
      // Body
      ctx.beginPath()
      ctx.ellipse(0, 0, f.size, f.size * 0.45, 0, 0, Math.PI * 2)
      ctx.fillStyle = f.color
      ctx.globalAlpha = 0.75
      ctx.fill()

      // Tail
      ctx.beginPath()
      ctx.moveTo(-f.size * 0.8, 0)
      ctx.lineTo(-f.size * 1.4 + Math.sin(f.tailPhase) * 6, -f.size * 0.55)
      ctx.lineTo(-f.size * 1.4 + Math.sin(f.tailPhase) * 6,  f.size * 0.55)
      ctx.closePath()
      ctx.fillStyle = f.color
      ctx.fill()

      // Eye
      ctx.beginPath()
      ctx.arc(f.size * 0.45, -f.size * 0.08, f.size * 0.1, 0, Math.PI * 2)
      ctx.fillStyle = '#0c2340'
      ctx.globalAlpha = 0.85
      ctx.fill()

      ctx.globalAlpha = 1
      ctx.restore()
    }

    const drawPlant = (p, t) => {
      ctx.save()
      ctx.translate(p.x, canvas.height)
      ctx.strokeStyle = p.color
      ctx.lineWidth = 3
      ctx.globalAlpha = 0.45
      const sway = Math.sin(t * 0.002 + p.x) * 8
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.bezierCurveTo(sway, -p.height * 0.4, sway * 0.5, -p.height * 0.7, sway * 1.2, -p.height)
      ctx.stroke()
      // Leaf
      ctx.beginPath()
      ctx.ellipse(sway * 1.2, -p.height, 8, 14, Math.PI / 4, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.restore()
    }

    let t = 0
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t++

      // Plants
      plants.forEach(p => drawPlant(p, t))

      // Bubbles
      bubbles.forEach(b => {
        b.y     -= b.speed
        b.wobble += b.wobbleSpeed
        if (b.y < -20) { b.y = canvas.height + 10; b.x = Math.random() * canvas.width }
        drawBubble(b)
      })

      // Fish
      fishes.forEach(f => {
        f.x += f.speed
        f.tailPhase += 0.12
        if (f.x > canvas.width + 60)  f.x = -60
        if (f.x < -60)                f.x = canvas.width + 60
        drawFish(f)
      })

      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [canvasRef])
}

/* ── Cursor fish ───────────────────────────── */
function useCursorFish() {
  useEffect(() => {
    const el = document.getElementById('cursor-fish-div')
    if (!el) return
    let mx = window.innerWidth / 2, my = window.innerHeight / 2
    let cx = mx, cy = my, lastX = mx

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)

    let raf
    const tick = () => {
      cx += (mx - cx) * 0.08
      cy += (my - cy) * 0.08
      const flipped = mx < lastX
      el.style.transform = `translate(${cx - 20}px, ${cy - 14}px) scaleX(${flipped ? -1 : 1})`
      lastX = cx
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove) }
  }, [])
}

export default function HeroSection() {
  const canvasRef = useRef(null)
  useAquariumCanvas(canvasRef)
  useCursorFish()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0077b6] via-[#0096c7] to-[#00b4d8]" />

      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 opacity-10"
            style={{
              left: `${10 + i * 20}%`,
              width: '120px',
              height: '100%',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
              transform: `rotate(${-15 + i * 8}deg) translateX(-50%)`,
              transformOrigin: 'top center',
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Canvas aquarium animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Frosted bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,48 C360,96 1080,0 1440,48 L1440,80 L0,80 Z" fill="#f8fdff" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-semibold mb-6"
            style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.30)' }}
          >
            🐠 Serving Delhi &amp; gurgaon
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-5"
        >
          Trending<br />
          <span style={{ color: '#ade8f4' }}>Aquarium</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/85 max-w-xl mx-auto mb-10 font-light"
        >
          Professional Aquarium Maintenance &amp; Care — bringing the ocean to your home or office.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-ocean-dark transition-all duration-300 hover:-translate-y-1"
            style={{ background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25d366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Chat on WhatsApp
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(255,255,255,0.18)', border: '2px solid rgba(255,255,255,0.45)', backdropFilter: 'blur(8px)' }}
          >
            Send Enquiry ↓
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            { num: '500+', label: 'Aquariums Serviced' },
            { num: '4.2★',  label: 'Customer Rating' },
            { num: '8+',  label: 'Years Experience' },
            { num: '2',   label: 'Cities Covered' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display font-bold text-2xl text-white">{s.num}</div>
              <div className="text-white/65 text-xs mt-0.5 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Cursor fish SVG */}
      <div
        id="cursor-fish-div"
        className="hidden lg:block pointer-events-none fixed top-0 left-0 z-50"
        style={{ willChange: 'transform' }}
      >
        <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
          <ellipse cx="22" cy="14" rx="14" ry="8" fill="#ade8f4" fillOpacity="0.85"/>
          <polygon points="4,14 12,7 12,21" fill="#90e0ef" fillOpacity="0.8"/>
          <circle cx="32" cy="11" r="2.5" fill="#0c2340" fillOpacity="0.7"/>
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-1.5">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
