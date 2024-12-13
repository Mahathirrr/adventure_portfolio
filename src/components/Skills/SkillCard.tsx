import React from "react";
import { Skill } from "../../types";

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  const { name, icon: Icon, level } = skill;

  return (
    <div className="bg-stone-900 rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
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
  );
}
