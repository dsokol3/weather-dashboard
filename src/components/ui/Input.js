/**
 * Input Component (shadcn/ui style)
 * - Glassmorphism effect matching cards
 * - Focus states with ring
 * - Used for ZIP code search input
 */
import React from 'react';
import { cn } from '../../lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        // Base input styles
        'flex h-10 w-full rounded-lg px-4 py-2 text-sm',
        // Glassmorphism background
        'bg-white/20 backdrop-blur-sm border border-white/30',
        // Text styling
        'text-white placeholder:text-white/50',
        // Focus states
        'focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50',
        // Transition for smooth interactions
        'transition-all duration-200',
        // File input specific styles
        'file:border-0 file:bg-transparent file:text-sm file:font-medium',
        // Disabled state
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
