import React from 'react';

const FiveDayDisplay = props => {
  const { forecast } = props;

  const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  return (
    <div className="d-flex justify-content-around row-hl">
      {forecast.map(day => {
        let date = new Date(day.dt_txt).getDay();
        return (
          <div className="item-hl" key={date}>
            <div
              className="card text-center border-primary"
              style={{ width: '150px', height: '200px' }}
            >
              <div className="card-body">
                <h4>{week[date]}</h4>

                <img
                  src={`http://openweathermap.org/img/w/${
                    day.weather[0].icon
                  }.png`}
                  alt=""
                />
                <h4>
                  {(((day.main.temp - 273.15) * 9) / 5 + 32).toFixed(0)}° F
                </h4>
                <p>{day.weather[0].description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FiveDayDisplay;
