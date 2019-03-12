import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      const { name, country } = action.payload.city;
      const { list } = action.payload;
      return {
        ...state,
        city: name,
        country,
        list,
        currentWeather: {
          condition: list[0].weather[0].description,
          temperature: (((list[0].main.temp - 273.15) * 9) / 5 + 32).toFixed(0),
          humidity: list[0].main.humidity,
          wind: list[0].wind.speed,
          icon: list[0].weather[0].icon
        },
        error: ''
      };
    case 'RESET_FORM':
      return {
        ...state,
        city: '',
        country: '',
        list: '',
        currentWeather: '',
        error: ''
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    city: '',
    country: '',
    list: '',
    currentWeather: '',
    error: '',
    convertToUppercase: function(string) {
      return string
        .split(' ')
        .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
        .join(' ');
    },
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
