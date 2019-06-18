import React, { Component, Fragment } from 'react';
import { Consumer } from '../../context';
import TodayForecastDisplay from './TodayForecastDisplay';
import PropTypes from 'prop-types';

class TodayForecast extends Component {
  render() {
    const { isOpen } = this.props;
    return (
      <Consumer>
        {value => {
          const { list } = value;
          let todayForecast = list.slice(0, 5);

          return (
            <Fragment>
              {isOpen && (
                <Fragment>
                  <div className="card card-body bg-warning">
                    <div className="row">
                      <div className="col-10 mx-auto">
                        <div className="card card-body">
                          <h4 className="text-center m-0">12-Hour Forecast</h4>
                          <TodayForecastDisplay forecast={todayForecast} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

TodayForecast.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default TodayForecast;
