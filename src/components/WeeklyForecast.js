/**
 * WeeklyForecast Component
 * - Vertical list showing weekly forecast
 * - Displays day/night pairs for each day
 * - Shows temperature range and conditions
 */
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Separator } from './ui/Separator';
import { Badge } from './ui/Badge';
import { getWeatherIcon } from '../utils/weatherIcons';
import { ChevronRight } from 'lucide-react';

const ForecastRow = ({ period, isLast }) => {
  const WeatherIcon = getWeatherIcon(period.shortForecast);
  const isNight = period.name.toLowerCase().includes('night') || 
                  period.name.toLowerCase().includes('tonight');

  // Get precipitation badge variant
  const getPrecipVariant = (value) => {
    if (!value) return null;
    if (value >= 70) return 'danger';
    if (value >= 40) return 'warning';
    if (value > 0) return 'info';
    return null;
  };

  const precipValue = period.probabilityOfPrecipitation?.value;
  const precipVariant = getPrecipVariant(precipValue);

  return (
    <>
      <div className="flex items-center justify-between py-4 group hover:bg-white/5 px-2 -mx-2 rounded-lg transition-colors cursor-default">
        {/* Left: Day name and icon */}
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <WeatherIcon className={`h-8 w-8 flex-shrink-0 ${isNight ? 'text-indigo-300' : 'text-yellow-300'}`} />
          <div className="min-w-0">
            <p className="font-medium text-white truncate">{period.name}</p>
            <p className="text-sm text-white/60 truncate">{period.shortForecast}</p>
          </div>
        </div>

        {/* Right: Temperature and precipitation */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {precipVariant && (
            <Badge variant={precipVariant} className="hidden sm:flex">
              💧 {precipValue}%
            </Badge>
          )}
          <p className={`text-2xl font-bold ${isNight ? 'text-indigo-200' : 'text-white'}`}>
            {period.temperature}°
          </p>
          <ChevronRight className="h-4 w-4 text-white/30 group-hover:text-white/60 transition-colors" />
        </div>
      </div>
      {!isLast && <Separator />}
    </>
  );
};

const WeeklyForecast = ({ periods }) => {
  if (!periods || periods.length === 0) return null;

  return (
    <Card className="animate-slide-up">
      <CardHeader>
        <CardTitle className="text-lg">7-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {periods.map((period, index) => (
          <ForecastRow 
            key={index} 
            period={period} 
            isLast={index === periods.length - 1}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default WeeklyForecast;
