# Weather Dashboard

A responsive weather dashboard built with Vue.js that displays current weather conditions and forecasts for any location.

## 🚀 Setup Instructions

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:RawanAbdullah-20/weather-dashboard.git
   cd weather-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment variables:
   Create a `.env` file in the root directory and add your Weather API credentials:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   VITE_WEATHER_API_BASE_URL=https://api.weatherapi.com/v1
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 🛠️ Tech Stack

### Frontend Framework
- **Vue.js 3** 
- **TypeScript** 
- **Vite** 

### Styling & UI
- **Tailwind CSS** 
- **Vue Icons** 

### State Management & Routing
- **Pinia** 
- **Vue Router** 

### HTTP Client & API Integration
- **Axios** 
- **WeatherAPI.com** 

## ✨ Features Implemented

### Core Features
- [x] **Current Weather Display** - Real-time weather conditions for selected locations
- [x] **Location-based Weather** - Automatic detection using IP geolocation
- [x] **Search Functionality** - Search weather by city name or coordinates
- [x] **Forecast Data** - 5-day daily forecast and 24-hour hourly forecast
- [x] **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- [x] **Theme Switching** - Easy switching between multiple themes
- [x] **Error Handling** - Graceful error handling with user-friendly messages
- [x] **Type Safety** - Full TypeScript integration with proper type definitions
- [x] **Loading States** - Smooth loading animations during data fetching
