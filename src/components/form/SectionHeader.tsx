import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className
}) => {
  return (
    <div className={twMerge("border-b border-gray-200 pb-4 mb-6", className)}>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      {description && (
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      )}
    </div>
  );
};