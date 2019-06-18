import React, { Fragment } from 'react';
import classnames from 'classnames';

const SearchZip = ({ error, value, onChange, onResetClick }) => {
  return (
    // <div className="form-group">
    // <div className="input-group">
    <Fragment>
      <input
        type="text"
        className={classnames('form-control', {
          'is-invalid': error
        })}
        name="zipcode"
        placeholder="Or Enter Zip Code..."
        value={value}
        onChange={onChange}
        error={error}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-primary ">Search</button>
      </div>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" onClick={onResetClick}>
          Reset
        </button>
      </div>
    </Fragment>
    // </div>
    // </div>
  );
};

export default SearchZip;
