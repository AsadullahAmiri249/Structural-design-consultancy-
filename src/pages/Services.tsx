import React from 'react';
import { SectionHeading, Button, Card } from '@/src/components/UI';
import { 
  Building2, 
  Activity, 
  ShieldCheck, 
  Ruler, 
  FileText, 
  HardHat, 
  Hammer, 
  Map, 
  Search,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

interface ServiceDetailProps {
  icon: any;
  title: string;
  description: string;
  who: string;
  deliverables: string[];
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ icon: Icon, title, description, who, deliverables }) => (
  <Card className="group">
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-navy p-4 text-accent group-hover:bg-steel transition-colors">
          <Icon size={32} />
        </div>
        <h3 className="text-2xl font-black text-navy uppercase tracking-tighter leading-none group-hover:text-steel transition-colors">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-8 leading-relaxed font-medium">
        {description}
      </p>

      <div className="mt-auto space-y-6">
        <div className="p-4 bg-concrete border-l-4 border-steel">
          <div className="text-[10px] font-bold uppercase tracking-widest text-steel mb-2">Ideal For</div>
          <div className="font-bold text-navy text-sm">{who}</div>
        </div>

        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-steel mb-3">Key Deliverables</div>
          <ul className="grid grid-cols-1 gap-2">
            {deliverables.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircle2 size={14} className="text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-concrete">
          <Button 
            variant="ghost" 
            className="w-full justify-between px-0 font-black uppercase text-xs tracking-widest hover:text-steel"
            onClick={() => window.location.href='/contact'}
          >
            Discuss This Service
            <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  </Card>
);

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Structural Design Consultancy",
      description: "Full structural design for new buildings. We handle everything from gravity systems to lateral load-resisting frames, ensuring stability and efficiency.",
      who: "Architects, Real Estate Developers, Private Home Owners",
      deliverables: ["Structural Framing Plans", "Member Sizing Reports", "Connection Designs", "GFC Drawings"]
    },
    {
      icon: Activity,
      title: "Structural Analysis & Modelling",
      description: "Using cutting-edge software like SAP2000, ETABS, and SAFE, we create digital twins of your structure to simulate real-world physics.",
      who: "Engineering Firms, Complex Industrial Projects, High-Rises",
      deliverables: ["3D Analytical Model", "Load Path Analysis", "Deflection Reports", "Optimization Studies"]
    },
    {
      icon: ShieldCheck,
      title: "Reinforced Concrete (RCC) Design",
      description: "Detailed engineering for all concrete components including columns, beams, massive rafts, and post-tensioned slabs.",
      who: "Construction Companies, Contractors, Institutional Clients",
      deliverables: ["Reinforcement Detailing", "Bar Bending Schedules (BBS)", "Mix Specification", "Pour Sequences"]
    },
    {
      icon: Map,
      title: "Steel Structure Design",
      description: "Expert design for hot-rolled and cold-formed steel projects. Ideal for large-span warehouses and complex stadiums.",
      who: "Industrial Clients, PEB Manufacturers, Commercial Developers",
      deliverables: ["Steel Framing Plans", "Bolt & Weld Details", "Erection Diagrams", "Material Optimization"]
    },
    {
      icon: Ruler,
      title: "Foundation Design",
      description: "Custom foundation solutions tailored to site-specific soil conditions, including deep piles and complex retaining systems.",
      who: "Geotechnical Engineers, Civil Contractors, Property Owners",
      deliverables: ["Pile Design & Layout", "Raft Foundation Analysis", "Retaining Wall Details", "Excavation Support"]
    },
    {
      icon: Activity,
      title: "Seismic & Wind Design",
      description: "Advanced dynamic analysis to ensure your structures can withstand extreme lateral forces from wind and earthquakes.",
      who: "High-Rise Developers, Public Infrastructure, Coastal Projects",
      deliverables: ["Response Spectrum Analysis", "Wind Tunnel Study Coordination", "Base Isolation Integration"]
    },
    {
      icon: Search,
      title: "Structural Assessment",
      description: "Condition surveys and load-rating of existing structures to determine current health and safety levels.",
      who: "Insurance Companies, Facility Managers, Real Estate Buyers",
      deliverables: ["Non-Destructive Testing", "Structural Integrity Audit", "Maintenance Roadmaps"]
    },
    {
      icon: Hammer,
      title: "Retrofitting & Strengthening",
      description: "Engineering plans to reinforce older structures or adapt them for new uses and heavier loading requirements.",
      who: "Heritage Property Owners, Renovation Architects",
      deliverables: ["Steel Plate Bonding", "FRP Wrapping Details", "Jacketing Drawings", "Phased Retrofit Plan"]
    },
    {
      icon: FileText,
      title: "Design & Peer Review",
      description: "Independent third-party review of structural designs to verify safety, code compliance, and value engineering.",
      who: "Government Agencies, Large Scale Developers, Stakeholders",
      deliverables: ["Technical Review Report", "Compliance Certificate", "Value Engineering Proposals"]
    },
    {
      icon: HardHat,
      title: "Construction Support",
      description: "On-site and off-site support during the build phase to resolve site queries and ensure design intent is followed.",
      who: "Site Engineers, Project Managers, General Contractors",
      deliverables: ["RFI Responses", "Submittal Reviews", "Site Inspection Reports", "Modification Clarifications"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-concrete">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full structural-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <SectionHeading 
             centered
             title="Comprehensive Engineering Services" 
             subtitle="We provide specialized structural expertise across every stage of the project lifecycle, from feasibility to construction."
           />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((svc, idx) => (
              <ServiceDetail 
                key={idx} 
                icon={svc.icon} 
                title={svc.title} 
                description={svc.description} 
                who={svc.who} 
                deliverables={svc.deliverables} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-24 bg-navy text-white text-center">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Need a custom technical proposal?</h2>
            <p className="text-lg text-gray-400 mb-10">Our principals are available for direct technical discussions regarding your project scope and engineering requirements.</p>
            <Button variant="accent" size="lg" onClick={() => window.location.href='/contact'}>
               Request Service Quote
            </Button>
         </div>
      </section>
    </div>
  );
}
