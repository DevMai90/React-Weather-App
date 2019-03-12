import React from 'react';

const CurrentWeather = props => {
  const { temperature, condition, icon, humidity, wind, convert } = props;
  return (
    <div className="d-flex justify-content-center row-hl">
      <div className="item-hl p-3 align-self-center">
        <h2 className="display-3">
          <strong>{temperature}° F</strong>
        </h2>
      </div>
      <div className="item-hl p-3">
        <h5>
          {convert(condition)}
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
        </h5>
        <h5>Humidity: {humidity}%</h5>
        <h5>Wind Speed: {wind} MPH</h5>
      </div>
    </div>
  );
};

export default CurrentWeather;
