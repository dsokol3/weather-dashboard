/**
 * Weather Dashboard App
 * 
 * REDESIGN CHANGES:
 * - Imported new modular components (SearchBar, HeroHeader, etc.)
 * - Added loading state for better UX during API calls
 * - Organized layout into sections: Hero, Details, Hourly, Weekly
 * - Preserved all original API logic and data flow
 * - Dynamic background still changes based on weather conditions
 */
import React, { useState, useEffect } from "react";
import './App.css';

// Import new modular components
import {
  SearchBar,
  HeroHeader,
  WeatherDetailsCard,
  HourlyForecast,
  WeeklyForecast,
  ErrorAlert,
} from './components';

function App() {
  // PRESERVED: Original state variables unchanged
  const [zipCode, setZipCode] = useState("");
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  
  // NEW: Loading state for better UX during API calls
  const [isLoading, setIsLoading] = useState(false);

  /**
   * PRESERVED: Original background selection logic
   * Maps weather descriptions to background images
   */
  const getBackgroundImage = (description) => {
    if (!description) return "/clear.jpg";
    description = description.toLowerCase();

    if (
      description.includes("rain") ||
      description.includes("shower") ||
      description.includes("thunder") ||
      description.includes("storm") ||
      description.includes("drizzle") ||
      description.includes("wet")
    )
      return "/rain.jpg";

    if (
      description.includes("partly cloudy") ||
      description.includes("mostly cloudy")
    )
      return "/partlyCloudy.jpg";

    if (description.includes("cloud") || description.includes("overcast"))
      return "/cloudy.jpg";

    if (
      description.includes("sun") ||
      description.includes("clear") ||
      description.includes("bright") ||
      description.includes("sunny") ||
      description.includes("Mostly Sunny")
    )
      return "/clear.jpg";

    if (
      description.includes("snow") ||
      description.includes("sleet") ||
      description.includes("blizzard") ||
      description.includes("flurry")
    )
      return "/snow.jpg";

    if (
      description.includes("fog") ||
      description.includes("mist") ||
      description.includes("haze") ||
      description.includes("smoke")
    )
      return "/fog.jpg";

    return "/clear.jpg";
  };

  /**
   * PRESERVED: Original API fetch logic
   * 1. Geocodes ZIP code to lat/lon
   * 2. Gets NWS point info
   * 3. Fetches forecast data
   * ENHANCED: Added loading state management
   */
  const fetchForecast = async () => {
    if (!zipCode) {
      setError("Please enter a ZIP code.");
      setForecast(null);
      return;
    }

    setError("");
    setIsLoading(true); // NEW: Start loading

    try {
      // 1. Get lat/lon from ZIP
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${zipCode}&count=1`
      );
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0) {
        setError("Invalid ZIP code. Please try again.");
        setForecast(null);
        setIsLoading(false);
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];

      // 2. Get NWS point info
      const pointRes = await fetch(
        `https://api.weather.gov/points/${latitude},${longitude}`
      );
      const pointData = await pointRes.json();
      const forecastUrl = pointData.properties.forecast;

      // 3. Get forecast (7+ periods)
      const forecastRes = await fetch(forecastUrl);
      const forecastData = await forecastRes.json();

      // 4. Save all periods (usually 14 half-day periods)
      setForecast({
        name,
        periods: forecastData.properties.periods,
      });
    } catch (err) {
      console.error(err);
      setError("Failed to fetch forecast. Please try again.");
      setForecast(null);
    } finally {
      setIsLoading(false); // NEW: Stop loading
    }
  };

  // PRESERVED: Dynamic background based on current weather
  const backgroundImage =
    forecast && forecast.periods && forecast.periods.length > 0
      ? getBackgroundImage(forecast.periods[0].shortForecast)
      : "/clear.jpg";

  // PRESERVED: Effect to update body background
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }, [backgroundImage]);

  // NEW: Split periods for different UI sections
  const currentPeriod = forecast?.periods?.[0] || null;
  const hourlyPeriods = forecast?.periods?.slice(0, 6) || []; // First 6 periods for horizontal scroll
  const weeklyPeriods = forecast?.periods?.slice(0, 14) || []; // All available periods for weekly view

  return (
    /* REDESIGNED: New layout structure with Tailwind classes */
    <div className="min-h-screen w-full relative">
      {/* Dark overlay for better text readability over background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with title and search */}
        <header className="pt-8 pb-4 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 drop-shadow-lg">
            Weather Dashboard
          </h1>
          
          {/* Search bar component */}
          <SearchBar
            zipCode={zipCode}
            setZipCode={setZipCode}
            onSearch={fetchForecast}
            isLoading={isLoading}
          />
        </header>

        {/* Main content area */}
        <main className="flex-1 px-4 pb-8 max-w-4xl mx-auto w-full space-y-6">
          {/* Error alert */}
          {error && (
            <ErrorAlert 
              message={error} 
              onDismiss={() => setError("")} 
            />
          )}

          {/* Weather content - only shown when forecast is available */}
          {forecast && forecast.periods && forecast.periods.length > 0 && (
            <>
              {/* Hero section: Current weather prominently displayed */}
              <section>
                <HeroHeader 
                  location={forecast.name} 
                  currentPeriod={currentPeriod} 
                />
              </section>

              {/* Weather details cards grid */}
              <section>
                <WeatherDetailsCard period={currentPeriod} />
              </section>

              {/* Hourly forecast horizontal scroll */}
              <section>
                <HourlyForecast periods={hourlyPeriods} />
              </section>

              {/* Weekly forecast list */}
              <section>
                <WeeklyForecast periods={weeklyPeriods} />
              </section>
            </>
          )}

          {/* Empty state when no forecast is loaded */}
          {!forecast && !error && !isLoading && (
            <div className="text-center py-12">
              <p className="text-white/70 text-lg">
                Enter a ZIP code above to get the weather forecast
              </p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="py-4 text-center text-white/50 text-sm">
          <p>Powered by National Weather Service API</p>
        </footer>
      </div>
    </div>
  );
}

export default App;  