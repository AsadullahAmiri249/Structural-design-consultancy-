import React from 'react';
import { SectionHeading, Button } from '@/src/components/UI';
import { MapPin, Building, ArrowRight, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectCardProps {
  title: string;
  type: string;
  location: string;
  scope: string;
  structure: string;
  result: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, type, location, scope, structure, result, image }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white border-b-4 border-steel shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group flex flex-col h-full"
  >
    <div className="h-64 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
      <div className="absolute top-4 left-4 bg-navy text-accent text-[10px] font-black uppercase tracking-widest px-3 py-1">
        {type}
      </div>
    </div>
    
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex items-center gap-2 text-steel mb-4">
        <MapPin size={16} />
        <span className="text-xs font-bold uppercase tracking-widest">{location}</span>
      </div>
      
      <h3 className="text-2xl font-black text-navy uppercase tracking-tighter leading-none mb-6 group-hover:text-steel transition-colors line-clamp-1">{title}</h3>
      
      <div className="space-y-4 mb-8 flex-grow">
         <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Scope of Work</div>
            <div className="text-sm font-medium text-navy">{scope}</div>
         </div>
         <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Structure Type</div>
            <div className="text-sm font-medium text-navy">{structure}</div>
         </div>
         <div className="pt-4 border-t border-concrete">
             <div className="text-[10px] font-black uppercase tracking-[0.2em] text-steel mb-1">Key Result</div>
             <div className="text-sm font-bold text-navy italic">"{result}"</div>
         </div>
      </div>

      <Button variant="ghost" className="w-full justify-between items-center group/btn shadow-none px-0 border-t border-concrete pt-6 mt-auto">
        <span className="text-xs font-black uppercase tracking-widest">View Case Study</span>
        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    </div>
  </motion.div>
);

export default function Projects() {
  const projects = [
    {
      title: "Skyline Corporate Tower",
      type: "Commercial",
      location: "Central Business District",
      scope: "Full Structural Design & Dynamic Analysis",
      structure: "32-Story RCC Core & Perimeter Frame",
      result: "Optimized steel weight by 15% via advanced seismic modeling.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Lumina Residential Complex",
      type: "Residential",
      location: "West Bay Suburbs",
      scope: "Foundation Engineering & Superstructure Design",
      structure: "Post-Tensioned Concrete Slab System",
      result: "Delivered a safe foundation on extremely soft clay soil conditions.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Apex Logistics Hub",
      type: "Industrial",
      location: "East Port Industrial Zone",
      scope: "Steel Structure Design & Shop Drawings",
      structure: "Pre-Engineered Building (PEB) Warehouse",
      result: "Achieved 60m column-free spans for maximum operational efficiency.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Riverfront Retaining Walls",
      type: "Infrastructure",
      location: "North River Bank",
      scope: "Structural Wall Design & Global Stability Analysis",
      structure: "Cantilevered Reinforced Concrete Walls",
      result: "Engineered for 100-year flood events and high lateral soil pressure.",
      image: "https://images.unsplash.com/photo-1510073230302-133a382103e8?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Heritage Mill Conversion",
      type: "Renovation",
      location: "Old Industrial Quarter",
      scope: "Structural Integrity Assessment & Retrofitting",
      structure: "Load-bearing Masonry with New Steel Infill",
      result: "Successfully preserved historic facade while adding three floors.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Multi-Story Parking Plaza",
      type: "Commercial",
      location: "Municipal Center",
      scope: "Full Structural Design & Ramp Analysis",
      structure: "Pre-cast Concrete Multi-level Structure",
      result: "Rapidly built using off-site pre-cast technology to minimize city disruption.",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 structural-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <SectionHeading 
             centered
             dark
             title="Portfolio of Structural Excellence" 
             subtitle="A showcase of our diverse structural engineering projects across residential, commercial, industrial, and infrastructure sectors."
           />
        </div>
      </section>

      <section className="py-24 bg-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {['All Projects', 'Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Renovation'].map((filter) => (
                <button 
                  key={filter}
                  className="px-6 py-2 border border-gray-300 text-[10px] font-black uppercase tracking-widest hover:bg-navy hover:text-white transition-all"
                >
                  {filter}
                </button>
              ))}
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {projects.map((project, idx) => (
                <ProjectCard 
                  key={idx} 
                  title={project.title}
                  type={project.type}
                  location={project.location}
                  scope={project.scope}
                  structure={project.structure}
                  result={project.result}
                  image={project.image}
                />
             ))}
           </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy p-12 border-t-8 border-accent">
            <Building className="text-white opacity-20 mx-auto mb-6" size={48} />
             <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Have a complex project in mind?</h2>
             <p className="text-gray-400 mb-10 leading-relaxed">We thrive on technical complexity and unique structural challenges. Let's discuss how we can engineer your vision.</p>
             <Button variant="accent" size="lg" onClick={() => window.location.href='/contact'}>
                Get a Project Quote
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
