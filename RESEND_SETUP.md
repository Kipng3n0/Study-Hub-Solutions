# Resend Email Setup Guide

This guide will help you set up Resend to send email notifications for contact and booking forms.

## Step 1: Create Resend Account

1. Go to [https://resend.com/](https://resend.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Get Your API Key

1. Go to your Resend dashboard
2. Navigate to **API Keys** in the sidebar
3. Click **Create API Key**
4. Give it a name (e.g., "Study Hub Solutions")
5. Copy the API key → Use for `VITE_RESEND_API_KEY`

## Step 3: Set Up Domain (Optional but Recommended)

For production use, you should verify your own domain:

1. Go to **Domains** in the Resend dashboard
2. Click **Add Domain**
3. Enter your domain (e.g., `studyhubsolutions.com`)
4. Follow the DNS verification steps
5. Update the `FROM_EMAIL` in `src/lib/emailService.ts` to use your domain

**For development/testing**, you can use Resend's default domain, but emails will be marked as "via resend.dev".

## Step 4: Update Environment Variables

Update your `.env` file with your Resend API key:

```env
# Resend Configuration
VITE_RESEND_API_KEY=re_your_actual_api_key_here
```

## Step 5: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## Step 6: Test Email Functionality

1. Go to your Contact page
2. Fill out and submit the form
3. Check:
   - Your Supabase database (data should be saved)
   - studyhubsolutions96@gmail.com inbox (notification email)
   - The user's email inbox (confirmation email)

## Email Templates

The system now uses 4 built-in HTML email templates:

1. **Contact Notification** - Sent to Study Hub Solutions when someone submits the contact form
2. **Contact Confirmation** - Sent to the user who submitted the contact form
3. **Booking Notification** - Sent to Study Hub Solutions when someone makes a booking
4. **Booking Confirmation** - Sent to the user who made a booking

All templates are defined in `src/lib/email-templates.ts` and include both HTML and plain text versions.

## Troubleshooting

### Emails not sending?

1. Check browser console for errors
2. Verify your API key is set correctly in `.env`
3. Make sure you've restarted your development server after updating `.env`
4. Check the Resend dashboard for error logs and usage statistics

### API Key Issues?

1. Make sure your API key starts with `re_`
2. Ensure you're using the correct environment variable name: `VITE_RESEND_API_KEY`
3. Check that your API key has the necessary permissions

### Domain Issues?

1. If using a custom domain, ensure it's verified in Resend
2. For development, you can use the default Resend domain
3. Update `FROM_EMAIL` in `src/lib/emailService.ts` to match your verified domain

## Free Tier Limits

Resend free tier includes:
- **3,000 emails per month**
- **100 emails per day**
- 1 custom domain
- Full API access

This is much more generous than EmailJS's 200 emails/month limit!

## Production Considerations

For production deployment:

1. **Verify your domain** in Resend for better deliverability
2. **Set up proper DNS records** (SPF, DKIM, DMARC)
3. **Monitor your email usage** in the Resend dashboard
4. **Consider upgrading** to a paid plan if you need more than 3,000 emails/month

## API Reference

The email service exports these functions:

- `sendContactNotification(data)` - Send notification to Study Hub Solutions
- `sendContactConfirmation(data)` - Send confirmation to contact form user
- `sendBookingNotification(data)` - Send booking notification to Study Hub Solutions
- `sendBookingConfirmation(data)` - Send booking confirmation to user

All functions are async and will throw errors if the API call fails.
