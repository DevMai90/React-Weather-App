import React, { Component, Fragment } from 'react';
import { Consumer } from '../../context';
import FiveDayDisplay from './FiveDayDisplay';
import PropTypes from 'prop-types';

class FiveDayForecast extends Component {
  render() {
    const { isOpen } = this.props;

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
              {isOpen && (
                <Fragment>
                  <div className="card card-body bg-info">
                    <div className="row">
                      <div className="col-10 mx-auto">
                        <div className="card card-body">
                          <h4 className="text-center m-0">5-Day Forecast</h4>
                          <FiveDayDisplay forecast={dailyForecast} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
              {/* <div className="card mt-2 mb-1">
                <div className="card-body bg-primary text-white text-center">
                  <h3 className="display-4">Five Day Forecast</h3>
                </div>
              </div>
              <FiveDayDisplay forecast={dailyForecast} /> */}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

FiveDayForecast.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default FiveDayForecast;
