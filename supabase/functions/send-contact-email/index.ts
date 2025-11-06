// Using Deno's built-in serve function (no import needed)

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

interface ContactData {
  name: string
  email: string
  subject: string
  message: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { record } = await req.json()
    const contact: ContactData = record

    console.log('Received contact submission:', contact)

    // Send email using Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Study Hub Solutions <onboarding@resend.dev>', // Change this after domain verification
        to: ['studyhubsolutions96@gmail.com'], // Your email
        subject: `New Contact Form Submission: ${contact.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${contact.name} (${contact.email})</p>
          <p><strong>Subject:</strong> ${contact.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${contact.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Submitted via Study Hub Solutions contact form</small></p>
        `,
      }),
    })

    const data = await res.json()

    if (res.ok) {
      console.log('Email sent successfully:', data)
      return new Response(
        JSON.stringify({ success: true, data }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      )
    } else {
      console.error('Failed to send email:', data)
      throw new Error(data.message || 'Failed to send email')
    }
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
