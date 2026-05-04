import React, { useState } from 'react';
import { SectionHeading, Button, Card } from '@/src/components/UI';
import { MapPin, Phone, Mail, MessageSquare, Clock, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    location: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-concrete border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <SectionHeading 
             centered
             title="Request a Structural Consultation" 
             subtitle="Tell us about your project requirements and our senior engineering team will provide a technical response within 24-48 hours."
           />
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-12">
               <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="bg-navy p-4 text-accent shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-navy mb-2">Our Office</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        123 Engineering Blvd, Suite 400<br />
                        Business District, City 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="bg-navy p-4 text-accent shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-navy mb-2">Direct Contact</h4>
                      <p className="text-gray-600 text-sm leading-relaxed font-bold">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="bg-navy p-4 text-accent shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-navy mb-2">Email Inquiry</h4>
                      <p className="text-gray-600 text-sm leading-relaxed font-bold">
                        info@strudesign.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="bg-navy p-4 text-accent shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-navy mb-2">Business Hours</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat - Sun: By Appointment
                      </p>
                    </div>
                  </div>
               </div>

               <div className="p-8 bg-steel text-white border-l-8 border-accent">
                  <h4 className="text-lg font-black uppercase tracking-tighter mb-4">Urgent Consultation?</h4>
                  <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                    Need immediate structural advice or site support? Reach out via WhatsApp for a faster response.
                  </p>
                  <Button variant="accent" className="w-full flex items-center justify-center gap-2">
                    <MessageSquare size={18} />
                    Chat on WhatsApp
                  </Button>
               </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full bg-concrete border-t-8 border-accent p-12 flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-navy scale-110 shadow-xl">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-black text-navy uppercase tracking-tighter leading-none">Inquiry Received</h3>
                    <p className="text-gray-600 max-w-sm">
                      Thank you for contacting StruDesign Consulting. A senior structural engineer has been assigned to your inquiry and will contact you shortly.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-8">
                       <div className="grid md:grid-cols-2 gap-8">
                         <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-steel ml-1">Full Name *</label>
                           <input 
                             required 
                             type="text" 
                             className="w-full bg-concrete border-none p-4 focus:ring-2 focus:ring-steel outline-none transition-shadow font-medium text-navy"
                             placeholder="John Doe"
                             value={formData.name}
                             onChange={(e) => setFormData({...formData, name: e.target.value})}
                           />
                         </div>
                         <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-steel ml-1">Email Address *</label>
                           <input 
                             required 
                             type="email" 
                             className="w-full bg-concrete border-none p-4 focus:ring-2 focus:ring-steel outline-none transition-shadow font-medium text-navy"
                             placeholder="john@example.com"
                             value={formData.email}
                             onChange={(e) => setFormData({...formData, email: e.target.value})}
                           />
                         </div>
                         <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-steel ml-1">Phone Number</label>
                           <input 
                             type="tel" 
                             className="w-full bg-concrete border-none p-4 focus:ring-2 focus:ring-steel outline-none transition-shadow font-medium text-navy"
                             placeholder="+1 (555) 000-0000"
                             value={formData.phone}
                             onChange={(e) => setFormData({...formData, phone: e.target.value})}
                           />
                         </div>
                         <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-steel ml-1">Company / Organization</label>
                           <input 
                             type="text" 
                             className="w-full bg-concrete border-none p-4 focus:ring-2 focus:ring-steel outline-none transition-shadow font-medium text-navy"
                             placeholder="Company Name"
                             value={formData.company}
                             onChange={(e) => setFormData({...formData, company: e.target.value})}
                           />
                         </div>
                         <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-steel ml-1">Project Type *</label>
                           <div className="relative">
                            <select 
                              required 
                              className="w-full bg-concrete border-none p-4 focus:ring-2 focus:ring-steel outline-none transition-shadow font-medium text-navy appearance-none"
                              value={formData.projectType}
                              onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                            >
                              <option value="">Select a Project Type</option>
                              <option value="Residential">Residential Building</option>
                              <option value="Commercial">Commercial Project</option>
                              <option value="Industrial">Industrial Facility</option>
                              <option value="Renovation">Renovation & Retrofitting</option>
                              <option value="Infrastructure">Infrastructure Project</option>
                              <option value="Peer Review">Peer Review / Audit</option>
                            </select>
                            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-steel pointer-events-none" />
                           </div>
                         </div>
                         <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-steel ml-1">Project Location</label>
                           <input 
                             type="text" 
                             className="w-full bg-concrete border-none p-4 focus:ring-2 focus:ring-steel outline-none transition-shadow font-medium text-navy"
                             placeholder="City, State, Country"
                             value={formData.location}
                             onChange={(e) => setFormData({...formData, location: e.target.value})}
                           />
                         </div>
                       </div>

                       <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-widest text-steel ml-1">Message & Project Scope *</label>
                         <textarea 
                           required 
                           rows={6}
                           className="w-full bg-concrete border-none p-4 focus:ring-2 focus:ring-steel outline-none transition-shadow font-medium text-navy resize-none"
                           placeholder="Please describe the architectural requirements, approximate square footage, and any specific structural challenges..."
                           value={formData.message}
                           onChange={(e) => setFormData({...formData, message: e.target.value})}
                         />
                       </div>

                       <div className="flex items-center gap-4">
                          <Button 
                            disabled={isSubmitting} 
                            type="submit" 
                            variant="accent" 
                            size="lg" 
                            className="w-full md:w-auto min-w-[240px]"
                          >
                            {isSubmitting ? 'Processing...' : 'Submit Project Inquiry'}
                          </Button>
                          <p className="hidden md:block text-[10px] font-bold text-gray-400 uppercase tracking-widest italic flex-1">
                            Your data is handled securely and only used for project consultation purposes.
                          </p>
                       </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 w-full bg-concrete relative overflow-hidden grayscale contrast-125 opacity-50 border-y border-gray-200">
         <div className="absolute inset-0 structural-pattern" />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8 bg-white border-t-8 border-steel shadow-2xl">
               <MapPin className="text-steel mx-auto mb-4" size={48} />
               <h4 className="text-xl font-black text-navy uppercase tracking-tighter">Office Map Location</h4>
               <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Interactive map integration</p>
            </div>
         </div>
      </section>
    </div>
  );
}
