import React from "react";
import { Compass } from "lucide-react";
import { SkillCard } from "./SkillCard";
import { skills } from "../../data/skills";

export function Skills() {
  return (
    <section className="bg-stone-800 py-20" id="skills">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Compass className="w-24 h-24 mx-auto mb-12 text-amber-600" />
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Skill Compass
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
