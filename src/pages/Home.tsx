import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Code, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  CheckCircle2,
  Star
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const services = [
  {
    icon: Code,
    title: 'Project Help',
    description: 'Expert assistance with web development, programming, data analysis, and custom software solutions.',
    features: ['Web Development', 'Mobile Apps', 'Data Analysis', 'API Integration'],
    link: '/services#projects'
  },
  {
    icon: BookOpen,
    title: 'Assignment Support',
    description: 'Step-by-step guidance, code review, debugging, and comprehensive research assistance.',
    features: ['Code Review', 'Debugging', 'Documentation', 'Research Help'],
    link: '/services#assignments'
  },
  {
    icon: GraduationCap,
    title: 'Tutoring Services',
    description: 'One-on-one sessions, exam preparation, concept teaching, and long-term mentorship programs.',
    features: ['One-on-One', 'Exam Prep', 'Mentorship', 'Practice Problems'],
    link: '/services#tutoring'
  },
]

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack online store with payment integration and admin dashboard',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: '/projects/ecommerce',
    category: 'Web Development'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive analytics dashboard with real-time data processing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['Python', 'D3.js', 'Flask', 'PostgreSQL'],
    demoLink: '/projects/dashboard',
    category: 'Data Science'
  },
  {
    title: 'Mobile Learning App',
    description: 'Cross-platform educational app with gamification features',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    technologies: ['React Native', 'Firebase', 'Redux'],
    demoLink: '/projects/mobile-app',
    category: 'Mobile Development'
  },
]

const statistics = [
  { icon: Users, value: '500+', label: 'Students Helped' },
  { icon: TrendingUp, value: '95%', label: 'Success Rate' },
  { icon: Code, value: '1000+', label: 'Projects Completed' },
  { icon: Award, value: '4.9/5', label: 'Average Rating' },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Computer Science Student',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    content: 'Study Hub Solutions helped me ace my final project! The tutoring was exceptional and the guidance was exactly what I needed.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Engineering Major',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    content: 'The project help I received was outstanding. They explained complex concepts in a way that was easy to understand.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Science Student',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    content: 'Best investment in my education! The one-on-one tutoring sessions were incredibly valuable and helped me improve my grades significantly.',
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'Web Development Bootcamp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    content: 'I was struggling with React and JavaScript. Their mentorship program helped me land my first developer job within 3 months!',
    rating: 5
  },
  {
    name: 'Jessica Martinez',
    role: 'MBA Student',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
    content: 'The data analysis project they helped me with became the highlight of my portfolio. Excellent attention to detail and communication.',
    rating: 5
  },
  {
    name: 'Alex Thompson',
    role: 'Software Engineering Student',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    content: 'From debugging my code to explaining algorithms, they made complex topics simple. My grades improved from C to A!',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Information Systems Major',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    content: 'The mobile app development project exceeded my expectations. Professional quality work delivered on time.',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Computer Engineering',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop',
    content: 'Their exam preparation sessions were incredibly helpful. I passed my algorithms course with flying colors!',
    rating: 5
  },
  {
    name: 'Maria Garcia',
    role: 'Business Analytics Student',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    content: 'The Python data visualization project they created for me was exactly what I needed for my thesis. Highly recommended!',
    rating: 5
  }
]

const blogPosts = [
  {
    title: '10 Essential Python Libraries for Data Science',
    excerpt: 'Discover the must-know Python libraries that will supercharge your data science projects...',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop',
    category: 'Programming',
    date: '2025-10-05',
    readTime: '5 min read'
  },
  {
    title: 'Mastering React Hooks: A Complete Guide',
    excerpt: 'Learn how to use React Hooks effectively to build modern, efficient web applications...',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    category: 'Web Development',
    date: '2025-10-03',
    readTime: '8 min read'
  },
  {
    title: 'Study Tips: How to Ace Your Programming Exams',
    excerpt: 'Proven strategies and techniques to help you excel in your programming courses...',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
    category: 'Study Tips',
    date: '2025-10-01',
    readTime: '6 min read'
  },
]

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10" />
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4" variant="secondary">
              Your Academic Success Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
              Master Your Academics with Expert Guidance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional project help, assignment support, and personalized tutoring services to help you excel in your studies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="text-lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="text-lg">
                  View Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive academic support tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to={service.link}>
                        <Button variant="outline" className="w-full">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge className="w-fit mb-2">{project.category}</Badge>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    <Link to={project.demoLink}>
                      <Button variant="outline" className="w-full">
                        View Demo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Students Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from students we've helped succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button size="lg" variant="outline">
                View All Testimonials <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tips, tutorials, and insights to help you succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/blog">
                      <Button variant="ghost" className="w-full">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" variant="outline">
                View All Posts <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#111827] to-[#b45309] rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Book your free consultation today and discover how we can help you achieve your academic goals
            </p>
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="text-lg">
                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
  
}
