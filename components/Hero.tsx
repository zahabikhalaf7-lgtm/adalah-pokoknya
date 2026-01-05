import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-0 overflow-hidden">
        
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        
        {/* Left Side: Portrait */}
        <div className="relative order-2 md:order-1 flex justify-center md:justify-start">
          <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl group">
             {/* Decorative element behind image */}
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-red/30 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
             
             <img 
               src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
               alt="Agatha Portrait" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-60"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="order-1 md:order-2 flex flex-col justify-center text-left space-y-6">
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm animate-fade-in-up">
            Hello I'm Agatha
          </p>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Visual <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-gray">Designer</span>
          </h1>
          
          <p className="text-brand-gray text-lg md:text-xl max-w-lg leading-relaxed">
            I craft digital experiences that merge art with functionality. Specializing in UI/UX and product design that leaves a lasting impression.
          </p>
          
          <div className="pt-4">
            <a 
              href="#about"
              className="inline-flex items-center gap-3 bg-brand-red text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(230,57,70,0.5)]"
            >
              About Me
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};