import React, { Component } from 'react';
import { Consumer } from '../../context';
import FiveDayDisplay from './FiveDayDisplay';

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
              icon: day.weather[0].icon,
              date: new Date(day.dt * 1000)
            };
          });
          // Need to fix key error
          const fiveDayList = [
            { dayOne: daily[0] },
            { dayTwo: daily[8] },
            { dayThree: daily[16] },
            { dayFour: daily[24] },
            { dayFive: daily[32] }
          ];

          // COLLECT THE DAILY TEMP AND PUT INTO A SEPARATE ARRAY. TRY ARRAY POSITION OR MATCH THE TIMES

          return (
            <React.Fragment>
              <div className="card mt-3 mb-3">
                <div className="card-body bg-primary text-white text-center">
                  <h3>Five Day Forecast</h3>
                </div>
              </div>
              <FiveDayDisplay forecast={fiveDayList} />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default FiveDayForecast;
