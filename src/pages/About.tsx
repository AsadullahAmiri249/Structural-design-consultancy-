import React from 'react';
import { SectionHeading, Button } from '@/src/components/UI';
import { Shield, Target, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Intro Section */}
      <section className="py-20 bg-concrete border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading 
                  title="Your Trusted Partner in Structural Engineering" 
                  subtitle="At StruDesign Consulting, we bridge the gap between architectural vision and structural reality. Our focus is on providing engineering solutions that are as safe as they are buildable."
                />
                <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
                  <p>
                    Founded on the principles of technical accuracy, innovation, and client collaboration, StruDesign Consulting has grown into a leading consultancy for complex structural challenges. We specialize in everything from high-rise commercial structures and industrial facilities to boutique residential designs and structural retrofitting.
                  </p>
                  <p>
                    Our team of licensed structural engineers brings decades of collective experience, ensuring that every calculation is verified, every drawing is precise, and every client receives the highest level of professional guidance.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000" 
                  alt="Engineering Team" 
                  className="w-full h-[600px] object-cover grayscale border-8 border-white shadow-2xl"
                />
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <div className="bg-navy p-10 text-white border-l-8 border-accent">
                     <div className="text-4xl font-black mb-2 text-accent">500+</div>
                     <div className="text-xs font-bold uppercase tracking-widest">Successful Projects</div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered title="Our Core Values" subtitle="The pillars that define our professional culture and engineering approach." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            {[
              { icon: Shield, title: "Unwavering Safety", desc: "Safety is our primary mandate. We never compromise on structural integrity or code compliance." },
              { icon: Target, title: "Practical Innovation", desc: "We look for innovative framing solutions that simplify construction and optimize material costs." },
              { icon: Award, title: "Quality Excellence", desc: "Every project undergoes a rigorous peer-review process within our firm before delivery." },
              { icon: Users, title: "Collaborative Spirit", desc: "We see ourselves as partners to architects, contractors, and developers, not just consultants." }
            ].map((value, idx) => (
              <div key={idx} className="text-center group p-8 hover:bg-concrete transition-colors duration-300">
                <div className="bg-navy p-4 text-accent w-16 h-16 mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <value.icon size={32} />
                </div>
                <h4 className="text-lg font-bold text-navy mb-4 uppercase tracking-tighter">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <SectionHeading 
              dark 
              title="Deep Engineering Expertise" 
              subtitle="Our technical capabilities span across various structural systems and materials."
            />
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
               {[
                 'Reinforced Concrete (RCC)',
                 'Structural Steel Systems',
                 'Pre-engineered Buildings (PEB)',
                 'Timber & Masonry Design',
                 'Composite Structures',
                 'Dynamic & Seismic Analysis',
                 'Foundation Engineering',
                 'Post-Tensioned Concrete'
               ].map((skill, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-accent rounded-full" />
                   <span className="font-bold text-sm tracking-wide text-gray-300">{skill}</span>
                 </div>
               ))}
            </div>
            <div className="mt-12">
               <Button variant="accent" onClick={() => window.location.href='/services'}>
                  Explore Full Services
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-navy mb-6 tracking-tight uppercase">Ready to Build Safe?</h2>
          <p className="text-xl text-gray-600 mb-10 font-medium italic">"Safe. Efficient. Buildable. This isn't just our slogan, it's our promise to every client."</p>
          <Button variant="outline" size="lg" onClick={() => window.location.href='/contact'}>
             Contact Our Principal Engineer
          </Button>
        </div>
      </section>
    </div>
  );
}
