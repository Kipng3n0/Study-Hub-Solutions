import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Curated list of showcase projects
const fallbackProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart, and payment integration using Stripe.',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    difficulty: 'Advanced',
    demoLink: 'https://example-ecommerce-demo.com',
    githubLink: 'https://github.com/example/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Task Manager Pro',
    description: 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team features.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    category: 'Productivity',
    technologies: ['TypeScript', 'React', 'Firebase'],
    difficulty: 'Intermediate',
    demoLink: 'https://taskmanagerpro-demo.netlify.app',
    githubLink: 'https://github.com/example/task-manager-pro',
  },
  {
    id: 3,
    title: 'AI Image Generator',
    description: 'Generate stunning AI art using Stable Diffusion with custom prompts and style presets.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'React'],
    difficulty: 'Advanced',
    demoLink: 'https://ai-art-generator.vercel.app',
    githubLink: 'https://github.com/example/ai-image-generator',
  },
  {
    id: 4,
    title: 'Personal Finance Tracker',
    description: 'Track expenses, set budgets, and visualize your spending with interactive charts.',
    image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=800&h=600&fit=crop',
    category: 'Finance',
    technologies: ['Next.js', 'Tailwind CSS', 'Firebase'],
    difficulty: 'Intermediate',
    demoLink: 'https://finance-tracker-demo.vercel.app',
    githubLink: 'https://github.com/example/finance-tracker',
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'Find recipes based on ingredients you have, with nutritional information and step-by-step instructions.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    category: 'Food & Nutrition',
    technologies: ['React', 'Spoonacular API', 'Material-UI'],
    difficulty: 'Beginner',
    demoLink: 'https://recipe-finder-demo.netlify.app',
    githubLink: 'https://github.com/example/recipe-finder',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Plan workouts, track progress, and get personalized fitness recommendations.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    category: 'Health & Fitness',
    technologies: ['React Native', 'Firebase', 'Redux'],
    difficulty: 'Intermediate',
    demoLink: 'https://fitness-tracker-expo.vercel.app',
    githubLink: 'https://github.com/example/fitness-tracker',
  }
];

const categories = ['All', 'Web Development', 'Mobile', 'Data Science', 'AI/ML', 'Backend', 'Frontend']

const technologies = ['All', 'React', 'Python', 'Node.js', 'Django', 'TypeScript', 'MongoDB', 'PostgreSQL']

const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']


export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTech, setSelectedTech] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')

  const filteredProjects = fallbackProjects.filter(project => {
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
      
    const matchesCategory = selectedCategory === 'All' || 
      project.category === selectedCategory
      
    const matchesTech = selectedTech === 'All' || 
      project.technologies.some(tech => 
        tech.toLowerCase().includes(selectedTech.toLowerCase())
      )
      
    const matchesDifficulty = selectedDifficulty === 'All' || 
      project.difficulty === selectedDifficulty
      
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No projects found matching your criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id} 
                  className="group flex flex-col h-full hover:shadow-lg transition-all hover:scale-[1.02] duration-300 cursor-pointer"
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="flex-grow">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge variant="outline" className="mt-2">
                          {project.difficulty}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.demoLink, '_blank');
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.githubLink, '_blank');
                          }}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.githubLink, '_blank');
                        }}
                        className="inline-flex items-center text-sm hover:underline"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
