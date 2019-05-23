import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import classnames from 'classnames';

class Header extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { city, country, error, loading } = value;

          return (
            <div className="container">
              <div className="card mt-5 mb-3">
                <div
                  className={classnames(
                    'card-body bg-primary text-white text-center',
                    { 'bg-danger': error }
                  )}
                >
                  {loading ? (
                    <Spinner color="text-white" />
                  ) : (
                    <h1 className="display-4">
                      {city ? `${city}, ${country}` : 'Weather Conditions'}
                    </h1>
                  )}
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
