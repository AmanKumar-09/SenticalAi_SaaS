import React, { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  id,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-[#0B4A34]">
          {label}
        </label>
      )}
      <input
        id={id}
        className={twMerge(
          clsx(
            'w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl shadow-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#12B76A] focus:border-[#12B76A] disabled:opacity-50 text-slate-800 font-medium',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            className
          )
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
    </div>
  );
};
