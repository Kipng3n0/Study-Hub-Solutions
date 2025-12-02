import { motion } from 'framer-motion'
import { Users, Target, Award, Heart, Lightbulb, Rocket } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest quality in every project and interaction',
  },
  {
    icon: Heart,
    title: 'Student Success',
    description: 'Your academic and professional growth is our top priority',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and teaching methodologies',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in working together to achieve the best results',
  },
]

const team = [
  {
    name: 'Alex Mwanzo',
    role: 'Founder & Lead Instructor',
    image: '/images/team/alex-mwanzo.jpg',
    expertise: ['Web Development', 'Software Architecture', 'AI/ML'],
  },
  {
    name: 'Ivan Pavlo',
    role: 'Senior Developer & Tutor',
    image: '/images/team/ivan-pavlo.jpg',
    expertise: ['Full-Stack Development', 'Mobile Apps', 'UI/UX'],
  },
  {
    name: 'Hillary Johnson',
    role: 'Data Science Specialist',
    image: '/images/team/hillary-johnson.jpg',
    expertise: ['Data Analysis', 'Machine Learning', 'Python'],
  },
  {
    name: 'Andrew Nzioka',
    role: 'Frontend Developer',
    image: '/images/team/andrew-nzioka.jpg',
    expertise: ['React', 'TypeScript', 'Modern CSS'],
  },
]

const milestones = [
  { year: '2020', title: 'Founded', description: 'Study Hub Solutions was established' },
  { year: '2021', title: '100+ Students', description: 'Reached our first major milestone' },
  { year: '2022', title: 'Expanded Team', description: 'Grew to a team of 10+ experts' },
  { year: '2023', title: '500+ Projects', description: 'Successfully completed 500+ projects' },
  { year: '2024', title: 'Global Reach', description: 'Serving students worldwide' },
]

export function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Empowering students to achieve their academic and professional goals through expert guidance and innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#111827]">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Study Hub Solutions, we're dedicated to bridging the gap between academic theory and practical application. We believe that every student deserves access to high-quality educational support and mentorship.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our team of experienced professionals works tirelessly to provide personalized assistance, helping students not just complete their assignments, but truly understand the concepts behind them.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#111827]">500+</div>
                  <div className="text-sm text-muted-foreground">Students Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#111827]">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#111827]">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#111827]">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#111827]">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#111827]">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <div className="text-2xl font-bold text-[#111827]">{milestone.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
