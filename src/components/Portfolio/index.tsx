import React, { useState } from 'react';
import { Code, Globe, Palette } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { FilterButton } from './FilterButton';
import { projects } from '../../data/projects';

const filters = [
  { id: 'all', icon: Globe, label: 'All' },
  { id: 'web', icon: Globe, label: 'Web' },
  { id: 'code', icon: Code, label: 'Code' },
  { id: 'design', icon: Palette, label: 'Design' }
];

export function Portfolio() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  return (
    <section className="bg-stone-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Expedition Log</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {filters.map(({ id, icon, label }) => (
            <FilterButton
              key={id}
              id={id}
              icon={icon}
              label={label}
              isActive={filter === id}
              onClick={() => setFilter(id)}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}