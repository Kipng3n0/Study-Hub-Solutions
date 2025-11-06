// Using Deno's built-in serve function (no import needed)

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

interface BookingData {
  service: string
  date: string
  time: string
  name: string
  email: string
  phone: string
  message: string | null
  status: string
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
    const booking: BookingData = record

    console.log('Received booking submission:', booking)

    // Format date for email
    const bookingDate = new Date(booking.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

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
        subject: `New Booking: ${booking.service}`,
        html: `
          <h2>New Booking Received</h2>
          
          <h3>Service Details</h3>
          <p><strong>Service:</strong> ${booking.service}</p>
          <p><strong>Date:</strong> ${bookingDate}</p>
          <p><strong>Time:</strong> ${booking.time}</p>
          <p><strong>Status:</strong> ${booking.status}</p>
          
          <h3>Client Information</h3>
          <p><strong>Name:</strong> ${booking.name}</p>
          <p><strong>Email:</strong> ${booking.email}</p>
          <p><strong>Phone:</strong> ${booking.phone}</p>
          
          ${booking.message ? `
            <h3>Additional Information</h3>
            <p>${booking.message.replace(/\n/g, '<br>')}</p>
          ` : ''}
          
          <hr>
          <p><small>Submitted via Study Hub Solutions booking form</small></p>
        `,
      }),
    })

    const data = await res.json()

    if (res.ok) {
      console.log('Booking email sent successfully:', data)
      return new Response(
        JSON.stringify({ success: true, data }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      )
    } else {
      console.error('Failed to send booking email:', data)
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
