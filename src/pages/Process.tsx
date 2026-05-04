import React from 'react';
import { SectionHeading, Button } from '@/src/components/UI';
import { 
  Search, 
  Layers, 
  PenTool, 
  CheckSquare, 
  Truck, 
  MessageSquare,
  FileSearch,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';

const ProcessStep = ({ step, title, description, icon: Icon, isLast }: any) => (
  <div className="relative group">
    {!isLast && (
      <div className="absolute left-8 lg:left-1/2 top-16 w-0.5 h-full bg-concrete hidden md:block" />
    )}
    <div className="flex flex-col md:flex-row gap-8 lg:gap-0 lg:items-center relative z-10 mb-20 last:mb-0">
       <div className="md:w-1/2 lg:order-1 flex justify-start lg:justify-end lg:pr-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 border-t-4 border-steel shadow-lg max-w-md w-full"
          >
             <div className="text-[10px] font-black uppercase tracking-widest text-steel mb-2">Step {step}</div>
             <h3 className="text-xl font-black text-navy uppercase tracking-tighter mb-4">{title}</h3>
             <p className="text-gray-600 text-sm font-medium leading-relaxed">{description}</p>
          </motion.div>
       </div>

       <div className="hidden md:flex absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 bg-navy text-accent items-center justify-center border-4 border-white shadow-xl group-hover:bg-accent group-hover:text-navy transition-colors duration-500">
          <Icon size={24} />
       </div>

       <div className="md:w-1/2 lg:order-2 flex justify-start lg:pl-20">
          <div className="hidden lg:block text-8xl font-black text-concrete font-display">{step}</div>
       </div>
    </div>
  </div>
);

export default function Process() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Initial Consultation",
      description: "We begin by understanding your project goals, architectural vision, site constraints, and geotechnical data to set a strong engineering foundation."
    },
    {
      step: "02",
      icon: Layers,
      title: "Concept Development",
      description: "Our engineers explore multiple structural framing options, comparing efficiency, cost, and constructability to find the optimal system for your build."
    },
    {
      step: "03",
      icon: Cpu,
      title: "Analysis & Modeling",
      description: "Using advanced computational tools, we perform rigorous analysis of gravity and lateral loads to ensure the structure performs as intended under all conditions."
    },
    {
      step: "04",
      icon: PenTool,
      title: "Detailed Design",
      description: "Detailed member sizing, connection engineering, and reinforcement layouts are finalized, ensuring every component meets international building codes."
    },
    {
      step: "05",
      icon: CheckSquare,
      title: "Internal Peer Review",
      description: "Before delivery, every project goes through our internal Quality Assurance process. A senior principal engineer verifies all assumptions and calculations."
    },
    {
      step: "06",
      icon: FileSearch,
      title: "Drawing & Documentation",
      description: "We produce clean, technical, and contractor-friendly structural drawing packages (GFC) including all necessary schedules and specifications."
    },
    {
      step: "07",
      icon: Truck,
      title: "Construction Support",
      description: "We don't leave when the drawings are done. We provide ongoing support, site visits, and RFI clarifications to ensure the construction stays true to the design."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-concrete border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <SectionHeading 
             centered
             title="Our Design Process" 
             subtitle="A transparent, data-driven workflow that ensures technical accuracy and project success from first sketch to final stone."
           />
        </div>
      </section>

      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mt-12">
              {steps.map((s, idx) => (
                <ProcessStep key={idx} {...s} isLast={idx === steps.length - 1} />
              ))}
           </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white text-center">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Ready to start the process?</h2>
            <p className="text-lg text-gray-400 mb-10">Download our process guide or book a virtual consultation with our lead structural strategist.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" onClick={() => window.location.href='/contact'}>
                Book Consultation
              </Button>
              <Button variant="outline" className="border-white/20 text-white" size="lg">
                View Sample Case Studies
              </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
