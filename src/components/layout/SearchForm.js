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

  onResetClick = (dispatch, e) => {
    e.preventDefault();

    this.setState({ zipcode: '' });

    dispatch({
      type: 'RESET_FORM'
    });
    console.log(e);
  };

  getWeather = async (dispatch, e) => {
    e.preventDefault();
    const { zipcode } = this.state;

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${
          API_KEY.weatherAPI
        }`
      );

      dispatch({ type: 'UPDATE_LOCATION', payload: res.data });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        payload: 'Please enter a valid US zip code.'
      });
    }
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, error } = value;
          return (
            <div className="d-flex row-hl justify-content-center">
              <form
                className="form-inline mb-2 item-hl"
                onSubmit={this.getWeather.bind(this, dispatch)}
              >
                <TextInput
                  type="text"
                  name="zipcode"
                  placeholder="Enter Zip Code..."
                  value={this.state.zipcode}
                  onChange={this.onChange}
                  error={error}
                />
                <button className="btn btn-outline-primary mx-2">Search</button>
                <div
                  className="btn btn-outline-secondary item-hl"
                  onClick={this.onResetClick.bind(this, dispatch)}
                >
                  Reset Form
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchForm;
