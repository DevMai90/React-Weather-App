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
            country,
            humidity,
            description,
            error
          } = value;

          return (
            <React.Fragment>
              {city ? (
                <div className="text-center">
                  <h2 className="display-3">
                    {' '}
                    <strong>{temperature}° F</strong>
                  </h2>
                  <h4>{description}</h4>
                  <h4>Humidity: {humidity}%</h4>
                </div>
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
