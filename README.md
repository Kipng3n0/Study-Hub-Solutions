# Study Hub Solutions

A modern web application for educational services with integrated booking, contact forms, and blog functionality.

## 🚀 Features

- **Contact Form** - Submit inquiries directly to database
- **Booking System** - Schedule sessions with multi-step form
- **Blog Platform** - Dynamic content from Supabase CMS
- **Responsive Design** - Beautiful UI with TailwindCSS & shadcn/ui
- **Type Safety** - Full TypeScript support
- **Backend** - Powered by Supabase (PostgreSQL)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS + shadcn/ui components
- **Backend**: Supabase (PostgreSQL + REST API)
- **Animations**: Framer Motion
- **Form Management**: React Hook Form + Zod
- **Routing**: React Router v6

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Study-Hub-Solutions

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env and add your Supabase credentials
```

## ⚙️ Configuration

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Project Settings → API
3. Add to `.env`:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

4. Run the database schema:
   - Open SQL Editor in Supabase dashboard
   - Copy contents from `supabase/schema.sql`
   - Execute the query

📖 **Full setup guide**: See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)

## 🏃 Running the Application

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

Application runs on `http://localhost:5173`

## 📁 Project Structure

```
Study-Hub-Solutions/
├── src/
│   ├── components/     # Reusable UI components
│   │   └── ui/        # shadcn/ui components
│   ├── pages/         # Page components
│   │   ├── Home.tsx
│   │   ├── Contact.tsx
│   │   ├── Booking.tsx
│   │   ├── Blog.tsx
│   │   └── ...
│   ├── lib/           # Utilities and configs
│   │   ├── supabase.ts       # Supabase client
│   │   └── database.types.ts # TypeScript types
│   ├── hooks/         # Custom React hooks
│   ├── store/         # State management
│   └── App.tsx        # Root component
├── supabase/
│   └── schema.sql     # Database schema
├── .env               # Environment variables (gitignored)
├── .env.example       # Environment template
└── SUPABASE_SETUP.md  # Setup documentation
```

## 🗄️ Database Schema

### Tables

- **contacts** - Contact form submissions
  - id, created_at, name, email, subject, message, status

- **bookings** - Session bookings
  - id, created_at, service, date, time, name, email, phone, message, status

- **blog_posts** - Blog content
  - id, created_at, updated_at, title, excerpt, content, image, category, author, read_time, published, slug

All tables have Row Level Security (RLS) enabled for data protection.

## 🔐 Security

- ✅ Environment variables for sensitive data
- ✅ Row Level Security on all tables
- ✅ Type-safe API calls with TypeScript
- ✅ Input validation on all forms
- ✅ Anon key safe for client-side use

## 📊 Managing Data

### View Submissions
- Access Supabase Dashboard → Table Editor
- View contacts and bookings in real-time

### Manage Blog Posts
- Add/edit posts via Supabase Table Editor
- Or build a custom admin panel with Supabase Auth

## 🚢 Deployment

### Frontend Deployment

**Vercel** (Recommended):
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm run build
# Deploy the dist/ folder
```

Add environment variables in your hosting platform's settings.

### Backend
Supabase is already deployed! No additional backend deployment needed.

## 🔄 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 💬 Support

For issues and questions:
- Check [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
- Open an issue on GitHub
- Contact: studyhubsolutions96@gmail.com

## 🎯 Roadmap

- [ ] Email notifications for form submissions
- [ ] Admin dashboard for managing data
- [ ] User authentication
- [ ] Payment integration
- [ ] Real-time chat support
- [ ] Analytics dashboard

---

Built with ❤️ using React, TypeScript, and Supabase
