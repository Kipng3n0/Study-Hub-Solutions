import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Clock, TrendingUp, Code, FileText, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const demoCategories = [
  { name: 'All', count: 7 },
  { name: 'Web Projects', count: 1 },
  { name: 'Calculators', count: 2 },
  { name: 'Productivity', count: 2 },
  { name: 'Educational', count: 2 },
]

export function Demos() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [gpa, setGpa] = useState({ current: '', target: '', credits: '' })
  const [pomodoroTime, setPomodoroTime] = useState(25)
  const [isRunning, setIsRunning] = useState(false)

  const calculateGPA = () => {
    const current = parseFloat(gpa.current)
    const target = parseFloat(gpa.target)
    const credits = parseFloat(gpa.credits)
    
    if (current && target && credits) {
      const required = ((target * (credits + 1)) - (current * credits))
      return required.toFixed(2)
    }
    return null
  }

  const demos = [
    {
      icon: Calculator,
      title: 'GPA Calculator',
      description: 'Calculate what grade you need to achieve your target GPA',
      category: 'Calculators',
      component: (
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Current GPA</label>
            <Input
              type="number"
              step="0.01"
              placeholder="3.5"
              value={gpa.current}
              onChange={(e) => setGpa({ ...gpa, current: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Target GPA</label>
            <Input
              type="number"
              step="0.01"
              placeholder="3.8"
              value={gpa.target}
              onChange={(e) => setGpa({ ...gpa, target: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Completed Credits</label>
            <Input
              type="number"
              placeholder="60"
              value={gpa.credits}
              onChange={(e) => setGpa({ ...gpa, credits: e.target.value })}
            />
          </div>
          {calculateGPA() && (
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground">You need to score:</p>
              <p className="text-3xl font-bold text-primary">{calculateGPA()}</p>
              <p className="text-sm text-muted-foreground">in your next course</p>
            </div>
          )}
        </div>
      ),
    },
    {
      icon: Clock,
      title: 'Pomodoro Timer',
      description: 'Stay focused with the Pomodoro Technique timer',
      category: 'Productivity',
      component: (
        <div className="space-y-4 text-center">
          <div className="text-6xl font-bold">{pomodoroTime}:00</div>
          <div className="flex gap-2 justify-center">
            <Button onClick={() => setIsRunning(!isRunning)}>
              {isRunning ? 'Pause' : 'Start'}
            </Button>
            <Button variant="outline" onClick={() => setPomodoroTime(25)}>
              Reset
            </Button>
          </div>
          <div className="flex gap-2 justify-center">
            <Button variant="secondary" size="sm" onClick={() => setPomodoroTime(25)}>
              25 min
            </Button>
            <Button variant="secondary" size="sm" onClick={() => setPomodoroTime(15)}>
              15 min
            </Button>
            <Button variant="secondary" size="sm" onClick={() => setPomodoroTime(5)}>
              5 min
            </Button>
          </div>
        </div>
      ),
    },
    {
      icon: TrendingUp,
      title: 'Grade Predictor',
      description: 'Predict your final grade based on current performance',
      category: 'Calculators',
      component: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Enter your current scores to predict your final grade
          </p>
          <div className="space-y-2">
            <Input placeholder="Midterm Score (%)" type="number" />
            <Input placeholder="Assignment Average (%)" type="number" />
            <Input placeholder="Quiz Average (%)" type="number" />
          </div>
          <Button className="w-full">Calculate Prediction</Button>
        </div>
      ),
    },
    {
      icon: FileText,
      title: 'Citation Generator',
      description: 'Generate citations in APA, MLA, or Chicago style',
      category: 'Educational',
      component: (
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">APA</Button>
            <Button variant="outline" size="sm">MLA</Button>
            <Button variant="outline" size="sm">Chicago</Button>
          </div>
          <Input placeholder="Author Name" />
          <Input placeholder="Title" />
          <Input placeholder="Year" type="number" />
          <Button className="w-full">Generate Citation</Button>
        </div>
      ),
    },
    {
      icon: Code,
      title: 'Code Formatter',
      description: 'Format and beautify your code instantly',
      category: 'Educational',
      component: (
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">JavaScript</Button>
            <Button variant="outline" size="sm">Python</Button>
            <Button variant="outline" size="sm">Java</Button>
          </div>
          <textarea
            className="w-full h-32 p-2 border rounded-md"
            placeholder="Paste your code here..."
          />
          <Button className="w-full">Format Code</Button>
        </div>
      ),
    },
    {
      icon: Zap,
      title: 'Unit Converter',
      description: 'Convert between different units quickly',
      category: 'Productivity',
      component: (
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Length</Button>
            <Button variant="outline" size="sm">Weight</Button>
            <Button variant="outline" size="sm">Temperature</Button>
          </div>
          <Input placeholder="Value" type="number" />
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="From" />
            <Input placeholder="To" />
          </div>
          <Button className="w-full">Convert</Button>
        </div>
      ),
    },
    {
      icon: Code,
      title: 'E-Commerce Platform (Top Ascend Merchants)',
      description: 'Live e-commerce store demo hosted on your custom domain.',
      category: 'Web Projects',
      component: (
        <div className="space-y-4">
          <div className="aspect-video rounded-xl overflow-hidden border bg-muted">
            <img
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop"
              alt="E-commerce platform preview"
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>Browse products with clean, responsive UI</li>
            <li>Shopping cart and checkout flow with payment integration</li>
            <li>Product details pages and organized categories</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              className="w-full sm:w-auto flex-1"
              onClick={() => window.open('https://topascendmerchants.co.ke', '_blank')}
            >
              View Live Store
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto flex-1"
              onClick={() => window.open('https://github.com/example/ecommerce-platform', '_blank')}
            >
              View Code
            </Button>
          </div>
        </div>
      ),
    },
  ]

  const filteredDemos = selectedCategory === 'All'
    ? demos
    : demos.filter(demo => demo.category === selectedCategory)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Live Demos</h1>
            <p className="text-xl text-muted-foreground">
              Try our interactive tools and demos designed to help students succeed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {demoCategories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">{category.count}</Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDemos.map((demo, index) => {
              const Icon = demo.icon
              return (
                <motion.div
                  key={demo.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{demo.title}</CardTitle>
                      <CardDescription>{demo.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {demo.component}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
