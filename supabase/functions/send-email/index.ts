import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

interface EmailRequest {
  type: 'contact_notification' | 'contact_confirmation' | 'booking_notification' | 'booking_confirmation'
  data: {
    name: string
    email: string
    subject?: string
    message?: string
    service?: string
    date?: string
    time?: string
    phone?: string
  }
}

const getEmailTemplate = (type: string, data: any) => {
  const templates = {
    contact_notification: {
      to: ['ipavlo953@gmail.com'], // Temporary: using your verified email for testing
      subject: `New Contact Form Submission - ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
            <div style="margin-bottom: 20px;">
              <strong style="color: #374151;">From:</strong> ${data.name}<br>
              <strong style="color: #374151;">Email:</strong> ${data.email}<br>
              <strong style="color: #374151;">Subject:</strong> ${data.subject}
            </div>
            <div style="margin-bottom: 20px;">
              <strong style="color: #374151;">Message:</strong>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 4px; margin-top: 10px; white-space: pre-wrap;">${data.message}</div>
            </div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This is an automated notification from your Study Hub Solutions website.
            </p>
          </div>
        </div>
      `,
      text: `New Contact Form Submission\n\nFrom: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}\n\n---\nThis is an automated notification from your website.`
    },
    
    contact_confirmation: {
      to: ['ipavlo953@gmail.com'], // Temporary: for testing, all emails go to your verified address
      subject: 'Thank you for contacting Study Hub Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px;">Thank You for Contacting Us!</h2>
            <p style="color: #374151; line-height: 1.6;">Hello <strong>${data.name}</strong>,</p>
            <p style="color: #374151; line-height: 1.6;">Thank you for reaching out to Study Hub Solutions!</p>
            <p style="color: #374151; line-height: 1.6;">We have received your message regarding: <strong>${data.subject}</strong></p>
            <p style="color: #374151; line-height: 1.6;">Our team will review your inquiry and get back to you within 24 hours at ${data.email}.</p>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2563eb; margin: 0 0 10px 0;">Contact Information</h3>
              <p style="margin: 5px 0; color: #374151;">📧 studyhubsolutions96@gmail.com</p>
              <p style="margin: 5px 0; color: #374151;">📞 +1 (909) 962-7940</p>
            </div>
            <p style="color: #374151; line-height: 1.6;">Best regards,<br><strong>Study Hub Solutions Team</strong></p>
          </div>
        </div>
      `,
      text: `Hello ${data.name},\n\nThank you for reaching out to Study Hub Solutions!\n\nWe have received your message regarding: ${data.subject}\n\nOur team will review your inquiry and get back to you within 24 hours at ${data.email}.\n\nBest regards,\nStudy Hub Solutions Team\nstudyhubsolutions96@gmail.com\n+1 (909) 962-7940`
    },
    
    booking_notification: {
      to: ['ipavlo953@gmail.com'], // Temporary: using your verified email for testing
      subject: `New Booking Request - ${data.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px;">New Booking Request</h2>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #2563eb; margin: 0 0 15px 0;">Service Details</h3>
              <p style="margin: 5px 0; color: #374151;"><strong>Service:</strong> ${data.service}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Date:</strong> ${data.date}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Time:</strong> ${data.time}</p>
            </div>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #2563eb; margin: 0 0 15px 0;">Client Details</h3>
              <p style="margin: 5px 0; color: #374151;"><strong>Name:</strong> ${data.name}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Email:</strong> ${data.email}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Phone:</strong> ${data.phone}</p>
            </div>
            ${data.message ? `<div style="margin-bottom: 20px;"><strong style="color: #374151;">Additional Message:</strong><div style="background-color: #f3f4f6; padding: 15px; border-radius: 4px; margin-top: 10px; white-space: pre-wrap;">${data.message}</div></div>` : ''}
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">This is an automated notification from your Study Hub Solutions website.</p>
          </div>
        </div>
      `,
      text: `New Booking Request\n\nService: ${data.service}\nDate: ${data.date}\nTime: ${data.time}\n\nClient Details:\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\n${data.message ? `Additional Message:\n${data.message}\n\n` : ''}---\nThis is an automated notification from your website.`
    },
    
    booking_confirmation: {
      to: ['ipavlo953@gmail.com'], // Temporary: for testing, all emails go to your verified address
      subject: 'Booking Confirmed - Study Hub Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #16a34a; margin-bottom: 20px;">✅ Booking Confirmed!</h2>
            <p style="color: #374151; line-height: 1.6;">Hello <strong>${data.name}</strong>,</p>
            <p style="color: #374151; line-height: 1.6;">Your booking with Study Hub Solutions has been confirmed!</p>
            <div style="background-color: #f0fdf4; border: 2px solid #16a34a; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #16a34a; margin: 0 0 15px 0;">Booking Details</h3>
              <p style="margin: 5px 0; color: #374151;"><strong>Service:</strong> ${data.service}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Date:</strong> ${data.date}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Time:</strong> ${data.time}</p>
            </div>
            <p style="color: #374151; line-height: 1.6;">We will send you a reminder 24 hours before your session. If you need to reschedule or have any questions, please contact us.</p>
            <p style="color: #374151; line-height: 1.6;">We look forward to helping you succeed!</p>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2563eb; margin: 0 0 10px 0;">Contact Information</h3>
              <p style="margin: 5px 0; color: #374151;">📧 studyhubsolutions96@gmail.com</p>
              <p style="margin: 5px 0; color: #374151;">📞 +1 (909) 962-7940</p>
            </div>
            <p style="color: #374151; line-height: 1.6;">Best regards,<br><strong>Study Hub Solutions Team</strong></p>
          </div>
        </div>
      `,
      text: `Hello ${data.name},\n\nYour booking with Study Hub Solutions has been confirmed!\n\nBooking Details:\nService: ${data.service}\nDate: ${data.date}\nTime: ${data.time}\n\nWe will send you a reminder 24 hours before your session. If you need to reschedule or have any questions, please contact us at studyhubsolutions96@gmail.com.\n\nWe look forward to helping you succeed!\n\nBest regards,\nStudy Hub Solutions Team\nstudyhubsolutions96@gmail.com\n+1 (909) 962-7940`
    }
  }
  
  return templates[type as keyof typeof templates]
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set')
    }

    const { type, data }: EmailRequest = await req.json()
    
    if (!type || !data) {
      throw new Error('Missing required fields: type and data')
    }

    const template = getEmailTemplate(type, data)
    
    if (!template) {
      throw new Error(`Unknown email type: ${type}`)
    }

    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Study Hub Solutions <onboarding@resend.dev>',
        to: template.to,
        subject: template.subject,
        html: template.html,
        text: template.text,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Resend API error:', errorText)
      throw new Error(`Resend API error: ${response.status} ${errorText}`)
    }

    const result = await response.json()
    
    return new Response(
      JSON.stringify({ success: true, id: result.id }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
