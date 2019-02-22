import React, { Component } from 'react';
import { Consumer } from '../../context';

class FiveDayForecast extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { list } = value;
          const daily = list.map(day => {
            return {
              condition: day.weather[0].description,
              temperature: (((day.main.temp - 273.15) * 9) / 5 + 32).toFixed(0),
              humidity: day.main.humidity,
              wind: day.wind.speed,
              icon: day.weather[0].icon
            };
          });

          // COLLECT THE DAILY TEMP AND PUT INTO A SEPARATE ARRAY. TRY ARRAY POSITION OR MATCH THE TIMES
          const fiveDayForecast = [];

          return (
            <div className="card mt-5 mb-3">
              <div className="card-body bg-primary text-white text-center">
                <h3>Five Day Forecast</h3>
                <p>{console.log(daily)}</p>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default FiveDayForecast;
