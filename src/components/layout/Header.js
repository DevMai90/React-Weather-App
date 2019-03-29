import React, { Component } from 'react';
import { Consumer } from '../../context';
import classnames from 'classnames';

class Header extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { city, country, error } = value;

          return (
            <div className="container">
              <div className="card mt-5 mb-3">
                <div
                  className={classnames(
                    'card-body bg-primary text-white text-center',
                    { 'bg-danger': error }
                  )}
                >
                  <h1 className="display-3">
                    {city ? `${city}, ${country}` : 'Weather Conditions'}
                  </h1>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Header;
