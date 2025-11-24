import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/toaster'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { useThemeStore } from '@/store/theme'

// Pages
import { Home } from '@/pages/Home'
import { Services } from '@/pages/Services'
import Projects from '@/pages/Projects'
import { Demos } from '@/pages/Demos'
import { Blog } from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { Booking } from '@/pages/Booking'
import { FAQ } from '@/pages/FAQ'
import { Testimonials } from '@/pages/Testimonials'

function App() {
  const { setTheme } = useThemeStore()

  useEffect(() => {
    // Force light theme on mount
    setTheme(false)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
