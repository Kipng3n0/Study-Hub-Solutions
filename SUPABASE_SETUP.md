# Supabase Backend Setup Guide

This guide will help you set up Supabase as the backend for Study Hub Solutions.

## What Supabase Handles

-  **Contact Form**: Store and manage contact submissions
-  **Bookings**: Manage session bookings with status tracking
-  **Blog Posts**: Dynamic content management with CMS capabilities
-  **Database**: PostgreSQL database with Row Level Security
-  **Real-time**: Optional real-time subscriptions for live updates

## Step 1: Create a Supabase Project

1. Go to [Supabase](https://supabase.com)
2. Click **Start your project** and sign up/login
3. Click **New Project**
4. Fill in the project details:
   - **Name**: Study Hub Solutions (or your preferred name)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to your users
   - **Pricing Plan**: Free tier is sufficient to start
5. Click **Create new project** (setup takes ~2 minutes)

## Step 2: Get Your API Credentials

1. Once your project is ready, go to **Project Settings** (gear icon)
2. Click **API** in the left sidebar
3. Copy the following values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (under Project API keys)

## Step 3: Configure Environment Variables

1. Open your `.env` file (already created in project root)
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace with your actual values from Step 2.

## Step 4: Create Database Tables

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New query**
3. Copy the contents of `/supabase/schema.sql` from your project
4. Paste into the SQL Editor
5. Click **Run** (or press Ctrl/Cmd + Enter)

This will create:
- `contacts` table - for contact form submissions
- `bookings` table - for session bookings
- `blog_posts` table - for blog content
- Indexes for performance
- Row Level Security (RLS) policies
- Sample blog posts

## Step 5: Verify Tables Created

1. Go to **Table Editor** in the left sidebar
2. You should see three tables:
   - `contacts`
   - `bookings`
   - `blog_posts`
3. Click `blog_posts` to see the sample data

## Step 6: Restart Your Development Server

```bash
npm run dev
```

Environment variables are loaded at startup, so restart is required.

## Step 7: Test the Integration

### Test Contact Form
1. Navigate to `/contact`
2. Fill out and submit the form
3. Check Supabase dashboard → **Table Editor** → `contacts`
4. Your submission should appear there

### Test Booking System
1. Navigate to `/booking`
2. Complete the booking flow
3. Check **Table Editor** → `bookings`
4. Your booking should be saved with status "pending"

### Test Blog
1. Navigate to `/blog`
2. You should see the sample blog posts loaded from Supabase
3. Search and filter should work

## Row Level Security (RLS) Policies

The schema includes secure RLS policies:

### Contacts Table
-  **Anyone can INSERT** - Public form submissions
-  **Only authenticated users can SELECT** - View submissions

### Bookings Table
-  **Anyone can INSERT** - Public booking requests
-  **Only authenticated users can SELECT** - View bookings

### Blog Posts Table
-  **Anyone can SELECT published posts** - Public blog access
-  **Only authenticated users can INSERT/UPDATE/DELETE** - Content management

## Managing Your Data

### View Submissions (Contact & Bookings)

**Option 1: Supabase Dashboard**
- Go to **Table Editor**
- Select the table (`contacts` or `bookings`)
- View, filter, and export data

**Option 2: Build Admin Panel** (Future enhancement)
- Create authenticated admin routes
- Use Supabase Auth for login
- Query and display data in your app

### Manage Blog Posts

**Add New Post**:
```sql
INSERT INTO blog_posts (
  title, excerpt, content, image, category, 
  author, read_time, published, slug
) VALUES (
  'Your Post Title',
  'Brief excerpt...',
  'Full content here...',
  'https://image-url.com',
  'Web Development',
  'Your Name',
  '5 min read',
  true,
  'your-post-slug'
);
```

**Update Post**:
- Go to Table Editor → `blog_posts`
- Click on any cell to edit
- Changes save automatically

**Delete Post**:
- Table Editor → `blog_posts`
- Click the row → Delete button

## Email Notifications (Optional)

To send emails when forms are submitted, you can use Supabase Edge Functions:

### Option 1: Supabase Edge Function + Resend

1. Install Supabase CLI:
```bash
npm install -g supabase
```

2. Create Edge Function:
```bash
supabase functions new send-contact-email
```

3. Add email sending logic using [Resend](https://resend.com) or [SendGrid](https://sendgrid.com)

4. Add Database Trigger:
```sql
-- Trigger email when new contact is inserted
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'YOUR_EDGE_FUNCTION_URL',
    headers := jsonb_build_object('Content-Type', 'application/json'),
    body := jsonb_build_object(
      'name', NEW.name,
      'email', NEW.email,
      'subject', NEW.subject,
      'message', NEW.message
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_contact_created
  AFTER INSERT ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact();
```

### Option 2: Keep EmailJS

If you prefer simpler email setup, you can use EmailJS alongside Supabase:
- Supabase stores the data
- EmailJS sends the email
- Both happen in the form submission

## Database Backup

Supabase automatically backs up your database daily. To manually export:

1. Go to **Database** → **Backups**
2. Click **Download** on any backup
3. Or use SQL Editor to export specific tables

## Monitoring & Analytics

### View Activity
- **Database** → **Logs** - Query logs
- **API** → **Logs** - API request logs
- **Table Editor** - View record counts

### Set Up Webhooks (Optional)
- **Database** → **Webhooks**
- Get notified when data changes
- Integrate with Slack, Discord, etc.

## Troubleshooting

### "Missing Supabase environment variables" error
- Verify `.env` file exists and has correct values
- Restart dev server after changing `.env`
- Ensure variable names start with `VITE_`

### RLS policy errors (403 Forbidden)
- Check policies in **Authentication** → **Policies**
- For public forms, ensure INSERT is allowed for `anon` role
- For reading data, ensure proper authentication or adjust policies

### No blog posts showing
- Verify `published = true` for posts you want visible
- Check browser console for errors
- Verify Supabase URL and key are correct

### Data not saving
- Check browser console for errors
- Verify table names match exactly
- Check RLS policies allow the operation

## Security Best Practices

 **Never commit `.env` file** - Already gitignored
 **Use anon key for client** - It's safe, RLS protects data
 **Keep service role key secret** - Never expose in frontend
 **Enable RLS on all tables** - Already configured
 **Validate input** - Forms have validation
 **Add rate limiting** - Consider Supabase rate limits on free tier

## Upgrading to Production

When ready for production:

1. **Review RLS policies** - Ensure they match your security needs
2. **Set up custom domain** - In Project Settings
3. **Enable email auth** - For admin panel
4. **Add API rate limiting** - In Project Settings
5. **Monitor usage** - Check dashboard regularly
6. **Consider upgrading plan** - If you exceed free tier limits

## Free Tier Limits

Supabase free tier includes:
- 500 MB database space
- 1 GB file storage
- 2 GB bandwidth
- 50,000 monthly active users
- Unlimited API requests

Perfect for getting started!

## Need Help?

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord Community](https://discord.supabase.com)
- [GitHub Issues](https://github.com/supabase/supabase/issues)

## Next Steps

1.  Set up Supabase project
2.  Configure environment variables
3.  Run database schema
4.  Test all forms
5. 🔲 (Optional) Add email notifications
6. 🔲 (Optional) Build admin dashboard
7. 🔲 (Optional) Add authentication for team
8. 🔲 Deploy to production

You're all set! Your Study Hub Solutions app now has a powerful backend. 🚀
