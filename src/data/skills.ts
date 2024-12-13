import React from 'react';
import { Compass, Code, Database, Globe, Palette, Terminal } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Globe, level: 90 },
  { name: 'Backend Development', icon: Database, level: 85 },
  { name: 'UI/UX Design', icon: Palette, level: 80 },
  { name: 'DevOps', icon: Terminal, level: 75 },
];

export default function Skills() {
  return (
    <section className="bg-stone-800 py-20">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Compass className="w-24 h-24 mx-auto mb-12 text-amber-600" />
          <h2 className="text-4xl font-bold text-center text-white mb-16">Skill Compass</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map(({ name, icon: Icon, level }) => (
              <div key={name} className="bg-stone-900 rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-8 h-8 text-amber-600" />
                  <h3 className="text-xl font-semibold text-white">{name}</h3>
                </div>
                <div className="h-2 bg-stone-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-600 rounded-full transition-all duration-1000"
                    style={{ width: `${level}%` }}
                  />
                </div>
                <span className="text-stone-400 text-sm mt-2 block">{level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
