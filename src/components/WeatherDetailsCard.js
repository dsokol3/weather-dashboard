/**
 * WeatherDetailsCard Component
 * - Grid of detail cards showing additional weather info
 * - Displays wind, humidity, etc. when available
 */
import React from 'react';
import { Wind, Droplets, Thermometer, Eye } from 'lucide-react';
import { Card, CardContent } from './ui/Card';

const DetailItem = ({ icon: Icon, label, value }) => (
  <Card className="hover:bg-white/20 transition-colors">
    <CardContent className="p-4 flex items-center gap-3">
      <div className="p-2 rounded-lg bg-white/10">
        <Icon className="h-5 w-5 text-white/80" />
      </div>
      <div>
        <p className="text-xs text-white/60 uppercase tracking-wide">{label}</p>
        <p className="text-lg font-semibold text-white">{value}</p>
      </div>
    </CardContent>
  </Card>
);

const WeatherDetailsCard = ({ period }) => {
  if (!period) return null;

  // Extract details from the detailed forecast if available
  const details = [
    {
      icon: Thermometer,
      label: 'Feels Like',
      value: `${period.temperature}°${period.temperatureUnit}`,
    },
    {
      icon: Droplets,
      label: 'Precipitation',
      value: period.probabilityOfPrecipitation?.value 
        ? `${period.probabilityOfPrecipitation.value}%` 
        : 'N/A',
    },
    {
      icon: Wind,
      label: 'Wind',
      value: `${period.windSpeed} ${period.windDirection}`,
    },
    {
      icon: Eye,
      label: 'Conditions',
      value: period.shortForecast.split(' ').slice(0, 2).join(' '),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-slide-up">
      {details.map((detail, index) => (
        <DetailItem key={index} {...detail} />
      ))}
    </div>
  );
};

export default WeatherDetailsCard;
