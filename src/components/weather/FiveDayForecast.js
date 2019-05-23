import React, { Component, Fragment } from 'react';
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
            <Fragment>
              <div className="card mt-2 mb-1">
                <div className="card-body bg-primary text-white text-center">
                  <h3 className="display-4">Five Day Forecast</h3>
                </div>
              </div>
              <FiveDayDisplay forecast={dailyForecast} />
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default FiveDayForecast;
