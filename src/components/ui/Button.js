/**
 * Button Component (shadcn/ui style)
 * - Multiple variants: default, outline, ghost
 * - Multiple sizes: default, sm, lg, icon
 * - Used for search button, navigation, etc.
 */
import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  // Base button styles
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary button with gradient
        default:
          'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30',
        // Outline button
        outline:
          'border border-white/30 bg-transparent text-white hover:bg-white/10',
        // Ghost button (minimal)
        ghost: 'text-white hover:bg-white/10',
        // Primary action button
        primary:
          'bg-blue-500/80 text-white hover:bg-blue-500 backdrop-blur-sm',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-lg px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
