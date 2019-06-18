import React, { Fragment } from 'react';

const SearchZip = ({ error, value, onChange, onResetClick }) => {
  return (
    <Fragment>
      <input
        type="text"
        className="form-control"
        name="zipcode"
        placeholder="Or Enter Zip Code..."
        value={value}
        onChange={onChange}
        error={error}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-primary" type="submit">
          <i className="fas fa-search" />
          <span className="d-none d-sm-inline"> Search</span>
        </button>
      </div>
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={onResetClick}
        >
          <i className="fas fa-undo" />
          <span className="d-none d-md-inline"> Reset</span>
        </button>
      </div>
    </Fragment>
  );
};

export default SearchZip;
