import React from 'react';
import convertTemp from '../../utils/convertTemp';
import convertUppercase from '../../utils/convertUppercase';
import PropTypes from 'prop-types';

const TodayForecastDisplay = ({ forecast }) => {
  return (
    <div className="row">
      {forecast.map(hour => {
        let shortDate = hour.dt_txt.substring(5, 10);
        let milTime = new Date(`${hour.dt_txt} UTC`).getHours();
        let time;
        if (milTime <= 12) time = `${milTime}:00AM`;
        else time = `${milTime - 12}:00PM`;

        return (
          <div className="col-xs-auto mx-auto" key={time}>
            <div
              className="card text-center border-primary item-hl mt-2"
              style={{ width: '150px', height: '225px' }}
            >
              <div className="card-body">
                <h4>{shortDate}</h4>
                <small>{time}</small>
                <br />
                <img
                  src={`https://openweathermap.org/img/w/${
                    hour.weather[0].icon
                  }.png`}
                  alt=""
                />
                <p>{convertTemp(hour.main.temp)}° F</p>
                <p>{convertUppercase(hour.weather[0].description)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

TodayForecastDisplay.propTypes = {
  forecast: PropTypes.array.isRequired
};

export default TodayForecastDisplay;
