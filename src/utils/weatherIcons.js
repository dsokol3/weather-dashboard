/**
 * Weather Icons Utility
 * - Maps weather conditions to Lucide icons
 * - Returns appropriate icon component based on forecast text
 */
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  CloudFog,
  CloudSun,
  Moon,
  CloudMoon,
  Wind
} from 'lucide-react';

/**
 * Get the appropriate weather icon based on forecast description
 * @param {string} forecast - The weather forecast text
 * @param {boolean} isNight - Whether it's a night period
 * @returns {React.Component} - Lucide icon component
 */
export const getWeatherIcon = (forecast, isNight = false) => {
  if (!forecast) return Cloud;
  
  const lowerForecast = forecast.toLowerCase();

  // Check for specific weather conditions
  if (lowerForecast.includes('thunder') || lowerForecast.includes('storm')) {
    return CloudLightning;
  }
  if (lowerForecast.includes('snow') || lowerForecast.includes('sleet') || lowerForecast.includes('ice')) {
    return CloudSnow;
  }
  if (lowerForecast.includes('rain') || lowerForecast.includes('shower') || lowerForecast.includes('drizzle')) {
    return CloudRain;
  }
  if (lowerForecast.includes('fog') || lowerForecast.includes('mist') || lowerForecast.includes('haze')) {
    return CloudFog;
  }
  if (lowerForecast.includes('wind')) {
    return Wind;
  }
  if (lowerForecast.includes('partly cloudy') || lowerForecast.includes('mostly sunny')) {
    return isNight ? CloudMoon : CloudSun;
  }
  if (lowerForecast.includes('cloudy') || lowerForecast.includes('overcast')) {
    return Cloud;
  }
  if (lowerForecast.includes('sunny') || lowerForecast.includes('clear')) {
    return isNight ? Moon : Sun;
  }

  // Default to cloud
  return Cloud;
};

/**
 * Get weather condition color based on forecast
 * @param {string} forecast - The weather forecast text
 * @returns {string} - Tailwind color class
 */
export const getWeatherColor = (forecast) => {
  if (!forecast) return 'text-white';
  
  const lowerForecast = forecast.toLowerCase();

  if (lowerForecast.includes('thunder') || lowerForecast.includes('storm')) {
    return 'text-purple-300';
  }
  if (lowerForecast.includes('snow') || lowerForecast.includes('sleet')) {
    return 'text-blue-200';
  }
  if (lowerForecast.includes('rain') || lowerForecast.includes('shower')) {
    return 'text-blue-300';
  }
  if (lowerForecast.includes('sunny') || lowerForecast.includes('clear')) {
    return 'text-yellow-300';
  }

  return 'text-white';
};
