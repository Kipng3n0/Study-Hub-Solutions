import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
    rating: 4.5
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
    rating: 4
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
  },
  {
    name: 'Ryan O\'Connor',
    role: 'Cybersecurity Student',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop',
    content: 'The network security project guidance was exceptional. They helped me understand complex security protocols and implement them correctly.',
    rating: 5
  },
  {
    name: 'Lisa Wang',
    role: 'Machine Learning Researcher',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
    content: 'Their expertise in machine learning algorithms saved me months of research. The neural network implementation was flawless.',
    rating: 5
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop',
    content: 'The MERN stack project they built for my portfolio was incredible. It helped me land interviews at top tech companies.',
    rating: 4.5
  }
]

export function Testimonials() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Student Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Hear from students who have achieved their academic goals with Study Hub Solutions. 
              Real testimonials from real students who have experienced our exceptional tutoring and project assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full object-cover"
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
                    <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Start your journey to academic excellence today. Get personalized tutoring, 
              project assistance, and mentorship from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Get Started Today
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                View Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
