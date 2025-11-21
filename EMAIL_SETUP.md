# Email Notification Setup Guide

This guide will help you set up email notifications for contact form submissions using Supabase Edge Functions and Resend.

## Prerequisites

- Supabase project (already set up)
- Supabase CLI installed
- Resend account (free tier available)

---

## Step 1: Install Supabase CLI

```bash
# Install Supabase CLI (if not already installed)
npm install -g supabase

# Login to Supabase
supabase login
```

---

## Step 2: Set Up Resend Account

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Verify your email address
3. Go to **API Keys** in the dashboard
4. Click **Create API Key**
5. Name it "Study Hub Solutions"
6. Copy the API key (you'll need it in the next step)

**Important:** The free tier uses `onboarding@resend.dev` as the sender. To use a custom domain (like `noreply@studyhubsolutions.com`), you need to:
- Go to **Domains** in Resend dashboard
- Add your domain
- Add the DNS records to your domain provider
- Wait for verification

---

## Step 3: Deploy the Edge Function

```bash
# Navigate to your project directory
cd /home/p4vlo/Desktop/PROJECTS/Study-Hub-Solutions

# Link your Supabase project (replace with your project ref)
supabase link --project-ref sqaddhyvbsofucamcbco

# Set the Resend API key as a secret
supabase secrets set RESEND_API_KEY=re_YourApiKeyHere

# Deploy the edge function
supabase functions deploy send-contact-email
```

---

## Step 4: Set Up Database Webhook

You have two options to trigger the email when a contact is submitted:

### Option A: Using Supabase Database Webhooks (Recommended)

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Database** → **Webhooks**
4. Click **Create a new hook**
5. Configure:
   - **Name:** `send-contact-email`
   - **Table:** `contacts`
   - **Events:** Check `INSERT`
   - **Type:** `HTTP Request`
   - **Method:** `POST`
   - **URL:** `https://sqaddhyvbsofucamcbco.supabase.co/functions/v1/send-contact-email`
   - **HTTP Headers:** Add header `Authorization` with value `Bearer YOUR_SUPABASE_ANON_KEY`
6. Click **Create webhook**

### Option B: Using PostgreSQL Trigger (Alternative)

Run this SQL in your Supabase SQL Editor:

```sql
-- Create function to call edge function
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM
    net.http_post(
      url := 'https://sqaddhyvbsofucamcbco.supabase.co/functions/v1/send-contact-email',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('request.headers')::json->>'authorization'
      ),
      body := jsonb_build_object('record', to_jsonb(NEW))
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger
CREATE TRIGGER on_contact_created
  AFTER INSERT ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact();
```

---

## Step 5: Update Email Recipients (Optional)

To change where emails are sent, edit the Edge Function:

1. Open `supabase/functions/send-contact-email/index.ts`
2. Find this line:
   ```typescript
   to: ['studyhubsolutions96@gmail.com'],
   ```
3. Change to your email address(es)
4. Redeploy: `supabase functions deploy send-contact-email`

---

## Step 6: Test the Setup

1. Go to your website contact form
2. Submit a test message
3. Check your email inbox (and spam folder)
4. You should receive an email within seconds

### Troubleshooting

If you don't receive emails:

1. **Check Edge Function Logs:**
   ```bash
   supabase functions logs send-contact-email
   ```

2. **Check Webhook Status:**
   - Go to Supabase Dashboard → Database → Webhooks
   - Click on your webhook
   - Check the "Recent Invocations" section

3. **Verify Resend API Key:**
   - Make sure the API key is correctly set as a secret
   - Check Resend dashboard for any delivery issues

4. **Check Spam Folder:**
   - Emails from `onboarding@resend.dev` might go to spam
   - Consider setting up a custom domain in Resend

---

## Production Considerations

### Custom Email Domain
For better deliverability, add your own domain in Resend:
1. Add domain in Resend dashboard
2. Update DNS records
3. Update the `from` field in the Edge Function:
   ```typescript
   from: 'Study Hub Solutions <noreply@yourdomain.com>',
   ```

### Email Template
Consider using Resend's email templates for better formatting:
- Create templates in Resend dashboard
- Reference template ID in the Edge Function

### Rate Limiting
The free tier has limits:
- **Resend Free:** 3,000 emails/month, 100 emails/day
- Consider upgrading if you exceed these limits

---

## Quick Commands Reference

```bash
# Deploy function
supabase functions deploy send-contact-email

# View logs
supabase functions logs send-contact-email

# Update secret
supabase secrets set RESEND_API_KEY=new_key_here

# Test function locally
supabase functions serve send-contact-email
```

---

## Support

If you encounter issues:
- Check [Supabase Edge Functions docs](https://supabase.com/docs/guides/functions)
- Check [Resend documentation](https://resend.com/docs)
- Review function logs for errors
