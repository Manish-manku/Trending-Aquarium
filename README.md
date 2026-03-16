# 🐠 Trending Aquarium — Full Website

A modern, animated Next.js portfolio website for **Trending Aquarium**, serving Delhi & Noida.

---

## ✅ Features

- Animated aquarium hero with Canvas API (bubbles, fish, light rays)
- Cursor-following fish (desktop)
- 7 sections: Hero, Services, Gallery, Products, Testimonials, Contact, Google Maps
- WhatsApp floating button + pre-filled message
- Email enquiry form → saves to Supabase + sends email via Resend
- Masonry gallery with lightbox (react-photo-view)
- Testimonials carousel (react-slick)
- Fully responsive: mobile, tablet, desktop
- SEO optimized with Schema.org LocalBusiness markup
- Clean code — each section in separate file, easy to edit

---

## 📁 Project Structure

```
trending-aquarium/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── WhatsAppFloat.jsx
│   └── sections/
│       ├── HeroSection.jsx        ← Canvas animation, CTA buttons
│       ├── ServicesSection.jsx    ← 5 service cards
│       ├── GallerySection.jsx     ← Masonry + lightbox
│       ├── ProductsSection.jsx    ← Fish, plants, brands
│       ├── TestimonialsSection.jsx← Carousel
│       ├── ContactSection.jsx     ← Form + WhatsApp
│       └── MapSection.jsx         ← Google Maps embed
├── data/
│   ├── testimonials.json          ← Edit testimonials here
│   └── services.js
├── pages/
│   ├── index.js                   ← Main page
│   ├── _app.js
│   ├── _document.js               ← SEO meta tags
│   └── api/
│       └── contact.js             ← Form submission handler
├── lib/
│   └── supabase.js
├── public/
│   └── images/
│       ├── gallery/               ← Add your aquarium photos here
│       ├── fish/                  ← Fish images
│       └── products/              ← Product images
├── styles/
│   └── globals.css
├── .env.example                   ← Copy to .env.local
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd trending-aquarium
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Then fill in `.env.local` (see sections below for how to get each value).

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🗄️ Supabase Setup (Database — Free)

**Time required: ~10 minutes**

### Step 1 — Create Account
1. Go to [supabase.com](https://supabase.com)
2. Click **Start for free** → Sign up with GitHub or email
3. Click **New Project** → Name it `trending-aquarium`
4. Choose a **database password** (save it) → Click Create

### Step 2 — Create the Table
1. In your Supabase project, go to **SQL Editor** (left sidebar)
2. Click **New query** and paste:

```sql
CREATE TABLE enquiries (
  id            BIGSERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  phone         TEXT NOT NULL,
  city          TEXT NOT NULL,
  aquarium_size TEXT,
  message       TEXT NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Allow the form to insert data (RLS policy)
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert"
  ON enquiries FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only you can read enquiries (use your Supabase auth)
CREATE POLICY "Allow owner to read"
  ON enquiries FOR SELECT
  TO authenticated
  USING (true);
```

3. Click **Run** — you'll see "Success"

### Step 3 — Get Your API Keys
1. Go to **Settings** (gear icon) → **API**
2. Copy:
   - **Project URL** → paste as `NEXT_PUBLIC_SUPABASE_URL`
   - **anon / public key** → paste as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Step 4 — View Enquiries
Go to **Table Editor** → select `enquiries` table to see all form submissions.

---

## 📧 Resend Email Setup (Free — 100 emails/day)

**Time required: ~5 minutes**

### Step 1 — Create Account
1. Go to [resend.com](https://resend.com)
2. Sign up for free
3. Go to **API Keys** → click **Create API Key**
4. Copy the key → paste as `RESEND_API_KEY` in `.env.local`

### Step 2 — Set Your Email
In `.env.local`, set `OWNER_EMAIL` to your email address where you want to receive enquiry notifications.

### Step 3 — Domain (Optional but Recommended)
- For testing: emails send from `onboarding@resend.dev` (works immediately)
- For production: verify your domain in Resend → Domains → Add Domain
  - This lets emails say "From: Trending Aquarium <info@trendingaquarium.in>"

---

## 💬 WhatsApp Setup

1. In `.env.local`, set your WhatsApp Business number:
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
   ```
   Format: country code + number, no spaces or +
   - India example: `919876543210` (91 = India, then your 10-digit number)

2. The pre-filled message is:
   > "Hello, I saw your website and I want aquarium maintenance service."

   To change it, search for `WA_MSG` in the component files.

---

## 🗺️ Google Maps Setup

1. Go to [maps.google.com](https://maps.google.com)
2. Search for your business location or address
3. Click **Share** → **Embed a map**
4. Copy the URL from the `src="..."` part of the iframe code
5. Open `components/sections/MapSection.jsx`
6. Replace `MAPS_EMBED_URL` at the top with your URL

**For Google My Business (recommended for SEO):**
1. Go to [business.google.com](https://business.google.com)
2. Add/claim your business "Trending Aquarium"
3. Set your service areas as Delhi & Noida
4. Use the Google Business listing embed URL instead

---

## 🖼️ Adding Real Photos

### Gallery photos
1. Add your aquarium photos to `/public/images/gallery/`
2. Open `components/sections/GallerySection.jsx`
3. Replace the `galleryImages` array with your local paths:

```js
const galleryImages = [
  { src: '/images/gallery/aquarium1.jpg', alt: 'My planted aquarium', height: 280 },
  { src: '/images/gallery/aquarium2.jpg', alt: 'Office setup Noida',  height: 220 },
  // ... add more
]
```

### Logo
1. Add your logo file to `/public/logo.png` (or .svg)
2. Open `components/Navbar.jsx`
3. Replace the Fish icon with:
```jsx
import Image from 'next/image'
<Image src="/logo.png" alt="Trending Aquarium" width={36} height={36} />
```

---

## ✏️ Easy Content Edits

| What to change          | File to edit                              |
|-------------------------|-------------------------------------------|
| Testimonials            | `data/testimonials.json`                  |
| Services                | `components/sections/ServicesSection.jsx` |
| Fish types & plants     | `components/sections/ProductsSection.jsx` |
| Hero text & tagline     | `components/sections/HeroSection.jsx`     |
| Contact phone/email     | `components/sections/ContactSection.jsx`  |
| Footer links            | `components/Footer.jsx`                   |
| SEO meta tags           | `pages/_document.js`                      |
| Color theme             | `tailwind.config.js` + `styles/globals.css` |

---

## 🚀 Deploying to Vercel (Recommended — Free)

**Time required: ~5 minutes**

1. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/trending-aquarium.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → Sign in with GitHub

3. Click **New Project** → Import your repository

4. Add Environment Variables:
   - Click **Environment Variables**
   - Add all variables from your `.env.local` file

5. Click **Deploy** — done! 🎉

Your site will be live at: `https://trending-aquarium.vercel.app`

**Custom domain (e.g. trendingaquarium.in):**
- In Vercel → Project Settings → Domains → Add `trendingaquarium.in`
- Update your domain DNS as instructed

---

## 📈 Handling 10,000+ Visits/Day

This stack handles 10k+ visits/day easily:

| Layer       | Solution                              | Why it works                    |
|-------------|---------------------------------------|---------------------------------|
| Frontend    | Vercel Edge Network (CDN)             | Global CDN, static assets cached|
| Backend     | Next.js API routes (serverless)       | Auto-scales with traffic        |
| Database    | Supabase (PostgreSQL)                 | 500MB free, connection pooling  |
| Images      | Next.js Image + WebP + lazy loading   | Reduces bandwidth 60-80%        |
| Animations  | Canvas API (no heavy 3D libraries)    | GPU-accelerated, lightweight    |

**Vercel free tier:** 100GB bandwidth/month — enough for ~1M page views.

---

## 🔧 Performance Tips

- Replace Unsplash placeholder images with your own optimized WebP images
- Run `npm run build` and check for warnings before deploying
- Use Cloudflare (free) in front of Vercel for extra caching & DDoS protection

---

## 📞 Support

For questions about this codebase, refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Resend Docs](https://resend.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)

---

*Built for Trending Aquarium — Delhi & Noida 🐠*
