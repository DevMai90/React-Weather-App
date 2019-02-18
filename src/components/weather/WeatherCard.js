import React, { Component } from 'react';
import { Consumer } from '../../context';

class WeatherCard extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {
            temperature,
            city,
            humidity,
            description,
            icon,
            wind,
            error
          } = value;

          return (
            <React.Fragment>
              {city ? (
                <React.Fragment>
                  <div className="d-flex justify-content-center row-hl">
                    <div className="item-hl p-3 align-self-center">
                      <h2 className="display-3">
                        <strong>{temperature}° F</strong>
                      </h2>
                    </div>

                    <div className="item-hl p-3">
                      <h4>
                        {description}
                        <img
                          src={`http://openweathermap.org/img/w/${icon}.png`}
                          alt=""
                        />
                      </h4>
                      <h4>Humidity: {humidity}%</h4>
                      <h4>Wind Speed: {wind} MPH</h4>
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                <h3 className="text-danger text-center">{error}</h3>
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default WeatherCard;
