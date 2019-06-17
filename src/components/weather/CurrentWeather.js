import React, { Component } from 'react';
import { Consumer } from '../../context';
import convertUppercase from '../../utils/convertUppercase';
import convertTemp from '../../utils/convertTemp';

class CurrentWeather extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const current = value.list[0];
          const condition = current.weather[0].description,
            temperature = convertTemp(current.main.temp),
            humidity = current.main.humidity,
            wind = current.wind.speed,
            icon = current.weather[0].icon;

          return (
            <div id="currentWeather" className="collapse show">
              <div className="card card-body bg-secondary">
                <div className="row">
                  <div className="col-7 mx-auto">
                    <div className="card card-body">
                      <div className="d-flex justify-content center">
                        <div className="card-body text-center align-self-center p-0 m-0">
                          <h2 className="">
                            <strong>{temperature}° F</strong>
                          </h2>
                          <p>As of: </p>
                        </div>
                        <div className="card-body align-self-center">
                          <img
                            className="my-0"
                            src={`https://openweathermap.org/img/w/${icon}.png`}
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
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default CurrentWeather;
