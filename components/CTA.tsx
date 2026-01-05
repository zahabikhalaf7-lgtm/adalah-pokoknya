import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-brand-card rounded-3xl p-12 md:p-20 text-center border border-white/5 relative overflow-hidden">
          
          {/* Abstract circles bg */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-red/5 rounded-full blur-[80px]"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let’s work together on your next project
            </h2>
            <p className="text-brand-gray text-lg mb-10 max-w-2xl mx-auto">
              I am available for freelance projects. Create something unique and impactful with me.
            </p>
            <a 
              href="mailto:hello@agatha.design" 
              className="inline-block bg-brand-red text-white text-lg font-bold px-10 py-5 rounded-full hover:bg-white hover:text-brand-red transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(230,57,70,0.6)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};