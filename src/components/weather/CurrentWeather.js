import React, { Component } from 'react';
import { Consumer } from '../../context';
import convertUppercase from '../../utils/convertUppercase';
import convertTemp from '../../utils/convertTemp';
import convertTime from '../../utils/convertTime';
import convertWindDirection from '../../utils/convertWindDirection';
import Moment from 'react-moment';

class CurrentWeather extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const current = value.list[0];
          const condition = current.weather[0].description,
            temperature = convertTemp(current.main.temp),
            lowTemp = convertTemp(current.main.temp_min),
            highTemp = convertTemp(current.main.temp_max),
            humidity = current.main.humidity,
            wind = (current.wind.speed * 2.23694).toFixed(2),
            icon = current.weather[0].icon,
            time = convertTime(),
            direction = convertWindDirection(current.wind.deg);

          return (
            <div id="currentWeather" className="collapse show">
              {console.log(direction)}
              {console.log(current.wind.deg)}
              <div className="card card-body bg-secondary">
                <div className="row">
                  <div className="col-7 mx-auto">
                    <div className="card card-body">
                      <h4 className="text-center m-0 p-0">
                        <Moment format="MMMM Do YYYY" />
                      </h4>

                      <div className="row">
                        <div className="col-md-6 align-self-center">
                          <div className="card-body text-center align-self-center p-0 m-0">
                            <h2 className="">
                              <strong>{temperature}° F</strong>
                            </h2>
                            <p className="my-0">
                              Low: {lowTemp} | High: {highTemp}
                            </p>
                            <small>As of: {time}</small>
                          </div>
                        </div>

                        <div className="col-md-6 align-self-center">
                          <div className="card-body align-self-center pt-0 mt-2">
                            <img
                              className="my-0"
                              src={`https://openweathermap.org/img/w/${icon}.png`}
                              alt=""
                            />
                            <p className="m-0">{convertUppercase(condition)}</p>
                            <p className="m-0">Humidity: {humidity}%</p>
                            <p className="m-0">Wind Speed: {wind} MPH</p>
                            <p className="mt-0">Wind Direction: {direction}</p>
                          </div>
                        </div>
                      </div>

                      {/* <div className="d-flex justify-content-center">
                        <div className="card-body text-center align-self-center p-0 m-0">
                          <h2 className="">
                            <strong>{temperature}° F</strong>
                          </h2>
                          <small>As of: {time}</small>
                        </div>
                        <div className="card-body align-self-center pt-0">
                          <img
                            className="my-0"
                            src={`https://openweathermap.org/img/w/${icon}.png`}
                            alt=""
                          />
                          <p className="m-0">{convertUppercase(condition)}</p>
                          <p className="m-0">Humidity: {humidity}%</p>
                          <p className="mt-0">Wind Speed: {wind} MPH</p>
                        </div>
                      </div> */}
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
