import React from 'react';

const FiveDayDisplay = props => {
  const { days } = props;
  return (
    <div className="row">
      {days.map(day => {
        return (
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">{console.log(day)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FiveDayDisplay;
