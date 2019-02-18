import React, { Component } from 'react';
import { TextInput } from './TextInput';
import API_KEY from '../../APIKeys';
import axios from 'axios';
import { Consumer } from '../../context';

class SearchForm extends Component {
  state = {
    zipcode: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  getWeather = async (dispatch, e) => {
    e.preventDefault();

    const { zipcode } = this.state;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${
          API_KEY.weatherAPI
        }`
      );

      dispatch({ type: 'UPDATE_LOCATION', payload: res.data });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        payload:
          'There has been an error with your request. Please review inputs.'
      });
    }
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, city, country } = value;
          return (
            <React.Fragment>
              <div className="d-flex flex-column justify-content-center">
                <div className="card mt-5 mb-3">
                  <div className="card-body bg-primary text-white text-center">
                    <h3 className="display-3">
                      {city ? `${city}, ${country}` : 'Weather Conditions'}
                    </h3>
                  </div>
                </div>

                {!city ? (
                  <form
                    className="form-inline mb-2 justify-content-center"
                    onSubmit={this.getWeather.bind(this, dispatch)}
                  >
                    <TextInput
                      type="text"
                      name="zipcode"
                      placeholder="Enter Zip Code..."
                      value={this.state.zipcode}
                      onChange={this.onChange}
                    />
                    <button className="btn btn-outline-primary mx-2">
                      Search
                    </button>
                  </form>
                ) : null}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchForm;
