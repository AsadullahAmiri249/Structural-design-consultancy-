import React from 'react';
import { SectionHeading, Button, Card } from '@/src/components/UI';
import { 
  ShieldCheck, 
  Target, 
  Clock, 
  MessageSquare, 
  CheckCircle,
  BarChart3,
  Users,
  Lightbulb
} from 'lucide-react';

const ReasonCard = ({ icon: Icon, title, description }: any) => (
  <Card className="flex flex-col group">
    <div className="bg-concrete w-16 h-16 flex items-center justify-center text-steel mb-8 group-hover:bg-navy group-hover:text-accent transition-all duration-300">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-black text-navy uppercase tracking-tighter mb-4 group-hover:text-steel transition-colors">{title}</h3>
    <p className="text-gray-600 text-sm font-medium leading-relaxed">{description}</p>
  </Card>
);

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Engineering Accuracy",
      description: "We use the latest FEM software to verify every load path, ensuring your structure exceeds performance expectations under all conditions."
    },
    {
      icon: Target,
      title: "Practical Solutions",
      description: "Our engineers have site experience. We design structures that are actually buildable, reducing contractor errors and project delays."
    },
    {
      icon: BarChart3,
      title: "Cost Optimization",
      description: "Through smart framing and value engineering, we help you save on material costs (concrete/steel) without compromising structural integrity."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We understand construction timelines. Our internal schedules are built around your deadlines, ensuring no design bottleneck."
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "No hidden engineering jargon. We provide clear, concise reports and drawings that everyone from the client to the site worker can understand."
    },
    {
      icon: Lightbulb,
      title: "Innovative Thinking",
      description: "We look for 'out of the box' framing solutions for unique architectural shapes, making the impossible possible through smart design."
    },
    {
      icon: Users,
      title: "Collaborative Focus",
      description: "We work as an extension of your project team, providing proactive feedback to architects and MEP consultants from day one."
    },
    {
      icon: CheckCircle,
      title: "Global Compliance",
      description: "Whether it's ACI, AISC, Eurocode, or local building ordinances, we ensure 100% compliance with relevant engineering laws."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-navy text-white relative">
        <div className="absolute inset-0 structural-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <SectionHeading 
             centered
             dark
             title="The StruDesign Advantage" 
             subtitle="Why discerning architects, developers, and contractors choose us for their most critical structural engineering needs."
           />
        </div>
      </section>

      <section className="py-24 bg-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {reasons.map((item, idx) => (
               <ReasonCard key={idx} {...item} />
             ))}
           </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-navy p-16 relative z-10 text-white overflow-hidden">
              {/* Pattern */}
              <div className="absolute right-0 top-0 w-64 h-64 structural-pattern opacity-10 pointer-events-none" />
              
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                 <div className="lg:col-span-2">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">A Client-Focused Philosophy</h2>
                    <p className="text-gray-400 text-lg font-medium leading-relaxed italic">
                      "Our goal isn't just to deliver calculations; it's to deliver peace of mind. We take ownership of the structural integrity so you can focus on the bigger picture of project delivery."
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                       <span className="w-12 h-1 bg-accent" />
                       <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Principal Engineer</span>
                    </div>
                 </div>
                 <div className="flex justify-center lg:justify-end">
                    <Button variant="accent" size="lg" onClick={() => window.location.href='/contact'}>
                       Partner With Us
                    </Button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
