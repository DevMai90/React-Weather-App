import React, { Component } from 'react';
import API_KEY from '../../APIKeys';
import axios from 'axios';
import { Consumer } from '../../context';
import classnames from 'classnames';
import Spinner from './Spinner';
import SearchGeo from './SearchGeo';

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
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(`${latitude}, ${longitude}`);
      console.log(position.coords);

      this.setState({ coordinates: position.coords, findCoordinates: false });
    };

    const error = () => {
      console.log('Unable to retrieve location');

      this.setState({ findCoordinates: false });
    };

    if (!navigator.geolocation) {
      return 'Geolocation is unavailable';
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
              <div className="d-flex row-hl justify-content-center">
                <form
                  className="form-inline mb-2"
                  onSubmit={this.getWeather.bind(this, dispatch)}
                >
                  {this.state.coordinates ? (
                    <SearchGeo />
                  ) : (
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="text"
                          className={classnames('form-control', {
                            'is-invalid': error
                          })}
                          name="zipcode"
                          placeholder="Enter Zip Code..."
                          value={this.state.zipcode}
                          onChange={this.onChange}
                          error={error}
                        />
                        <div className="input-group-append">
                          <button className="btn btn-outline-primary ">
                            Search
                          </button>
                        </div>
                        {/* <div className="input-group-append">
                        <button
                          className="btn btn-outline-primary"
                          onClick={this.findGeolocation}
                        >
                          Locate
                        </button>
                      </div> */}
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary"
                            onClick={this.onResetClick.bind(this, dispatch)}
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default SearchForm;
