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
          const {
            condition,
            temperature,
            humidity,
            wind,
            icon
          } = value.currentWeather;
          return (
            <React.Fragment>
              {city ? (
                <div className="container">
                  <CurrentWeather
                    temperature={temperature}
                    condition={condition}
                    humidity={humidity}
                    wind={wind}
                    icon={icon}
                  />
                  <FiveDayForecast />
                </div>
              ) : (
                <h3 className="text-danger text-center">{error}</h3>
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default WeatherDashboard;
