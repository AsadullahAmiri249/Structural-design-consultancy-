import React from 'react';
import { SectionHeading, Button, Card } from '@/src/components/UI';
import { 
  Home, 
  Building2, 
  Factory, 
  ShieldAlert, 
  Map, 
  Globe, 
  Palmtree, 
  CheckCircle,
  Warehouse
} from 'lucide-react';

interface IndustryCardProps {
  icon: any;
  title: string;
  description: string;
  projects: string[];
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon: Icon, title, description, projects }) => (
  <Card className="flex flex-col group">
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-concrete p-3 text-steel group-hover:bg-navy group-hover:text-accent transition-all">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-black text-navy uppercase tracking-tighter group-hover:text-steel transition-colors">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    <div className="pt-6 border-t border-concrete">
      <div className="text-[10px] font-black uppercase tracking-widest text-steel mb-3">Key Project Types</div>
      <div className="flex flex-wrap gap-2">
        {projects.map((project: string) => (
          <span key={project} className="text-[10px] bg-concrete px-2 py-1 font-bold text-navy uppercase tracking-wider">{project}</span>
        ))}
      </div>
    </div>
  </Card>
);

export default function Industries() {
  const industries = [
    {
      icon: Home,
      title: "Residential Developers",
      description: "From luxury villas to high-density multi-story apartment complexes, we provide safe and efficient framing solutions that maximize sellable area.",
      projects: ["High-rise Condos", "Luxury Villas", "Social Housing", "Townhomes"]
    },
    {
      icon: Building2,
      title: "Commercial Sector",
      description: "Engineering iconic office towers and retail spaces that allow for large open spans and flexible interior layouts for modern businesses.",
      projects: ["Office Towers", "Shopping Malls", "Hotels", "Parking Structures"]
    },
    {
      icon: Factory,
      title: "Industrial & Manufacturing",
      description: "Specialized design for heavy load-bearing floors, long-span steel roofs, and equipment foundations requiring vibration control.",
      projects: ["Warehouses", "Factories", "Processing Plants", "Cold Storage"]
    },
    {
      icon: Globe,
      title: "NGOs & Infrastructure",
      description: "Supporting community-focused projects with resilient, cost-effective, and locally buildable structural engineering solutions.",
      projects: ["Schools", "Hospitals", "Community Centers", "Water Tanks"]
    },
    {
      icon: ShieldAlert,
      title: "Renovation & Rehabilitation",
      description: "Breathing new life into old structures through structural assessment, load capacity upgrades, and seismic retrofitting.",
      projects: ["Historical Sites", "Adaptive Reuse", "Facade Retention", "Structural Repair"]
    },
    {
      icon: Map,
      title: "Infrastructure & Walls",
      description: "Technical design for deep retaining structures, underground parking supports, and specialized foundation systems.",
      projects: ["Retaining Walls", "Culverts", "Basements", "Special Shafts"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 structural-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <SectionHeading 
             centered
             dark
             title="Industries We Serve" 
             subtitle="Our structural expertise adds value across a wide spectrum of sectors, ensuring every project meets its unique environmental and functional challenges."
           />
        </div>
      </section>

      <section className="py-24 bg-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {industries.map((item, idx) => (
               <IndustryCard 
                key={idx} 
                icon={item.icon}
                title={item.title}
                description={item.description}
                projects={item.projects}
               />
             ))}
           </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading 
                  title="A Multi-Disciplinary Approach" 
                  subtitle="We don't work in isolation. Our structural solutions are designed to integrate seamlessly with various project disciplines."
                />
                <div className="space-y-6 mt-12">
                   {[
                     { title: "Architectural Integration", desc: "We prioritize aesthetic intent while ensuring structural viability." },
                     { title: "MEP Coordination", desc: "Strategic beam routing and penetration planning for mechanical systems." },
                     { title: "Geotechnical Collaboration", desc: "Deep analysis of soil-structure interaction for foundation optimization." },
                     { title: "GC & Contractor Support", desc: "Simplified detailings that allow for faster and easier site execution." }
                   ].map((item, idx) => (
                     <div key={idx} className="flex gap-4">
                        <CheckCircle className="text-accent shrink-0 mt-1" size={20} />
                        <div>
                          <h4 className="font-black text-navy uppercase tracking-tighter">{item.title}</h4>
                          <p className="text-gray-600 text-sm font-medium">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                 <div className="p-8 border-4 border-steel bg-concrete">
                    <img 
                      src="https://images.unsplash.com/photo-1541462608141-ad4d4f9d3fb9?auto=format&fit=crop&q=80&w=1000" 
                      alt="Construction" 
                      className="w-full h-80 object-cover grayscale"
                    />
                 </div>
                 <div className="absolute -bottom-6 -left-6 bg-accent p-6 text-navy shadow-xl hidden md:block">
                    <Building2 size={40} />
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
