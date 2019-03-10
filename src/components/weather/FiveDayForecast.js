import React, { Component } from 'react';
import { Consumer } from '../../context';
import FiveDayDisplay from './FiveDayDisplay';

class FiveDayForecast extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { list } = value;
          let dailyForecast = [];

          for (let i = 0; i < list.length; i += 8) {
            dailyForecast.push(list[i]);
          }

          return (
            <div className="container">
              <div className="card mt-2 mb-3">
                <div className="card-body bg-primary text-white text-center">
                  <h3 className="display-4">Five Day Forecast</h3>
                  {console.log(dailyForecast)}
                </div>
              </div>
              <FiveDayDisplay forecast={dailyForecast} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default FiveDayForecast;
