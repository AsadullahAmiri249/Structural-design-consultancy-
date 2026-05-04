import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  HardHat, 
  Ruler, 
  Building, 
  Activity, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Target,
  Clock,
  ExternalLink,
  Users
} from 'lucide-react';
import { Button, SectionHeading, Card } from '@/src/components/UI';
import { Link } from 'react-router-dom';

const TrustIndicator = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-start gap-4 p-6 bg-white border-l-4 border-steel shadow-sm"
  >
    <div className="bg-concrete p-3 text-steel shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-navy uppercase text-xs tracking-widest mb-1">{title}</h4>
      <p className="text-gray-600 text-sm font-medium">{desc}</p>
    </div>
  </motion.div>
);

const ServicePreview = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Card className="group">
    <div className="w-12 h-12 bg-concrete flex items-center justify-center text-steel mb-6 group-hover:bg-navy group-hover:text-accent transition-colors duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-steel transition-colors line-clamp-1">{title}</h3>
    <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">{description}</p>
    <Link to="/services" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-steel hover:text-navy transition-colors">
      Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
  </Card>
);

export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 structural-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-steel/10 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-steel/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-accent" />
                <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs">Structural Engineering Excellence</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                Structural Design Consultancy You Can <span className="text-accent underline decoration-4 underline-offset-8">Trust</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mb-10 font-medium">
                We provide professional structural design, analysis, review, and construction support for residential, commercial, industrial, and infrastructure-related projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" className="group" onClick={() => window.location.href='/contact'}>
                  Request a Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" onClick={() => window.location.href='/services'}>
                  View Our Services
                </Button>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-black text-white leading-none mb-2">15+</div>
                  <div className="text-[10px] uppercase tracking-widest text-accent font-bold">Years of expertise</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white leading-none mb-2">500+</div>
                  <div className="text-[10px] uppercase tracking-widest text-accent font-bold">Projects completed</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white leading-none mb-2">100%</div>
                  <div className="text-[10px] uppercase tracking-widest text-accent font-bold">Code compliant</div>
                </div>
              </div>
            </motion.div>

            {/* Visual Element - Blueprint Style */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 border-2 border-white/10 p-4 backdrop-blur-sm bg-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Structural Design Drawing" 
                  className="w-full grayscale contrast-125 opacity-80"
                />
                <div className="absolute inset-0 bg-navy/40 mix-blend-multiply" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-12 pointer-events-none">
                  {/* Technical Lines HUD overlay */}
                  <div className="w-full h-full border border-accent/30 flex items-center justify-center">
                    <div className="w-[1px] h-full bg-accent/20 absolute left-1/2" />
                    <div className="h-[1px] w-full bg-accent/20 absolute top-1/2" />
                    <div className="w-4 h-4 border border-accent/50 absolute top-0 left-0" />
                    <div className="w-4 h-4 border border-accent/50 absolute top-0 right-0" />
                    <div className="w-4 h-4 border border-accent/50 absolute bottom-0 left-0" />
                    <div className="w-4 h-4 border border-accent/50 absolute bottom-0 right-0" />
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 bg-accent text-navy p-4 font-black text-sm uppercase tracking-tighter shadow-xl">
                Licensed Engineers
              </div>
              <div className="absolute -bottom-6 -right-6 bg-steel text-white p-4 font-black text-sm uppercase tracking-tighter shadow-xl">
                Safe & Buildable
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Banner */}
      <section className="bg-concrete py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TrustIndicator icon={ShieldCheck} title="Compliance" desc="Licensed & experienced structural engineers" />
            <TrustIndicator icon={Activity} title="Safety" desc="Safe and code-compliant designs" />
            <TrustIndicator icon={Target} title="Value" desc="Cost-effective structural solutions" />
            <TrustIndicator icon={Clock} title="Efficiency" desc="On-time project delivery" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative">
        <div className="absolute right-0 top-0 w-64 h-64 structural-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionHeading 
              title="Our Engineering Expertise" 
              subtitle="From complex high-rises to residential renovations, we provide specialized design and analysis services."
              className="mb-0"
            />
            <Button variant="outline" className="mb-2" onClick={() => window.location.href='/services'}>
              View All Services
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServicePreview icon={Building} title="Structural Design" description="Complete design calculations and drawings for residential, commercial and industrial projects." />
            <ServicePreview icon={Activity} title="Structural Analysis" description="Advanced 3D modeling and analysis to verify performance under various loading conditions." />
            <ServicePreview icon={ShieldCheck} title="Building Assessment" description="Thorough inspection and structural integrity evaluation of existing structures." />
            <ServicePreview icon={Ruler} title="Foundation Design" description="Expert foundation solutions for challenging soil conditions and complex excavation support." />
            <ServicePreview icon={ShieldCheck} title="Seismic Design" description="Advanced engineering to ensure structural stability against earthquake forces." />
            <ServicePreview icon={FileText} title="Peer Review" description="Independent technical review of structural designs for code compliance and safety." />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute left-0 bottom-0 w-full h-1 technical-line" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000" 
                  alt="Construction Site" 
                  className="w-full grayscale h-[500px] object-cover border-4 border-steel"
                />
                <div className="absolute -bottom-10 -right-10 bg-accent p-12 text-navy hidden md:block">
                  <div className="text-5xl font-black leading-none mb-2">15</div>
                  <div className="text-sm font-bold uppercase tracking-widest">Years of Trust</div>
                </div>
             </div>
             <div>
                <SectionHeading 
                  dark 
                  title="Leading the Way in Structural Design" 
                  subtitle="StruDesign Consulting is a premier engineering firm dedicated to providing accurate, safe, and buildable solutions for the modern built environment."
                />
                <div className="grid sm:grid-cols-2 gap-8 my-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-accent">
                      <CheckCircle size={18} />
                      <span className="font-bold uppercase tracking-wider text-xs">Quality Focused</span>
                    </div>
                    <p className="text-gray-400 text-sm">We strictly follow international standards (ACI, AISC, ASCE, IBC).</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-accent">
                      <CheckCircle size={18} />
                      <span className="font-bold uppercase tracking-wider text-xs">Client Oriented</span>
                    </div>
                    <p className="text-gray-400 text-sm">We partner with architects and developers for cohesive project delivery.</p>
                  </div>
                </div>
                <Button variant="secondary" onClick={() => window.location.href='/about'}>
                  Read Our Story
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            centered 
            title="Why Clients Choose Us" 
            subtitle="We blend engineering precision with practical construction experience."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {[
              { icon: ShieldCheck, title: "Code-Compliant Engineering", desc: "Our designs are strictly checked against the latest local and international building codes." },
              { icon: Target, title: "Economical Designs", desc: "We focus on material optimization and efficient framing to reduce your construction costs." },
              { icon: FileText, title: "Detailed Drawings", desc: "Clear, highly detailed structural drawings that contractors find easy to follow and build." },
              { icon: Users, title: "Seamless Coordination", desc: "Proactive communication with architects and project stakeholders throughout the design cycle." },
              { icon: Activity, title: "Advanced Analysis", desc: "Utilization of the latest FEA software for precise structural modeling and performance simulation." },
              { icon: HardHat, title: "Practical Solutions", desc: "We anticipate site challenges early, providing designs that are buildable in real-world conditions." }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="bg-concrete w-14 h-14 shrink-0 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-accent transition-all duration-300">
                  <feature.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-3">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24 bg-concrete overflow-hidden relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px border-t border-gray-300 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A glimpse into the structures we've helped bring to life."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { type: 'Commercial', title: 'Skyline Business Hub', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000' },
              { type: 'Residential', title: 'Urban Heights Complex', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000' },
              { type: 'Industrial', title: 'Global Logistics Center', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000' },
              { type: 'Renovation', title: 'Historic Warehouse Retrofit', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000' }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white border-t-8 border-steel shadow-md overflow-hidden group cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-steel uppercase tracking-[0.2em] mb-2 block">{project.type}</span>
                  <h4 className="text-lg font-bold text-navy group-hover:text-steel transition-colors">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="border-navy text-navy" onClick={() => window.location.href='/projects'}>
              Browse Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading 
                  title="Industries and Clients We Serve" 
                  subtitle="We provide specialized structural expertise to a diverse range of sectors, ensuring every project meets its unique engineering requirements."
                />
                <div className="grid grid-cols-2 gap-4 mt-12">
                  {[
                    "Residential Developers",
                    "Public Sector Projects",
                    "Architects",
                    "Real Estate Investors",
                    "Industrial Clients",
                    "Construction Companies",
                    "NGOs & Foundations",
                    "Commercial Owners"
                  ].map((industry, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-concrete border-l-2 border-steel">
                      <CheckCircle size={14} className="text-steel" />
                      <span className="text-xs font-bold uppercase tracking-wider text-navy">{industry}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                   <Button variant="secondary" onClick={() => window.location.href='/industries'}>
                    Learn More
                   </Button>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1541462608141-ad4d4f9d3fb9?auto=format&fit=crop&q=80&w=500" alt="Work" className="w-full h-80 object-cover border-4 border-steel rounded-t-[100px]" />
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=500" alt="Work" className="w-full h-64 object-cover border-4 border-accent mt-16" />
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 structural-pattern opacity-5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading 
            centered 
            dark
            title="Have a project that needs structural design support?" 
            subtitle="From initial concept reviews to detailed drawing packages, our team is ready to add value to your project."
          />
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button variant="accent" size="lg" className="w-full sm:w-auto px-12 group" onClick={() => window.location.href='/contact'}>
              Get a Free Project Discussion
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="text-white font-medium flex items-center gap-3">
              <span className="text-gray-500">or call us at</span>
              <span className="text-xl font-bold">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
