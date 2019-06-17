import React, { Component } from 'react';
import { Consumer } from '../../context';
import CurrentWeather from '../weather/CurrentWeather';
import Header from './Header';

class Dashboard extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { city, error } = value;

          return (
            <div className="container">
              <header className="mt-3" id="main-header">
                <div className="row no-gutters">
                  <div className="col-lg-4 col-md-5">
                    {city && <CurrentWeather />}
                  </div>
                  <div className="col-lg-8 col-md-5">
                    <Header />
                  </div>
                </div>
              </header>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Dashboard;
