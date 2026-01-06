import React from 'react';

const stats = [
  { label: 'Clients', value: '60+' },
  { label: 'Completed Projects', value: '122+' },
  { label: 'Achievements', value: '10' },
  { label: 'Years Experience', value: '08' }, // Adjusted to match grid, but main is 12
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-brand-black border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Large Stat (Left) */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-[120px] leading-none font-black text-brand-red">
            17
          </h2>
          <p className="text-2xl font-bold text-white mt-2">Tahun Pengalaman Hidup</p>
          <p className="text-brand-gray mt-4 max-w-xs mx-auto lg:mx-0">
            Memiliki semangat belajar tinggi dan terus mengembangkan kemampuan diri.
          </p>
        </div>

        {/* Stats Grid (Right) */}
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-brand-card p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center hover:border-brand-red/30 transition-colors">
              <span className="text-3xl font-bold text-brand-red mb-2">{stat.value}</span>
              <span className="text-sm text-brand-gray font-medium uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};