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
              {!error ? (
                city && (
                  <div className="card">
                    <h5 className="card-header">{`${city}, ${country}`}</h5>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item">
                          {`Temperature: ${temperature}`}
                        </li>
                        <li className="list-group-item">
                          {`Description: ${description}`}
                        </li>
                        <li className="list-group-item">{`Humidity: ${humidity}`}</li>
                      </ul>
                    </div>
                  </div>
                )
              ) : (
                <h3 className="text-danger">{error}</h3>
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default WeatherCard;
