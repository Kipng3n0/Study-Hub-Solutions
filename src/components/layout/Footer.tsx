import { Link } from 'react-router-dom'
import { GraduationCap, Mail, Phone, MapPin, Twitter, Linkedin, Github, MessageCircle, Instagram } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Project Help', href: '/services#projects' },
    { name: 'Assignment Support', href: '/services#assignments' },
    { name: 'Tutoring Services', href: '/services#tutoring' },
    { name: 'Pricing', href: '/services#pricing' },
  ],
  resources: [
    { name: 'Projects Portfolio', href: '/projects' },
    { name: 'Live Demos', href: '/demos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/kipng3n0' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/Kipng3n0' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/19099627940' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/kipng.en.o' },
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Study Hub Solutions</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Empowering students with expert project help, assignment support, and personalized tutoring services. Your academic success is our mission.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@studyhubsolutions25.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (909) 9627940</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-muted-foreground/20 transition-all duration-300 hover:border-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </a>
                )
              })}
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Study Hub Solutions. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex space-x-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
