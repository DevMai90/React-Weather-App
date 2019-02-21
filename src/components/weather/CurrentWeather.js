import React from 'react';

const CurrentWeather = props => {
  return (
    <div className="d-flex justify-content-center row-hl">
      <div className="item-hl p-3 align-self-center">
        <h2 className="display-3">
          <strong>{props.temperature}° F</strong>
        </h2>
      </div>

      <div className="item-hl p-3">
        <h4>
          {props.condition}
          <img
            src={`http://openweathermap.org/img/w/${props.icon}.png`}
            alt=""
          />
        </h4>
        <h4>Humidity: {props.humidity}%</h4>
        <h4>Wind Speed: {props.wind} MPH</h4>
      </div>
    </div>
  );
};

export default CurrentWeather;
