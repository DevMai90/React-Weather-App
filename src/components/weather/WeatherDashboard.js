import React, { Component } from 'react';
import { Consumer } from '../../context';
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
                <FiveDayForecast />
              </div>
            );
          } else {
            return <h3 className="text-danger text-center">{error}</h3>;
          }
        }}
      </Consumer>
    );
  }
}

export default WeatherDashboard;
