/**
 * HeroHeader Component
 * - Displays current weather prominently
 * - Large temperature with weather icon
 * - Location name and current conditions
 */
import React from 'react';
import { MapPin } from 'lucide-react';
import { Badge } from './ui/Badge';
import { getWeatherIcon } from '../utils/weatherIcons';

const HeroHeader = ({ location, currentPeriod }) => {
  if (!currentPeriod) return null;

  // Get the appropriate weather icon based on forecast
  const WeatherIcon = getWeatherIcon(currentPeriod.shortForecast);
  
  // Determine badge variant based on precipitation
  const getPrecipBadgeVariant = (chance) => {
    if (!chance || chance === 'N/A') return 'default';
    const num = parseInt(chance);
    if (num >= 70) return 'danger';
    if (num >= 40) return 'warning';
    return 'success';
  };

  return (
    <div className="text-center py-8 animate-fade-in">
      {/* Location with pin icon */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <MapPin className="h-5 w-5 text-white/80" />
        <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
          {location}
        </h1>
      </div>

      {/* Current period name */}
      <p className="text-white/70 text-lg mb-6">{currentPeriod.name}</p>

      {/* Large weather icon and temperature */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <WeatherIcon className="h-24 w-24 md:h-32 md:w-32 text-white drop-shadow-lg" />
        <div className="text-left">
          <p className="text-6xl md:text-8xl font-light text-white drop-shadow-lg">
            {currentPeriod.temperature}°
            <span className="text-3xl md:text-4xl">{currentPeriod.temperatureUnit}</span>
          </p>
        </div>
      </div>

      {/* Weather description */}
      <p className="text-xl md:text-2xl text-white/90 font-medium mb-4 drop-shadow-md">
        {currentPeriod.shortForecast}
      </p>

      {/* Precipitation badge */}
      {currentPeriod.probabilityOfPrecipitation?.value !== null && (
        <Badge variant={getPrecipBadgeVariant(currentPeriod.probabilityOfPrecipitation?.value)}>
          💧 {currentPeriod.probabilityOfPrecipitation?.value || 0}% chance of rain
        </Badge>
      )}
    </div>
  );
};

export default HeroHeader;
