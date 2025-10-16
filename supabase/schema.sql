-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied'))
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  service TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed'))
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  author TEXT NOT NULL,
  read_time TEXT NOT NULL,
  published BOOLEAN DEFAULT false,
  slug TEXT UNIQUE NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS contacts_status_idx ON contacts(status);
CREATE INDEX IF NOT EXISTS bookings_date_idx ON bookings(date);
CREATE INDEX IF NOT EXISTS bookings_status_idx ON bookings(status);
CREATE INDEX IF NOT EXISTS blog_posts_published_idx ON blog_posts(published);
CREATE INDEX IF NOT EXISTS blog_posts_category_idx ON blog_posts(category);
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust based on your needs)

-- Contacts: Anyone can insert, only authenticated users can read
CREATE POLICY "Anyone can submit contact form" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Only authenticated users can view contacts" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');

-- Bookings: Anyone can insert, only authenticated users can read
CREATE POLICY "Anyone can create booking" ON bookings
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Only authenticated users can view bookings" ON bookings
  FOR SELECT USING (auth.role() = 'authenticated');

-- Blog posts: Anyone can read published posts, only authenticated users can manage
CREATE POLICY "Anyone can read published blog posts" ON blog_posts
  FOR SELECT USING (published = true OR auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can insert blog posts" ON blog_posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can update blog posts" ON blog_posts
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can delete blog posts" ON blog_posts
  FOR DELETE USING (auth.role() = 'authenticated');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for blog_posts updated_at
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample blog posts (optional)
INSERT INTO blog_posts (title, excerpt, content, image, category, author, read_time, published, slug) VALUES
  (
    'Getting Started with React and TypeScript',
    'Learn how to set up a modern React project with TypeScript and best practices for type-safe development',
    'Full content here...',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    'Web Development',
    'John Doe',
    '5 min read',
    true,
    'getting-started-react-typescript'
  ),
  (
    'Building Scalable APIs with Node.js',
    'Explore architectural patterns and best practices for creating robust and scalable backend services',
    'Full content here...',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    'Web Development',
    'Jane Smith',
    '8 min read',
    true,
    'building-scalable-apis-nodejs'
  ),
  (
    'Machine Learning Basics for Beginners',
    'An introduction to machine learning concepts, algorithms, and practical applications',
    'Full content here...',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    'AI/ML',
    'Alex Johnson',
    '10 min read',
    true,
    'machine-learning-basics-beginners'
  ),
  (
    'Mobile App Development with React Native',
    'Build cross-platform mobile applications using React Native and modern development tools',
    'Full content here...',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    'Mobile',
    'Sarah Williams',
    '7 min read',
    true,
    'mobile-app-development-react-native'
  ),
  (
    'Data Visualization with D3.js',
    'Create stunning interactive data visualizations using D3.js and modern web technologies',
    'Full content here...',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    'Data Science',
    'Michael Brown',
    '6 min read',
    true,
    'data-visualization-d3js'
  ),
  (
    'Career Tips for Software Developers',
    'Essential advice for advancing your career in software development and tech industry',
    'Full content here...',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    'Career Tips',
    'Emily Davis',
    '4 min read',
    true,
    'career-tips-software-developers'
  )
ON CONFLICT (slug) DO NOTHING;
