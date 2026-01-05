import React from 'react';
import { Layers, Smartphone, PenTool, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: 'UI Design',
    description: 'Creating intuitive and visually appealing interfaces that users love to interact with.',
    icon: <Layers size={40} />,
    isHighlighted: false,
  },
  {
    title: 'Product Design',
    description: 'From concept to launch, I help build digital products that solve real problems.',
    icon: <Smartphone size={40} />,
    isHighlighted: true,
  },
  {
    title: 'Branding',
    description: 'Crafting unique brand identities that resonate with your target audience.',
    icon: <PenTool size={40} />,
    isHighlighted: false,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-10 rounded-3xl transition-all duration-500 border border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[380px]
                ${service.isHighlighted 
                  ? 'bg-gradient-to-br from-brand-red to-[#A82833] transform lg:-translate-y-4 shadow-[0_20px_40px_-15px_rgba(230,57,70,0.3)]' 
                  : 'bg-brand-card hover:bg-[#252528]'
                }`}
            >
              {/* Icon */}
              <div className={`mb-8 ${service.isHighlighted ? 'text-white' : 'text-brand-red'}`}>
                {service.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${service.isHighlighted ? 'text-white' : 'text-white'}`}>
                  {service.title}
                </h3>
                <p className={`mb-8 leading-relaxed ${service.isHighlighted ? 'text-white/90' : 'text-brand-gray'}`}>
                  {service.description}
                </p>
              </div>

              {/* Link */}
              <a 
                href="#" 
                className={`inline-flex items-center gap-2 font-bold text-sm tracking-wider uppercase transition-all
                  ${service.isHighlighted ? 'text-white hover:gap-4' : 'text-white hover:text-brand-red hover:gap-4'}
                `}
              >
                Know More <ArrowRight size={16} />
              </a>
              
              {/* Decorative faint icon bg */}
               <div className={`absolute -bottom-8 -right-8 opacity-5 transform rotate-12 scale-150 pointer-events-none ${service.isHighlighted ? 'text-white' : 'text-white'}`}>
                  {service.icon}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};