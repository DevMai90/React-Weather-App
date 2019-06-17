import React, { Component } from 'react';
import { Consumer } from '../../context';
import Header from './Header';
import SearchForm from '../search/SearchForm';
import WeatherDashboard from '../weather/WeatherDashboard';

class Dashboard extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="container">
              <header className="mt-3" id="main-header">
                <div className="row no-gutters">
                  <div className="col">
                    <div className="d-flex flex-column">
                      <Header />
                      <SearchForm />
                      <WeatherDashboard />
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
