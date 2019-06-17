import React, { Component } from 'react';
import { Consumer } from '../../context';
import CurrentWeather from '../weather/CurrentWeather';
import Header from './Header';
import SearchForm from './SearchForm';

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
                  <div className="col">
                    <div className="d-flex flex-column">
                      <Header />
                      <SearchForm />
                    </div>
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
