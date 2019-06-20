## React-Weather-App

This is weather forecast application that displays the current weather status, 12-hour forecast, and 5-day forecast. Location is queried based on your geolocation or manually searching a US based zip code.

Global state is managed by React's Context API. Weather information is saved to global state and is accessed by the various weather components as needed.

The App is composed of the following components:

- Header - A heading that is updated with the current location
- SearchForm - Allows the user to search via the built-in browser geolocation API or search by a US zip code.
- WeatherDashboard - Primary component that houses the CurrentWeather, TodayForecast, and FiveDayForecast component. Also manages local state to toggle between the three components.
- CurrentWeather - Displays the current weather based on location.
- TodayForecast - Gathers 12 hours of information from global state and passed into TodayDisplay component.
- TodayDisplay - Maps 12-hour forcast into five cards.
- FiveDayForecast - Gathers 5 days of information from global state and passed into FiveDayDisplay component.
- FiveDayDisplay - Maps 5-day forecast into five cards.

## Motivation

The purpose of this app is to get myself familiarized with working in ReactJS, making API requests, handling API responses, manipulating data, using various libraries, and solving unforeseen quirks along the way.

The end goal is to have a functional app displaying the information needed in an organized manner.

### Built With:

- ReactJS - JavaScript library for building user interfaces
- Bootstrap 4 - CSS Framework
- Axios - Promise based HTTP client for the browser
- OpenWeather API - Provides weather information
- GitHub Pages - Static web publishing directly from GitHub repository
