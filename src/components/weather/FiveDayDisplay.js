import React from 'react';

const FiveDayDisplay = props => {
  const { forecast } = props;

  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <div className="d-flex justify-content-center row-hl">
      <div className="item-hl">
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">
              {week[forecast[0].dayOne.date.getDay()]}
            </div>
            <img
              src={`http://openweathermap.org/img/w/${
                forecast[0].dayOne.icon
              }.png`}
              alt=""
            />
            <h4>{forecast[0].dayOne.temperature}° F</h4>
          </div>
        </div>
      </div>

      <div className="item-hl">
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">
              {week[forecast[1].dayTwo.date.getDay()]}
            </div>
            <img
              src={`http://openweathermap.org/img/w/${
                forecast[1].dayTwo.icon
              }.png`}
              alt=""
            />
            <h4>{forecast[1].dayTwo.temperature}° F</h4>
          </div>
        </div>
      </div>

      <div className="item-hl">
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">
              {week[forecast[2].dayThree.date.getDay()]}
            </div>
            <img
              src={`http://openweathermap.org/img/w/${
                forecast[2].dayThree.icon
              }.png`}
              alt=""
            />
            <h4>{forecast[2].dayThree.temperature}° F</h4>
          </div>
        </div>
      </div>

      <div className="item-hl">
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">
              {week[forecast[3].dayFour.date.getDay()]}
            </div>
            <img
              src={`http://openweathermap.org/img/w/${
                forecast[3].dayFour.icon
              }.png`}
              alt=""
            />
            <h4>{forecast[3].dayFour.temperature}° F</h4>
          </div>
        </div>
      </div>

      <div className="item-hl">
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">
              {week[forecast[4].dayFive.date.getDay()]}
            </div>
            <img
              src={`http://openweathermap.org/img/w/${
                forecast[4].dayFive.icon
              }.png`}
              alt=""
            />
            <h4>{forecast[4].dayFive.temperature}° F</h4>
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
