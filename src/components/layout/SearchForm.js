import React, { Component } from 'react';
import API_KEY from '../../APIKeys';
import axios from 'axios';
import { Consumer } from '../../context';
import Spinner from './Spinner';
import SearchGeo from './SearchGeo';
import SearchZip from './SearchZip';

class SearchForm extends Component {
  state = {
    zipcode: '',
    coordinates: null,
    findCoordinates: true
  };

  componentDidMount() {
    this.findGeolocation();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onResetClick = (dispatch, e) => {
    e.preventDefault();

    this.setState({ zipcode: '' });

    dispatch({
      type: 'RESET_FORM'
    });
  };

  getWeather = async (dispatch, e) => {
    e.preventDefault();
    const { zipcode, coordinates } = this.state;

    dispatch({ type: 'LOADING' });

    try {
      if (this.state.coordinates) {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${
            coordinates.latitude
          }&lon=${coordinates.longitude}&appid=${API_KEY.weatherAPI}`
        );

        dispatch({ type: 'UPDATE_LOCATION', payload: res.data });
      } else {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${
            API_KEY.weatherAPI
          }`
        );

        dispatch({ type: 'UPDATE_LOCATION', payload: res.data });
      }
    } catch (e) {
      dispatch({
        type: 'ERROR',
        payload: 'Please enter a valid US zip code.'
      });
    }
  };

  findGeolocation = () => {
    const success = position => {
      this.setState({ coordinates: position.coords, findCoordinates: false });
    };

    const error = () => {
      this.setState({ findCoordinates: false });

      console.log('Unable to retrieve location');
    };

    if (!navigator.geolocation) {
      return console.log('Geolocation is unavailable');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, error, loading } = value;

          if (loading || this.state.findCoordinates) {
            return <Spinner />;
          } else {
            return (
              <div className="border border-primary p-2">
                <div className="d-flex flex-row justify-content-center">
                  <form
                    className="form-inline"
                    onSubmit={this.getWeather.bind(this, dispatch)}
                  >
                    {this.state.coordinates ? (
                      <SearchGeo
                        onResetClick={this.onResetClick.bind(this, dispatch)}
                      />
                    ) : (
                      <SearchZip
                        error={error}
                        value={this.state.zipcode}
                        onChange={this.onChange}
                        dispatch={dispatch}
                        onResetClick={this.onResetClick.bind(this, dispatch)}
                      />
                    )}
                  </form>
                </div>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default SearchForm;
