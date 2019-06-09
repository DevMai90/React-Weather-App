import React, { Component } from 'react';
import API_KEY from '../../APIKeys';
import axios from 'axios';
import { Consumer } from '../../context';
import classnames from 'classnames';
import Spinner from './Spinner';

class SearchForm extends Component {
  state = {
    zipcode: '',
    coordinates: ''
  };

  componentDidMount() {
    this.findGeolocation();
    // console.log(this.findGeolocation());
    // this.setState({ coordinates: this.findGeolocation() });
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
    const { zipcode } = this.state;

    dispatch({ type: 'LOADING' });

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${
          API_KEY.weatherAPI
        }`
        // `https://api.openweathermap.org/data/2.5/weather?lat=37.409287899999995&lon=-121.8839901&appid=${
        //   API_KEY.weatherAPI
        // }`
      );

      dispatch({ type: 'UPDATE_LOCATION', payload: res.data });
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

      this.setState({ coordinates: latitude });
    };

    const error = () => {
      return console.log('Unable to retrieve location');
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

          if (loading) {
            return <Spinner />;
          } else {
            return (
              <div className="d-flex row-hl justify-content-center">
                <form
                  className="form-inline mb-2"
                  onSubmit={this.getWeather.bind(this, dispatch)}
                >
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
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-primary"
                          onClick={this.findGeolocation}
                        >
                          Locate
                        </button>
                      </div>
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
                  {/* {console.log(navigator.geolocation.getCurrentPosition())} */}
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
