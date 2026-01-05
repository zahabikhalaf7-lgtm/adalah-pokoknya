import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-brand-red selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;