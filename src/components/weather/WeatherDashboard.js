import React, { Component } from 'react';
import { Consumer } from '../../context';
import TodayForecast from './TodayForecast';
import FiveDayForecast from './FiveDayForecast';
import CurrentWeather from './CurrentWeather';

class WeatherDashboard extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { city, error } = value;

          if (city) {
            return (
              <div className="container">
                <CurrentWeather />
                <TodayForecast />
                <FiveDayForecast />
              </div>
            );
          } else {
            return (
              <div className="text-center">
                <small className="text-danger text-center">{error}</small>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default WeatherDashboard;
