import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '../ui/Button';

type FilterButtonProps = {
  id: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export function FilterButton({ id, icon: Icon, label, isActive, onClick }: FilterButtonProps) {
  return (
    <Button
      variant={isActive ? 'primary' : 'secondary'}
      onClick={onClick}
      className="px-6 py-2 rounded-full"
      icon={Icon}
    >
      {label}
    </Button>
  );
}