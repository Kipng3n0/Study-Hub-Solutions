// Supabase Edge Function configuration
const SUPABASE_FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/smooth-endpoint`

export interface ContactEmailData {
  name: string
  email: string
  subject: string
  message: string
}

export interface BookingEmailData {
  service: string
  date: string
  time: string
  name: string
  email: string
  phone: string
  message?: string
}

/**
 * Send contact form notification to Study Hub Solutions
 */
export const sendContactNotification = async (data: ContactEmailData): Promise<void> => {
  console.log('Calling Edge Function URL:', SUPABASE_FUNCTION_URL)
  const response = await fetch(SUPABASE_FUNCTION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      type: 'contact_notification',
      data: data,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to send contact notification: ${errorText}`)
  }
}

/**
 * Send confirmation email to user who submitted contact form
 */
export const sendContactConfirmation = async (data: ContactEmailData): Promise<void> => {
  const response = await fetch(SUPABASE_FUNCTION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      type: 'contact_confirmation',
      data: data,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to send contact confirmation: ${errorText}`)
  }
}

/**
 * Send booking notification to Study Hub Solutions
 */
export const sendBookingNotification = async (data: BookingEmailData): Promise<void> => {
  const response = await fetch(SUPABASE_FUNCTION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      type: 'booking_notification',
      data: data,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to send booking notification: ${errorText}`)
  }
}

/**
 * Send confirmation email to user who made a booking
 */
export const sendBookingConfirmation = async (data: BookingEmailData): Promise<void> => {
  const response = await fetch(SUPABASE_FUNCTION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      type: 'booking_confirmation',
      data: data,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to send booking confirmation: ${errorText}`)
  }
}
