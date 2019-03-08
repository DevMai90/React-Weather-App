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
    <div className="d-flex justify-content-center row-hl">
      <div className="item-hl">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              {week[forecast[0].dayOne.date.getDay()]}
            </div>
          </div>
        </div>
      </div>

      <div className="item-hl">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              {week[forecast[1].dayTwo.date.getDay()]}
            </div>
          </div>
        </div>
      </div>

      <div className="item-hl">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              {week[forecast[2].dayThree.date.getDay()]}
            </div>
          </div>
        </div>
      </div>

      <div className="item-hl">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              {week[forecast[3].dayFour.date.getDay()]}
            </div>
          </div>
        </div>
      </div>

      <div className="item-hl">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              {week[forecast[4].dayFive.date.getDay()]}
            </div>
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
