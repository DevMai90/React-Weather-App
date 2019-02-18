import React, { Component } from 'react';
import { TextInput } from './TextInput';
import WeatherCard from '../weather/WeatherCard';
import API_KEY from '../../APIKeys';
import axios from 'axios';

class SearchForm extends Component {
  state = {
    zipcode: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  getWeather = async e => {
    e.preventDefault();

    const { zipcode } = this.state;

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${
          API_KEY.weatherAPI
        }`
      );

      const { main, name, sys, weather } = res.data;

      this.setState({
        temperature: (((main.temp - 273.15) * 9) / 5 + 32).toFixed(0),
        city: name,
        country: sys.country,
        humidity: main.humidity,
        description: weather[0].description,
        error: ''
      });

      console.log(res);
    } catch (e) {
      this.setState({
        cityName: '',
        countryName: '',
        error:
          'There has been an error with your request. Please review inputs.'
      });
    }
  };

  render() {
    const {
      temperature,
      city,
      country,
      humidity,
      description,
      error
    } = this.state;
    return (
      <React.Fragment>
        <div className="d-flex flex-column justify-content-center">
          <div className="card mt-5 mb-3">
            <div className="card-body bg-primary text-white text-center">
              <h3 className="display-3">
                {this.state.city
                  ? `${this.state.city}, ${this.state.country}`
                  : 'Weather Conditions'}
              </h3>
            </div>
          </div>

          {!this.state.city ? (
            <form
              className="form-inline mb-2 justify-content-center"
              onSubmit={this.getWeather}
            >
              <TextInput
                type="text"
                name="zipcode"
                placeholder="Enter Zip Code..."
                value={this.state.zipcode}
                onChange={this.onChange}
              />
              <button className="btn btn-outline-primary mx-2">Search</button>
            </form>
          ) : null}
        </div>

        <WeatherCard
          temperature={temperature}
          city={city}
          country={country}
          humidity={humidity}
          description={description}
          error={error}
        />
      </React.Fragment>
    );
  }
}

export default SearchForm;
