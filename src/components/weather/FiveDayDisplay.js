import React from 'react';

const FiveDayDisplay = props => {
  const { forecast } = props;

  const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return (
    <div className="d-flex justify-content-around row-hl">
      <div className="item-hl">
        <div className="card text-center border-primary">
          <div className="card-body" style={{ width: '200px' }}>
            <div className="card-title text-center">
              <h4>{week[forecast[0].dayOne.date.getDay()]}</h4>
            </div>
            <img
              src={`http://openweathermap.org/img/w/${
                forecast[0].dayOne.icon
              }.png`}
              alt=""
            />
            <h4>{forecast[0].dayOne.temperature}° F</h4>
            <h5>{forecast[0].dayOne.condition}</h5>
          </div>
        </div>
      </div>

      <div className="item-hl">
        <div className="card text-center border-primary">
          <div className="card-body" style={{ width: '200px' }}>
            <div className="card-title text-center">
              <h4>{week[forecast[1].dayTwo.date.getDay()]}</h4>
            </div>
            <img
              src={`http://openweathermap.org/img/w/${
                forecast[1].dayTwo.icon
              }.png`}
              alt=""
            />
            <h4>{forecast[1].dayTwo.temperature}° F</h4>
            <h5>{forecast[1].dayTwo.condition}</h5>
          </div>
        </div>
      </div>

      <div className="item-hl">
        <div className="card text-center border-primary">
          <div className="card-body" style={{ width: '200px' }}>
            <div className="card-title text-center">
              <h4>{week[forecast[2].dayThree.date.getDay()]}</h4>
            </div>
            <img
              src={`http://openweathermap.org/img/w/${
                forecast[2].dayThree.icon
              }.png`}
              alt=""
            />
            <h4>{forecast[2].dayThree.temperature}° F</h4>
            <h5>{forecast[2].dayThree.condition}</h5>
          </div>
        </div>
      </div>

      <div className="item-hl">
        <div className="card text-center border-primary">
          <div className="card-body" style={{ width: '200px' }}>
            <div className="card-title text-center">
              <h4>{week[forecast[3].dayFour.date.getDay()]}</h4>
            </div>
            <img
              src={`http://openweathermap.org/img/w/${
                forecast[3].dayFour.icon
              }.png`}
              alt=""
            />
            <h4>{forecast[3].dayFour.temperature}° F</h4>
            <h5>{forecast[3].dayFour.condition}</h5>
          </div>
        </div>
      </div>

      <div className="item-hl">
        <div className="card text-center border-primary">
          <div className="card-body" style={{ width: '200px' }}>
            <div className="card-title text-center">
              <h4>{week[forecast[4].dayFive.date.getDay()]}</h4>
            </div>
            <img
              src={`http://openweathermap.org/img/w/${
                forecast[4].dayFive.icon
              }.png`}
              alt=""
            />
            <h4>{forecast[4].dayFive.temperature}° F</h4>
            <h5>{forecast[4].dayFive.condition}</h5>
          </div>
        </div>
      </div>

      {/* {fiveDayList.map(day => {
        return (
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">{console.log(day)}</div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default FiveDayDisplay;
