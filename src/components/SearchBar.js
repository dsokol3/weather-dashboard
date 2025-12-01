/**
 * SearchBar Component
 * - ZIP code input with search button
 * - Uses shadcn-style Input and Button components
 * - Handles form submission
 */
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

const SearchBar = ({ zipCode, setZipCode, onSearch, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      {/* Container with flex layout for input + button */}
      <div className="flex gap-2">
        {/* ZIP Code Input with icon */}
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
          <Input
            type="text"
            placeholder="Enter ZIP code..."
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="pl-10" // Padding for the icon
          />
        </div>
        
        {/* Search Button */}
        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? (
            // Loading spinner
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <>
              <Search className="h-4 w-4 mr-2" />
              Search
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
