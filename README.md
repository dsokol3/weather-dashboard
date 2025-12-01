# 🌤️ Weather Dashboard

A modern, responsive weather dashboard built with React and Tailwind CSS. Get accurate weather forecasts for any US location with beautiful dynamic backgrounds that change based on current conditions.

![Weather Dashboard](https://img.shields.io/badge/React-19.1.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Real-time Weather Data** - Powered by the National Weather Service API
- **Dynamic Backgrounds** - Background images change based on weather conditions (sunny, rainy, snowy, etc.)
- **7-Day Forecast** - View extended forecast with day/night periods
- **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- **Modern UI** - Glassmorphism cards with Tailwind CSS and shadcn-style components
- **Weather Icons** - Lucide icons for visual weather representation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Dynamic Backgrounds

The app automatically changes the background based on weather conditions:

| Condition | Background |
|-----------|------------|
| ☀️ Sunny | `sunny.jpg` |
| 🌤️ Partly Cloudy | `partlyCloudy.jpg` |
| ☁️ Cloudy | `cloudy.jpg` |
| 🌧️ Light Rain | `light_rain.jpg` |
| ⛈️ Storms | `rain.jpg` |
| ❄️ Snow | `snow.jpg` |
| 🌫️ Fog | `fog.jpg` |
| 🌙 Clear | `clear.jpg` |

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Tailwind CSS 4** - Utility-first CSS
- **Lucide React** - Icon library
- **National Weather Service API** - Weather data
- **Open-Meteo Geocoding API** - ZIP code to coordinates

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components (Card, Button, Input, etc.)
│   ├── SearchBar.js        # ZIP code search input
│   ├── HeroHeader.js       # Current weather display
│   ├── WeatherDetailsCard.js # Weather details grid
│   ├── HourlyForecast.js   # Horizontal scrollable forecast
│   ├── WeeklyForecast.js   # 7-day forecast list
│   └── ErrorAlert.js       # Error message display
├── utils/
│   └── weatherIcons.js     # Weather condition to icon mapping
├── lib/
│   └── utils.js            # Utility functions
├── App.js                  # Main application
└── App.css                 # Global styles
```

## 📝 Usage

1. Enter a US ZIP code in the search bar
2. Click "Search" or press Enter
3. View current conditions and extended forecast
4. Background automatically updates based on weather

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ and React
