import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Code,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Database,
  Globe,
  BarChart,
  Cpu,
  FileCode,
  Search,
  Bug,
  FileText,
  Users,
  Video,
  Calendar,
  Award,
  DollarSign,
  Clock,
  Shield
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projectServices = [
  { icon: Globe, title: 'Web Development', description: 'Full-stack web applications with modern frameworks' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Native and cross-platform mobile solutions' },
  { icon: BarChart, title: 'Data Analysis', description: 'Data visualization and statistical analysis' },
  { icon: Database, title: 'Database Design', description: 'Efficient database architecture and optimization' },
  { icon: Cpu, title: 'API Integration', description: 'RESTful and GraphQL API development' },
  { icon: FileCode, title: 'Custom Software', description: 'Tailored software solutions for your needs' },
]

const assignmentServices = [
  { icon: Search, title: 'Code Review', description: 'Thorough analysis and improvement suggestions' },
  { icon: Bug, title: 'Debugging', description: 'Identify and fix errors in your code' },
  { icon: FileText, title: 'Documentation', description: 'Professional code documentation and comments' },
  { icon: BookOpen, title: 'Research Assistance', description: 'Help with academic research and citations' },
]

const tutoringServices = [
  { icon: Users, title: 'One-on-One Sessions', description: 'Personalized attention for your learning needs' },
  { icon: Video, title: 'Online Tutoring', description: 'Flexible remote learning sessions' },
  { icon: Calendar, title: 'Exam Preparation', description: 'Focused prep for upcoming tests' },
  { icon: Award, title: 'Long-term Mentorship', description: 'Ongoing guidance throughout your studies' },
]

const pricingPlans = [
  {
    name: 'Quick Help',
    price: '$49',
    period: 'per hour',
    description: 'Perfect for quick questions and minor assistance',
    features: [
      'Code review and debugging',
      'Concept clarification',
      'Assignment guidance',
      'Email support',
      'Response within 24 hours',
    ],
    popular: false,
  },
  {
    name: 'Project Package',
    price: '$299',
    period: 'per project',
    description: 'Comprehensive support for complete projects',
    features: [
      'Full project development',
      'Code documentation',
      'Testing and debugging',
      'Live demo setup',
      'Source code delivery',
      'Priority support',
      '2 weeks of revisions',
    ],
    popular: true,
  },
  {
    name: 'Tutoring Package',
    price: '$199',
    period: '5 sessions',
    description: 'Regular tutoring for consistent progress',
    features: [
      '5 one-hour sessions',
      'Personalized learning plan',
      'Practice materials',
      'Progress tracking',
      'Flexible scheduling',
      'Session recordings',
      'Email support between sessions',
    ],
    popular: false,
  },
]

const subjects = [
  { name: 'Python', level: 'Expert' },
  { name: 'JavaScript/TypeScript', level: 'Expert' },
  { name: 'React/Next.js', level: 'Expert' },
  { name: 'Node.js', level: 'Expert' },
  { name: 'Java', level: 'Advanced' },
  { name: 'C++', level: 'Advanced' },
  { name: 'SQL/NoSQL', level: 'Expert' },
  { name: 'Data Structures', level: 'Expert' },
  { name: 'Algorithms', level: 'Expert' },
  { name: 'Machine Learning', level: 'Advanced' },
  { name: 'Web Design', level: 'Expert' },
  { name: 'Mobile Development', level: 'Advanced' },
]

const guarantees = [
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'We ensure high-quality work that meets academic standards',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Your projects and assignments delivered when promised',
  },
  {
    icon: DollarSign,
    title: 'Money-Back Promise',
    description: 'Not satisfied? Get a full refund within 7 days',
  },
]

export function Services() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive academic support designed to help you succeed in every aspect of your studies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Help Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Project Help</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Expert assistance with programming projects across multiple technologies and platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {projectServices.map((service, index) => {
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
                      <Icon className="h-10 w-10 text-primary mb-2" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Complete project development',
                  'Clean, documented code',
                  'Testing and debugging',
                  'Live demo deployment',
                  'Source code with comments',
                  'Technical documentation',
                  'Video walkthrough',
                  'Post-delivery support',
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Assignment Support Section */}
      <section id="assignments" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Assignment Support</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Step-by-step guidance to help you understand and complete your assignments successfully
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {assignmentServices.map((service, index) => {
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
                    <CardHeader className="text-center">
                      <Icon className="h-10 w-10 text-primary mx-auto mb-2" />
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Subjects We Cover</CardTitle>
              <CardDescription>Our expertise spans across multiple programming languages and technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {subjects.map((subject) => (
                  <div key={subject.name} className="flex flex-col">
                    <span className="font-medium">{subject.name}</span>
                    <Badge variant="secondary" className="w-fit mt-1">{subject.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tutoring Services Section */}
      <section id="tutoring" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Tutoring Services</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Personalized one-on-one tutoring to help you master concepts and excel in your courses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tutoringServices.map((service, index) => {
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
                    <CardHeader className="text-center">
                      <Icon className="h-10 w-10 text-primary mx-auto mb-2" />
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {[
                    'Book a session at your convenient time',
                    'Share your learning goals and challenges',
                    'Join the video call at scheduled time',
                    'Interactive learning with screen sharing',
                    'Receive practice materials and resources',
                    'Track your progress over time',
                  ].map((step, index) => (
                    <li key={step} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Session Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Personalized learning pace',
                    'Interactive problem-solving',
                    'Real-time doubt clarification',
                    'Practice exercises and homework',
                    'Exam preparation strategies',
                    'Career guidance and tips',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that best fits your needs. All plans include our quality guarantee
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                  <CardHeader>
                    {plan.popular && (
                      <Badge className="w-fit mb-2">Most Popular</Badge>
                    )}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/booking">
                      <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon
              return (
                <motion.div
                  key={guarantee.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center">
                    <CardHeader>
                      <Icon className="h-12 w-12 text-primary mx-auto mb-2" />
                      <CardTitle className="text-xl">{guarantee.title}</CardTitle>
                      <CardDescription>{guarantee.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
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
            className="bg-gradient-to-r from-[#111827] to-[#0f766e] rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Book your free 15-minute consultation to discuss your needs and find the perfect solution
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
