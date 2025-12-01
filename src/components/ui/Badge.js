/**
 * Badge Component (shadcn/ui style)
 * - Small labels for weather conditions
 * - Multiple variants for different states
 * - Used for precipitation %, temperature tags, etc.
 */
import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  // Base badge styles
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        // Default badge
        default: 'bg-white/20 text-white backdrop-blur-sm border border-white/30',
        // Success (good weather)
        success: 'bg-green-500/20 text-green-100 border border-green-400/30',
        // Warning (rain chance)
        warning: 'bg-yellow-500/20 text-yellow-100 border border-yellow-400/30',
        // Danger (storms)
        danger: 'bg-red-500/20 text-red-100 border border-red-400/30',
        // Info (general info)
        info: 'bg-blue-500/20 text-blue-100 border border-blue-400/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
});
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
