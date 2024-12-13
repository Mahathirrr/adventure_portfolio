import React from 'react';
import { Project } from '../../types';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-stone-300">{project.description}</p>
        </div>
      </div>
    </div>
  );
}