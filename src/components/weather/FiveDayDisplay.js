import React from 'react';

const FiveDayDisplay = props => {
  const { forecast, convert } = props;

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
                  src={`http://openweathermap.org/img/w/${
                    day.weather[0].icon
                  }.png`}
                  alt=""
                />
                <p>{(((day.main.temp - 273.15) * 9) / 5 + 32).toFixed(0)}° F</p>
                <p>{convert(day.weather[0].description)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FiveDayDisplay;
