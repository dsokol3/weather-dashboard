/**
 * HourlyForecast Component
 * - Horizontal scrollable forecast cards
 * - Shows next several forecast periods
 * - Uses ScrollArea for smooth scrolling
 */
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { ScrollArea } from './ui/ScrollArea';
import { Badge } from './ui/Badge';
import { getWeatherIcon } from '../utils/weatherIcons';

const ForecastItem = ({ period, isNight }) => {
  const WeatherIcon = getWeatherIcon(period.shortForecast, isNight);

  return (
    <div className="flex-shrink-0 snap-start w-28">
      <Card className="h-full hover:bg-white/20 transition-colors">
        <CardContent className="p-4 text-center">
          {/* Period name */}
          <p className="text-xs text-white/70 font-medium mb-2 truncate">
            {period.name}
          </p>
          
          {/* Weather icon */}
          <WeatherIcon className="h-10 w-10 mx-auto mb-2 text-white" />
          
          {/* Temperature */}
          <p className="text-2xl font-bold text-white mb-1">
            {period.temperature}°
          </p>
          
          {/* Precipitation badge if applicable */}
          {period.probabilityOfPrecipitation?.value > 0 && (
            <Badge variant="info" className="text-[10px] px-1.5">
              💧 {period.probabilityOfPrecipitation.value}%
            </Badge>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const HourlyForecast = ({ periods }) => {
  if (!periods || periods.length === 0) return null;

  return (
    <Card className="animate-slide-up">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Extended Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="pb-2">
          <div className="flex gap-3">
            {periods.map((period, index) => (
              <ForecastItem 
                key={index} 
                period={period}
                isNight={period.name.toLowerCase().includes('night')}
              />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default HourlyForecast;
