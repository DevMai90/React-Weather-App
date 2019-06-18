import React, { Component } from 'react';
import { Consumer } from '../../context';
import TodayForecast from './TodayForecast';
import FiveDayForecast from './FiveDayForecast';
import CurrentWeather from './CurrentWeather';

class WeatherDashboard extends Component {
  state = { openSections: {} };

  componentDidMount() {
    this.setState({
      openSections: {
        currentForecast: true
      }
    });
  }
  onClick = e => {
    this.setState({
      openSections: {
        [e.target.dataset.text]: !this.state.openSections[e.target.dataset.text]
      }
    });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { city, error } = value;
          const {
            currentForecast,
            todayForecast,
            fiveDayForecast
          } = this.state.openSections;

          if (city) {
            return (
              <div>
                <div className="d-flex flex-row align-items-stretch text-center">
                  <div
                    className="port-item bg-secondary text-white w-100 p-4"
                    // data-toggle="collapse"
                    // data-target="#currentForecast"
                    data-text="currentForecast"
                    onClick={this.onClick}
                  >
                    <span data-text="currentForecast">Current Weather</span>
                  </div>
                  <div
                    className="port-item bg-warning text-white w-100 p-4"
                    // data-toggle="collapse"
                    // data-target="#todayForecast"
                    data-text="todayForecast"
                    onClick={this.onClick}
                  >
                    <span data-text="fiveDayForecast">12-Hour Forecast</span>
                  </div>
                  <div
                    className="port-item bg-info text-white w-100 p-4"
                    // data-toggle="collapse"
                    // data-target="#fiveDayForecast"
                    data-text="fiveDayForecast"
                    onClick={this.onClick}
                  >
                    <span data-text="fiveDayForecast">5-Day Forecast</span>
                  </div>
                </div>
                <CurrentWeather isOpen={currentForecast} />
                <TodayForecast isOpen={todayForecast} />
                <FiveDayForecast isOpen={fiveDayForecast} />
              </div>
            );
          } else {
            return (
              <div className="text-center">
                <small className="text-danger text-center">{error}</small>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default WeatherDashboard;
