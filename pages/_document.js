import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ── Primary Meta ── */}
        <meta charSet="UTF-8" />
        <meta name="description" content="Trending Aquarium — Professional aquarium maintenance, cleaning, setup & custom design services in Delhi & gurgaon. Monthly plans starting at affordable prices." />
        <meta name="keywords"    content="aquarium maintenance Delhi, aquarium cleaning gurgaon, fish tank setup Delhi, custom aquarium design, aquarium service near me" />
        <meta name="author"      content="Trending Aquarium" />
        <meta name="robots"      content="index, follow" />

        {/* ── Open Graph ── */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://trendingaquarium.com" />
        <meta property="og:title"       content="Trending Aquarium — Professional Aquarium Services in Delhi & gurgaon" />
        <meta property="og:description" content="Expert aquarium maintenance, setup & custom design. Serving Delhi & gurgaon." />
        <meta property="og:image"       content="/og-image.jpg" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Trending Aquarium" />
        <meta name="twitter:description" content="Professional aquarium services in Delhi & gurgaon." />

        {/* ── Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />

        {/* ── Favicon ── */}
        <link rel="icon" href="/favicon.ico" />

        {/* ── Schema.org Local Business ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Trending Aquarium",
              "description": "Professional aquarium maintenance, cleaning, setup and custom design services",
              "url": "https://trendingaquarium.com",
              "telephone": "+91 93540 11835",
              "areaServed": ["Delhi", "gurgaon"],
              "serviceType": "Aquarium Maintenance",
              "priceRange": "₹₹",
              "openingHours": "Mo-Sa 09:00-19:00",
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
