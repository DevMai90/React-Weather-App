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
              <div>
                <div className="d-flex flex-row align-items-stretch text-center">
                  <div className="bg-secondary text-white w-100 pt-1">
                    <h6>Current Weather</h6>
                  </div>
                  <div className="bg-warning text-white w-100 pt-1">
                    <h6>Current Weather</h6>
                  </div>
                  <div className="bg-info text-white w-100 pt-1">
                    <h6>Current Weather</h6>
                  </div>
                </div>
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
