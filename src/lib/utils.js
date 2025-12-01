/**
 * Utility function to merge Tailwind CSS classes
 * - clsx: Conditionally join class names
 * - twMerge: Merge Tailwind classes without conflicts
 */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
