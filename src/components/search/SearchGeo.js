import React from 'react';

const SearchGeo = ({ onResetClick }) => {
  return (
    <div className="form-group">
      <div className="input-group">
        <div className="btn-group" role="group">
          <button className="btn btn-outline-primary ">
            Search By Current Location
          </button>
          <button className="btn btn-outline-secondary" onClick={onResetClick}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchGeo;
