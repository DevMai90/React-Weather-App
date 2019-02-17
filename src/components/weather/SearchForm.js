import React, { Component } from 'react';
import { TextInput } from '../layout/TextInput';
import WeatherCard from '../weather/WeatherCard';
import API_KEY from '../../APIKeys';
import axios from 'axios';

class SearchForm extends Component {
  state = {
    cityName: '',
    countryName: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  getWeather = async e => {
    e.preventDefault();

    const { cityName, countryName } = this.state;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${
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
        <form onSubmit={this.getWeather} className="mb-3">
          <div className="row">
            <TextInput
              type="text"
              label="City"
              name="cityName"
              placeholder="Enter city name..."
              value={this.state.cityName}
              onChange={this.onChange}
            />
            <TextInput
              type="text"
              label="Country"
              name="countryName"
              placeholder="Enter country name..."
              value={this.state.countryName}
              onChange={this.onChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Search Weather Conditions
          </button>
        </form>
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
