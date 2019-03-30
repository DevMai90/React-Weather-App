import React, { Component } from 'react';
import { Consumer } from '../../context';

class CurrentWeather extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { convertToUppercase } = value;
          const {
            condition,
            temperature,
            humidity,
            wind,
            icon
          } = value.currentWeather;

          return (
            <div className="row justify-content-center py-1">
              <div className="col-5">
                <div className="card border-primary">
                  <div className="row align-items-center">
                    <div className="col-md-5 text-center">
                      <h2 className="display-4">
                        <strong>{temperature}° F</strong>
                      </h2>
                    </div>
                    <div className="col-md-7">
                      <p style={{ marginBottom: 0 }}>
                        {convertToUppercase(condition)}
                        <img
                          src={`http://openweathermap.org/img/w/${icon}.png`}
                          alt=""
                        />
                      </p>
                      <p style={{ margin: 0 }}>Humidity: {humidity}%</p>
                      <p style={{ marginTop: 0 }}>Wind Speed: {wind} MPH</p>
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
