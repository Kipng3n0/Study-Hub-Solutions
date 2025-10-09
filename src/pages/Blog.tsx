import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const categories = ['All', 'Web Development', 'Mobile', 'Data Science', 'AI/ML', 'Career Tips', 'Tutorials']

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up a modern React project with TypeScript and best practices for type-safe development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    category: 'Web Development',
    author: 'John Doe',
    date: '2024-03-15',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Explore architectural patterns and best practices for creating robust and scalable backend services',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    category: 'Web Development',
    author: 'Jane Smith',
    date: '2024-03-12',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Machine Learning Basics for Beginners',
    excerpt: 'An introduction to machine learning concepts, algorithms, and practical applications',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    category: 'AI/ML',
    author: 'Alex Johnson',
    date: '2024-03-10',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'Mobile App Development with React Native',
    excerpt: 'Build cross-platform mobile applications using React Native and modern development tools',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    category: 'Mobile',
    author: 'Sarah Williams',
    date: '2024-03-08',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Data Visualization with D3.js',
    excerpt: 'Create stunning interactive data visualizations using D3.js and modern web technologies',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: 'Data Science',
    author: 'Michael Brown',
    date: '2024-03-05',
    readTime: '6 min read',
  },
  {
    id: 6,
    title: 'Career Tips for Software Developers',
    excerpt: 'Essential advice for advancing your career in software development and tech industry',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    category: 'Career Tips',
    author: 'Emily Davis',
    date: '2024-03-01',
    readTime: '4 min read',
  },
]

export function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Resources</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tutorials, and tips to help you succeed in your learning journey
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No articles found matching your criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>{post.category}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
