import { Bell, Calendar, FileText, Globe2, Keyboard } from 'lucide-react'

import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'

const features = [
  {
    Icon: FileText,
    name: 'Save your files',
    description: 'We automatically save your files as you type so you never lose progress.',
    href: '/services#assignments',
    cta: 'Learn more',
    background: (
      <img
        className="absolute -right-20 -top-20 opacity-60"
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
        alt="Students collaborating on laptops"
      />
    ),
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    Icon: Keyboard,
    name: 'Full text search',
    description: 'Search through all your notes, projects, and assignments in one place.',
    href: '/projects',
    cta: 'View projects',
    background: (
      <img
        className="absolute -right-20 -top-20 opacity-60"
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
        alt="Code editor on a laptop"
      />
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
  },
  {
    Icon: Globe2,
    name: 'Multilingual support',
    description: 'Get help and resources in over 100+ languages for global learners.',
    href: '/about',
    cta: 'About us',
    background: (
      <img
        className="absolute -right-20 -top-20 opacity-60"
        src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&h=400&fit=crop"
        alt="World map representing global reach"
      />
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
  },
  {
    Icon: Calendar,
    name: 'Smart scheduling',
    description: 'Use the calendar to plan sessions, deadlines, and study blocks.',
    href: '/booking',
    cta: 'Book session',
    background: (
      <img
        className="absolute -right-20 -top-20 opacity-60"
        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop"
        alt="Calendar and planner on a desk"
      />
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: Bell,
    name: 'Smart notifications',
    description:
      'Get notified when sessions are starting, assignments are due, or projects are updated.',
    href: '/faq',
    cta: 'View FAQ',
    background: (
      <img
        className="absolute -right-20 -top-20 opacity-60"
        src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&h=400&fit=crop"
        alt="Phone with notifications"
      />
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
  },
]

function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  )
}

export { BentoDemo }
