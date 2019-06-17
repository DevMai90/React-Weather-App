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
                  <div
                    className="port-item bg-secondary text-white w-100 p-4"
                    data-toggle="collapse"
                    data-target="#currentWeather"
                  >
                    <span>Current Weather</span>
                  </div>
                  <div
                    className="port-item bg-warning text-white w-100 p-4"
                    data-toggle="collapse"
                    data-target="#todayForecast"
                  >
                    <span>12-Hour Forecast</span>
                  </div>
                  <div
                    className="port-item bg-info text-white w-100 p-4"
                    data-toggle="collapse"
                    data-target="#fiveDayForecast"
                  >
                    <span>5-Day Forecast</span>
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
