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
    '<h2>Why TypeScript with React?</h2><p>TypeScript brings static typing to JavaScript, making your React applications more maintainable and easier to debug. By catching type-related errors during development, you can prevent many common bugs before they reach production.</p><h2>Setting Up Your Project</h2><p>To get started, create a new React project with TypeScript using Create React App:</p><pre><code>npx create-react-app my-app --template typescript
cd my-app
npm start</code></pre><h2>TypeScript with React Components</h2><p>Here\'s how to define props and state with TypeScript:</p><pre><code>interface UserProps {
  name: string;
  age: number;
  isAdmin?: boolean;
}

const UserProfile: React.FC<UserProps> = ({ name, age, isAdmin = false }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      {isAdmin && <p>Admin User</p>}
    </div>
  );
};</code></pre><h2>Best Practices</h2><ul><li>Always define interfaces for your component props</li><li>Use TypeScript with React hooks</li><li>Leverage TypeScript''s utility types</li><li>Enable strict mode in tsconfig.json</li></ul>',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    'Web Development',
    'John Doe',
    '8 min read',
    true,
    'getting-started-react-typescript'
  ),
  (
    'Building Scalable APIs with Node.js',
    'Explore architectural patterns and best practices for creating robust and scalable backend services',
    '<h2>Introduction to API Design</h2><p>Building scalable APIs is crucial for modern web applications. A well-designed API can handle thousands of requests per second while maintaining performance and reliability.</p><h2>Key Principles</h2><ul><li>RESTful design principles</li><li>Proper error handling</li><li>Request validation</li><li>Rate limiting</li><li>Caching strategies</li></ul><h2>Example: Creating an Express.js API</h2><pre><code>const express = require(''express'');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get(''/api/users'', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: ''Server error'' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(''Something broke!'');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});</code></pre>',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    'Web Development',
    'Jane Smith',
    '10 min read',
    true,
    'building-scalable-apis-nodejs'
  ),
  (
    'Machine Learning Basics for Beginners',
    'An introduction to machine learning concepts, algorithms, and practical applications',
    '<h2>What is Machine Learning?</h2><p>Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.</p><h2>Types of Machine Learning</h2><ul><li><strong>Supervised Learning:</strong> The model learns from labeled training data</li><li><strong>Unsupervised Learning:</strong> The model finds patterns in unlabeled data</li><li><strong>Reinforcement Learning:</strong> The model learns by interacting with an environment</li></ul><h2>Basic Python Example with scikit-learn</h2><pre><code>from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Create and train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Evaluate
accuracy = model.score(X_test, y_test)
print(f"Model accuracy: {accuracy:.2f}")</code></pre>',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    'AI/ML',
    'Alex Johnson',
    '12 min read',
    true,
    'machine-learning-basics-beginners'
  ),
  (
    'Mobile App Development with React Native',
    'Build cross-platform mobile applications using React Native and modern development tools',
    '<h2>Why Choose React Native?</h2><p>React Native allows you to build native mobile apps using JavaScript and React. With a single codebase, you can target both iOS and Android platforms.</p><h2>Getting Started</h2><p>To create a new React Native project:</p><pre><code>npx react-native init MyApp
cd MyApp
npx react-native run-android
# or
npx react-native run-ios</code></pre><h2>Core Components</h2><ul><li><strong>View:</strong> The most fundamental component for building UIs</li><li><strong>Text:</strong> For displaying text</li><li><strong>Image:</strong> For displaying images</li><li><strong>ScrollView:</strong> For scrollable content</li><li><strong>FlatList:</strong> For efficient list rendering</li></ul><h2>Example: Building a Simple App</h2><pre><code>import React, { useState } from ''react'';
import { View, Text, Button, StyleSheet } from ''react-native'';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.count}>{count}</Text>
      <Button
        title="Increment"
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: ''center'',
    alignItems: ''center'',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  count: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default App;</code></pre>',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    'Mobile',
    'Sarah Williams',
    '10 min read',
    true,
    'mobile-app-development-react-native'
  ),
  (
    'Data Visualization with D3.js',
    'Create stunning interactive data visualizations using D3.js and modern web technologies',
    '<h2>Introduction to D3.js</h2><p>D3.js (Data-Driven Documents) is a powerful JavaScript library for creating dynamic, interactive data visualizations in the browser.</p><h2>Key Concepts</h2><ul><li>Selections and DOM manipulation</li><li>Data binding</li><li>Scales and axes</li><li>Transitions and animations</li><li>Interactivity</li></ul><h2>Example: Creating a Bar Chart</h2><pre><code>import * as d3 from ''d3'';

// Sample data
const data = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// Set up the SVG
const width = 500;
const height = 300;
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create scales
const x = d3.scaleBand()
  .domain(d3.range(data.length))
  .range([margin.left, width - margin.right])
  .padding(0.1);

const y = d3.scaleLinear()
  .domain([0, d3.max(data)]).nice()
  .range([height - margin.bottom, margin.top]);

// Add bars
svg.selectAll("rect")
  .data(data)
  .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d))
    .attr("width", x.bandwidth())
    .attr("height", d => y(0) - y(d))
    .attr("fill", "steelblue");

// Add axes
svg.append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x));

svg.append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y));</code></pre>',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
    'Data Science',
    'Michael Brown',
    '15 min read',
    true,
    'data-visualization-d3js'
  ),
  (
    'Career Tips for Software Developers',
    'Essential advice for advancing your career in software development and tech industry',
    '<h2>Introduction</h2><p>As a software developer, advancing your career requires a combination of technical skills, soft skills, and strategic planning.</p><h2>Key Takeaways</h2><ul><li>Stay up-to-date with industry trends and technologies</li><li>Develop a personal brand and online presence</li><li>Network and build relationships with peers and mentors</li><li>Pursue continuous learning and professional development</li><li>Set clear career goals and create a roadmap for success</li></ul><h2>Example: Creating a Career Roadmap</h2><pre><code>1. Identify your strengths and weaknesses
2. Set specific, measurable, achievable, relevant, and time-bound (SMART) goals
3. Break down large goals into smaller, manageable tasks
4. Create a schedule and stick to it
5. Continuously evaluate and adjust your roadmap as needed</code></pre>',
    'Full content here...',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    'Career Tips',
    'Emily Davis',
    '4 min read',
    true,
    'career-tips-software-developers'
  )
ON CONFLICT (slug) DO NOTHING;
