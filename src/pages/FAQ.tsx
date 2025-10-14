import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, HelpCircle, BookOpen, CreditCard, Clock, Shield, Users } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

const categories = [
  { id: 'all', name: 'All Questions', icon: HelpCircle },
  { id: 'services', name: 'Services', icon: BookOpen },
  { id: 'pricing', name: 'Pricing', icon: CreditCard },
  { id: 'booking', name: 'Booking', icon: Clock },
  { id: 'security', name: 'Security', icon: Shield },
  { id: 'support', name: 'Support', icon: Users },
]

const faqs = [
  {
    category: 'services',
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of services including project help (web development, mobile apps, data analysis), assignment support (code review, debugging, documentation), and tutoring services (one-on-one sessions, exam preparation, mentorship programs).',
  },
  {
    category: 'services',
    question: 'Do you help with all programming languages?',
    answer: 'Yes! Our team has expertise in a wide range of programming languages including Python, JavaScript, Java, C++, C#, Ruby, PHP, and many more. We also work with various frameworks and technologies.',
  },
  {
    category: 'services',
    question: 'Can you help with urgent assignments?',
    answer: 'Yes, we offer expedited services for urgent assignments. Please contact us with your deadline, and we\'ll do our best to accommodate your needs. Rush services may incur additional fees.',
  },
  {
    category: 'pricing',
    question: 'How much do your services cost?',
    answer: 'Our pricing varies based on the complexity of the project, urgency, and type of service required. We offer competitive rates starting from $30/hour for tutoring sessions. Contact us for a custom quote based on your specific needs.',
  },
  {
    category: 'pricing',
    question: 'Do you offer student discounts?',
    answer: 'Yes! We offer a 10% discount for students with valid student ID. We also have package deals for long-term mentorship programs and bulk sessions.',
  },
  {
    category: 'pricing',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments. Payment is typically required upfront for new clients, with flexible payment plans available for larger projects.',
  },
  {
    category: 'booking',
    question: 'How do I book a session?',
    answer: 'You can book a session through our online booking system on the Booking page. Simply select your desired service, choose a date and time, and provide your contact information. You\'ll receive a confirmation email within 24 hours.',
  },
  {
    category: 'booking',
    question: 'Can I reschedule or cancel a booking?',
    answer: 'Yes, you can reschedule or cancel a booking up to 24 hours before the scheduled time without any penalty. Cancellations made less than 24 hours in advance may incur a 50% cancellation fee.',
  },
  {
    category: 'booking',
    question: 'What is your availability?',
    answer: 'We operate Monday through Friday, 9 AM to 6 PM PST. However, we can accommodate sessions outside these hours for urgent requests or different time zones. Please contact us to discuss special scheduling needs.',
  },
  {
    category: 'security',
    question: 'Is my information kept confidential?',
    answer: 'Absolutely! We take privacy and confidentiality very seriously. All client information, project details, and communications are kept strictly confidential and protected by our privacy policy.',
  },
  {
    category: 'security',
    question: 'Do you guarantee original work?',
    answer: 'Yes, all work we provide is 100% original and custom-created for each client. We use plagiarism detection tools to ensure originality and can provide plagiarism reports upon request.',
  },
  {
    category: 'security',
    question: 'How do you ensure academic integrity?',
    answer: 'We provide guidance, explanations, and support to help you learn and understand the material. Our goal is to help you develop your skills, not to do your work for you. We encourage ethical use of our services.',
  },
  {
    category: 'support',
    question: 'How can I contact support?',
    answer: 'You can reach our support team via email at support@studyhubsolutions.com, phone at +1 (555) 123-4567, or through our contact form. We typically respond within 24 hours.',
  },
  {
    category: 'support',
    question: 'Do you offer revisions?',
    answer: 'Yes, we offer free revisions within 7 days of project delivery if the work doesn\'t meet the original requirements. We\'re committed to your satisfaction and will work with you until you\'re happy with the results.',
  },
  {
    category: 'support',
    question: 'What if I\'m not satisfied with the service?',
    answer: 'Your satisfaction is our priority. If you\'re not satisfied with our service, please contact us immediately. We offer a satisfaction guarantee and will work to resolve any issues or provide a refund if necessary.',
  },
]

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions about our services
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search questions..."
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
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background hover:bg-muted'
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredFaqs.length} of {faqs.length} questions
            </p>
          </div>

          {filteredFaqs.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <HelpCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-xl text-muted-foreground">No questions found matching your search</p>
                <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or category filter</p>
              </CardContent>
            </Card>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-start gap-3 text-left">
                        <Badge variant="secondary" className="mt-1">
                          {categories.find((c) => c.id === faq.category)?.name}
                        </Badge>
                        <span className="font-semibold">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          )}

          {/* Still have questions? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Still have questions?</CardTitle>
                <CardDescription>
                  Can't find the answer you're looking for? Our support team is here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Contact Support
                  </a>
                  <a
                    href="/booking"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    Book a Session
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
