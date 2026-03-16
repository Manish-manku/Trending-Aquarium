import { supabase } from '../../lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, city, aquariumSize, message } = req.body

  // ── Validate ──────────────────────────────────────────
  if (!name || !phone || !city || !message) {
    return res.status(400).json({ error: 'Please fill all required fields.' })
  }

  try {
    // ── 1. Save to Supabase ───────────────────────────────
    const { error: dbError } = await supabase
      .from('enquiries')
      .insert([{ name, phone, city, aquarium_size: aquariumSize, message }])

    if (dbError) {
      console.error('Supabase error:', dbError)
      // Don't block email even if DB fails
    }

    // ── 2. Send email notification ────────────────────────
    const ownerEmail = process.env.OWNER_EMAIL
    if (ownerEmail && process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from:    'Trending Aquarium <onboarding@resend.dev>',
        to:      ownerEmail,
        subject: `New Enquiry from ${name} — ${city}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #bae6fd; border-radius: 12px;">
            <h2 style="color: #0077b6;">🐠 New Aquarium Enquiry</h2>
            <hr style="border-color: #e0f2fe;" />
            <table style="width:100%; border-collapse: collapse;">
              <tr><td style="padding:8px 0; color:#666; width:140px;">Name</td><td style="padding:8px 0; font-weight:600;">${name}</td></tr>
              <tr><td style="padding:8px 0; color:#666;">Phone</td><td style="padding:8px 0; font-weight:600;">${phone}</td></tr>
              <tr><td style="padding:8px 0; color:#666;">City</td><td style="padding:8px 0;">${city}</td></tr>
              <tr><td style="padding:8px 0; color:#666;">Aquarium Size</td><td style="padding:8px 0;">${aquariumSize || 'Not specified'}</td></tr>
              <tr><td style="padding:8px 0; color:#666; vertical-align:top;">Message</td><td style="padding:8px 0;">${message}</td></tr>
            </table>
            <hr style="border-color: #e0f2fe;" />
            <p style="color:#999; font-size:12px; margin-top:16px;">Sent from Trending Aquarium website — trendingaquarium.in</p>
          </div>
        `,
      })
    }

    return res.status(200).json({ success: true, message: 'Enquiry submitted successfully!' })

  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
