/**
 * ScrollArea Component (shadcn/ui style)
 * - Horizontal scrolling for hourly forecast
 * - Custom scrollbar styling
 * - Smooth scroll behavior
 */
import React from 'react';
import { cn } from '../../lib/utils';

const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        // Enable horizontal scrolling
        'overflow-x-auto overflow-y-hidden',
        // Hide scrollbar but keep functionality
        'scrollbar-thin scrollbar-track-white/10 scrollbar-thumb-white/30',
        // Smooth scrolling
        'scroll-smooth',
        // Snap scrolling for cards
        'snap-x snap-mandatory',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
ScrollArea.displayName = 'ScrollArea';

export { ScrollArea };
