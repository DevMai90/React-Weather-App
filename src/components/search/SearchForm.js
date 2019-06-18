import React, { Component, Fragment } from 'react';
import API_KEY from '../../APIKeys';
import axios from 'axios';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import SearchGeo from './SearchGeo';
import SearchZip from './SearchZip';

class SearchForm extends Component {
  state = {
    zipcode: '',
    coordinates: null,
    findCoordinates: false
  };

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

        this.setState({
          ...this.state,
          coordinates: null
        });
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

  findGeolocation = (dispatch, e) => {
    e.preventDefault();

    dispatch({ type: 'LOADING' });

    const success = position => {
      this.setState({
        zipcode: '',
        coordinates: position.coords,
        findCoordinates: false
      });

      this.getWeather(dispatch, e);
    };

    const error = () => {
      this.setState({ findCoordinates: false });
      dispatch({ type: 'ERROR', payload: 'Geolocation must be enabled' });
    };

    if (!navigator.geolocation) {
      this.setState({ findCoordinates: false });
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

          return (
            <div className="border border-primary p-2">
              <div className="d-flex flex-row justify-content-center">
                {loading || this.state.findCoordinates ? (
                  <Spinner />
                ) : (
                  <Fragment>
                    {/* Work Here */}
                    <form
                      className="form-inline"
                      onSubmit={this.getWeather.bind(this, dispatch)}
                    >
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-outline-primary "
                              type="button"
                              onClick={this.findGeolocation.bind(
                                this,
                                dispatch
                              )}
                            >
                              Current Location
                            </button>
                          </div>
                          <SearchZip
                            error={error}
                            value={this.state.zipcode}
                            onChange={this.onChange}
                            dispatch={dispatch}
                            onResetClick={this.onResetClick.bind(
                              this,
                              dispatch
                            )}
                          />
                        </div>
                      </div>
                    </form>
                  </Fragment>
                )}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchForm;
