import React from 'react';
import convertTemp from '../../utils/convertTemp';
import convertUppercase from '../../utils/convertUppercase';
import PropTypes from 'prop-types';

const FiveDayDisplay = ({ forecast }) => {
  const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  return (
    <div className="row">
      {forecast.map(day => {
        let date = new Date(day.dt_txt).getDay();
        let shortDate = day.dt_txt.substring(5, 10);
        return (
          <div className="col-xs-auto mx-auto" key={date}>
            <div
              className="card text-center border-primary item-hl mt-2"
              style={{ width: '150px', height: '225px' }}
              key={date}
            >
              <div className="card-body">
                <h4>{week[date]}</h4>
                <small>{shortDate}</small>
                <br />
                <img
                  src={`https://openweathermap.org/img/w/${
                    day.weather[0].icon
                  }.png`}
                  alt=""
                />
                <p>{convertTemp(day.main.temp)}° F</p>
                <p>{convertUppercase(day.weather[0].description)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

FiveDayDisplay.propTypes = {
  forecast: PropTypes.array.isRequired
};

export default FiveDayDisplay;
