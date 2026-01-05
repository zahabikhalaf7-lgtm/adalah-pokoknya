import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'The Vintage',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Foodasa',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Marco Accent',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Mozaik',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-28 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-xs font-bold text-brand-red tracking-[0.2em] uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h3>
          </div>
          <a href="#" className="hidden md:inline-flex px-6 py-3 bg-brand-card border border-white/10 rounded-full text-sm font-bold text-white hover:bg-brand-red hover:border-brand-red transition-all">
            View All Work
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-brand-charcoal">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <ArrowUpRight className="text-white" size={32} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-bold text-white group-hover:text-brand-red transition-colors">{project.title}</h4>
                  <p className="text-brand-gray mt-1">{project.category}</p>
                </div>
                
                <a 
                  href="#"
                  className="text-sm font-bold text-brand-red flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  Know More <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
         <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex px-6 py-3 bg-brand-card border border-white/10 rounded-full text-sm font-bold text-white hover:bg-brand-red hover:border-brand-red transition-all">
            View All Work
          </a>
        </div>
      </div>
    </section>
  );
};