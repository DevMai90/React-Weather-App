import React, { Component } from 'react';
import { Consumer } from '../../context';

class CurrentWeather extends Component {
  render() {
    // const { temperature, condition, icon, humidity, wind, convert } = props;
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
            <div className="d-sm-flex justify-content-center row-hl">
              <div className="item-hl p-3 align-self-center">
                <h2 className="display-3">
                  <strong>{temperature}° F</strong>
                </h2>
              </div>
              <div className="item-hl p-3">
                <h5>
                  {convertToUppercase(condition)}
                  <img
                    src={`http://openweathermap.org/img/w/${icon}.png`}
                    alt=""
                  />
                </h5>
                <h5>Humidity: {humidity}%</h5>
                <h5>Wind Speed: {wind} MPH</h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default CurrentWeather;
