import React, { Component, Fragment } from 'react';
import { Consumer } from '../../context';
import TodayForecastDisplay from './TodayForecastDisplay';

class TodayForecast extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { list } = value;
          let todayForecast = list.slice(0, 5);

          return (
            <Fragment>
              <div className="card mt-2 bm-1">
                <div className="card-body bg-primary text-white text-center">
                  <h3 className="display-4">Today's Forecast</h3>
                </div>
              </div>
              <TodayForecastDisplay forecast={todayForecast} />
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default TodayForecast;
