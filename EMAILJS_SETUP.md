# EmailJS Setup Guide

This guide will help you set up EmailJS to send email notifications for contact and booking forms.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your **studyhubsolutions96@gmail.com** account
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Templates

You need to create **4 email templates**:

### Template 1: Contact Form Notification (to Study Hub Solutions)

**Template Name:** `contact_notification`

**Subject:** `New Contact Form Submission - {{subject}}`

**Body:**
```
Hello Study Hub Solutions Team,

You have received a new contact form submission:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This is an automated notification from your website.
```

**Template Variables:**
- `to_email` (studyhubsolutions96@gmail.com)
- `from_name`
- `from_email`
- `subject`
- `message`

Copy the **Template ID** → Use for `VITE_EMAILJS_CONTACT_TEMPLATE_ID`

---

### Template 2: Contact Form Confirmation (to User)

**Template Name:** `contact_confirmation`

**Subject:** `Thank you for contacting Study Hub Solutions`

**Body:**
```
Hello {{to_name}},

Thank you for reaching out to Study Hub Solutions!

We have received your message regarding: {{subject}}

Our team will review your inquiry and get back to you within 24 hours at {{to_email}}.

Best regards,
Study Hub Solutions Team
studyhubsolutions96@gmail.com
```

**Template Variables:**
- `to_email`
- `to_name`
- `subject`

Copy the **Template ID** → Use for `VITE_EMAILJS_CONTACT_CONFIRMATION_TEMPLATE_ID`

---

### Template 3: Booking Notification (to Study Hub Solutions)

**Template Name:** `booking_notification`

**Subject:** `New Booking Request - {{service}}`

**Body:**
```
Hello Study Hub Solutions Team,

You have received a new booking request:

Service: {{service}}
Date: {{date}}
Time: {{time}}

Client Details:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Additional Message:
{{message}}

---
This is an automated notification from your website.
```

**Template Variables:**
- `to_email` (studyhubsolutions96@gmail.com)
- `service`
- `date`
- `time`
- `from_name`
- `from_email`
- `phone`
- `message`

Copy the **Template ID** → Use for `VITE_EMAILJS_BOOKING_TEMPLATE_ID`

---

### Template 4: Booking Confirmation (to User)

**Template Name:** `booking_confirmation`

**Subject:** `Booking Confirmed - Study Hub Solutions`

**Body:**
```
Hello {{to_name}},

Your booking with Study Hub Solutions has been confirmed!

Booking Details:
Service: {{service}}
Date: {{date}}
Time: {{time}}

We will send you a reminder 24 hours before your session. If you need to reschedule or have any questions, please contact us at studyhubsolutions96@gmail.com.

We look forward to helping you succeed!

Best regards,
Study Hub Solutions Team
studyhubsolutions96@gmail.com
+1 (909) 962-7940
```

**Template Variables:**
- `to_email`
- `to_name`
- `service`
- `date`
- `time`

Copy the **Template ID** → Use for `VITE_EMAILJS_BOOKING_CONFIRMATION_TEMPLATE_ID`

---

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it → Use for `VITE_EMAILJS_PUBLIC_KEY`

## Step 5: Update .env File

Update your `.env` file with the values you copied:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_CONTACT_CONFIRMATION_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_BOOKING_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_BOOKING_CONFIRMATION_TEMPLATE_ID=template_xxxxxxx
```

## Step 6: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## Step 7: Test

1. Go to your Contact page
2. Fill out and submit the form
3. Check:
   - Your Supabase database (data should be saved)
   - studyhubsolutions96@gmail.com inbox (notification email)
   - The user's email inbox (confirmation email)

## Troubleshooting

### Emails not sending?

1. Check browser console for errors
2. Verify all environment variables are set correctly
3. Make sure you've connected your Gmail account in EmailJS
4. Check EmailJS dashboard for error logs
5. Verify template IDs match exactly

### Gmail blocking emails?

1. Enable "Less secure app access" in Gmail settings
2. Or use EmailJS's SMTP service instead

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- Unlimited templates

If you need more, consider upgrading to a paid plan.
