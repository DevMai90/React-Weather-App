import React, { Component } from 'react';
import { Consumer } from '../../context';
import convertUppercase from '../../utils/convertUppercase';

class CurrentWeather extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {
            condition,
            temperature,
            humidity,
            wind,
            icon
          } = value.currentWeather;

          return (
            <div className="row">
              <div className="col-lg-6 m-auto">
                <div className="card border-primary">
                  <div className="row align-items-center">
                    <div className="col-lg-5 text-center p-lg-3 pb-sm-0">
                      <h3 className="display-4">
                        <strong>{temperature}° F</strong>
                      </h3>
                    </div>
                    <div className="col-lg-7 text-center text-lg-left">
                      <img
                        className="my-0"
                        src={`http://openweathermap.org/img/w/${icon}.png`}
                        alt=""
                      />
                      <p className="m-0">{convertUppercase(condition)}</p>
                      <p className="m-0">Humidity: {humidity}%</p>
                      <p className="mt-0">Wind Speed: {wind} MPH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default CurrentWeather;
