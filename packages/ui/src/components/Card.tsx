import React, { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Card: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge(clsx('bg-white border border-slate-200 rounded-xl shadow-sm p-6', className))}
      {...props}
    >
      {children}
    </div>
  );
};
