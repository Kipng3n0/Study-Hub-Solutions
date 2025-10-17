import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/lib/database.types'

const services = [
  'Project Help - Web Development',
  'Project Help - Mobile Apps',
  'Project Help - Data Analysis',
  'Assignment Support',
  'Code Review & Debugging',
  'One-on-One Tutoring',
  'Exam Preparation',
  'Mentorship Program',
]

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM',
]

export function Booking() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Insert booking data into Supabase
      const bookingData: Database['public']['Tables']['bookings']['Insert'] = {
        service: formData.service,
        date: formData.date,
        time: formData.time,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || null,
        status: 'pending'
      }

      const { error } = await supabase
        .from('bookings')
        .insert([bookingData])

      if (error) throw error

      toast({
        title: 'Booking confirmed!',
        description: "We'll send you a confirmation email shortly.",
      })

      setStep(4)
    } catch (error) {
      console.error('Error submitting booking:', error)
      toast({
        title: 'Booking failed',
        description: 'Please try again later or contact us directly.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceedToStep2 = formData.service && formData.date && formData.time
  const canProceedToStep3 = canProceedToStep2 && formData.name && formData.email && formData.phone

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Session</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a consultation with our expert team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= s
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > s ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm">Select Service</span>
              <span className="text-sm">Your Details</span>
              <span className="text-sm">Confirm</span>
            </div>
          </div>

          {step !== 4 ? (
            <Card>
              <CardHeader>
                <CardTitle>
                  {step === 1 && 'Select Service & Time'}
                  {step === 2 && 'Your Information'}
                  {step === 3 && 'Review & Confirm'}
                </CardTitle>
                <CardDescription>
                  {step === 1 && 'Choose the service you need and your preferred time'}
                  {step === 2 && 'Provide your contact information'}
                  {step === 3 && 'Review your booking details before confirming'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Service Selection */}
                  {step === 1 && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value: string) => handleChange('service', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Date</Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => handleChange('date', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="time">Time</Label>
                          <Select
                            value={formData.time}
                            onValueChange={(value: string) => handleChange('time', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button
                        type="button"
                        className="w-full"
                        onClick={() => setStep(2)}
                        disabled={!canProceedToStep2}
                      >
                        Continue
                      </Button>
                    </>
                  )}

                  {/* Step 2: Contact Information */}
                  {step === 2 && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Information (Optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about what you need help with..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                        />
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1"
                          onClick={() => setStep(1)}
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          className="flex-1"
                          onClick={() => setStep(3)}
                          disabled={!canProceedToStep3}
                        >
                          Continue
                        </Button>
                      </div>
                    </>
                  )}

                  {/* Step 3: Review & Confirm */}
                  {step === 3 && (
                    <>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-muted">
                          <h3 className="font-semibold mb-3">Booking Summary</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Service:</span>
                              <span className="font-medium">{formData.service}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Date:</span>
                              <span className="font-medium">
                                {new Date(formData.date).toLocaleDateString('en-US', {
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                })}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Time:</span>
                              <span className="font-medium">{formData.time}</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-muted">
                          <h3 className="font-semibold mb-3">Contact Information</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Name:</span>
                              <span className="font-medium">{formData.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Email:</span>
                              <span className="font-medium">{formData.email}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Phone:</span>
                              <span className="font-medium">{formData.phone}</span>
                            </div>
                          </div>
                        </div>

                        {formData.message && (
                          <div className="p-4 rounded-lg bg-muted">
                            <h3 className="font-semibold mb-2">Additional Information</h3>
                            <p className="text-sm text-muted-foreground">{formData.message}</p>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1"
                          onClick={() => setStep(2)}
                        >
                          Back
                        </Button>
                        <Button type="submit" className="flex-1" disabled={isSubmitting}>
                          {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                        </Button>
                      </div>
                    </>
                  )}
                </form>
              </CardContent>
            </Card>
          ) : (
            /* Success Message */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Card className="text-center">
                <CardContent className="pt-12 pb-12">
                  <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
                  <p className="text-muted-foreground mb-8">
                    We've sent a confirmation email to {formData.email}. We look forward to working with you!
                  </p>
                  <Button onClick={() => window.location.href = '/'}>
                    Return to Home
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
