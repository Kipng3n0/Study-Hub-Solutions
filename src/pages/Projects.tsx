import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const categories = ['All', 'Web Development', 'Mobile', 'Data Science', 'AI/ML', 'Backend', 'Frontend']

const technologies = ['All', 'React', 'Python', 'Node.js', 'Django', 'TypeScript', 'MongoDB', 'PostgreSQL']

const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with payment integration, admin dashboard, and inventory management',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    difficulty: 'Advanced',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Data Visualization Dashboard',
    description: 'Interactive analytics dashboard with real-time data processing and beautiful charts',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: 'Data Science',
    technologies: ['Python', 'D3.js', 'Flask', 'PostgreSQL'],
    difficulty: 'Intermediate',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Mobile Learning App',
    description: 'Cross-platform educational app with gamification, progress tracking, and offline support',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    category: 'Mobile',
    technologies: ['React Native', 'Firebase', 'Redux'],
    difficulty: 'Advanced',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'AI Chatbot Assistant',
    description: 'Intelligent chatbot using natural language processing for customer support',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'Flask'],
    difficulty: 'Advanced',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 5,
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates and team features',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    category: 'Web Development',
    technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io'],
    difficulty: 'Intermediate',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 6,
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with location-based forecasts and interactive maps',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'API'],
    difficulty: 'Beginner',
    demoLink: '#',
    githubLink: '#',
  },
]

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTech, setSelectedTech] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech)
    const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesTech && matchesDifficulty
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects Portfolio</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our collection of successful projects across various technologies and domains
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 border-b bg-muted/30">
        <div className="container mx-auto">
          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
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

            {/* Technology Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Technology</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Button
                    key={tech}
                    variant={selectedTech === tech ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTech(tech)}
                  >
                    {tech}
                  </Button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Difficulty</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No projects found matching your criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
                      <div className="flex items-center justify-between mb-2">
                        <Badge>{project.category}</Badge>
                        <Badge variant="secondary">{project.difficulty}</Badge>
                      </div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="default" className="flex-1" asChild>
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                        <Button variant="outline" className="flex-1" asChild>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
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
