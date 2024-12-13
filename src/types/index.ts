import { LucideIcon } from 'lucide-react';

export type Project = {
  id: number;
  title: string;
  category: 'web' | 'design' | 'code';
  image: string;
  description: string;
};

export type Skill = {
  name: string;
  icon: LucideIcon;
  level: number;
};

export type NavItem = {
  label: string;
  href: string;
};