import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  const { main, name, sys, weather } = action.payload;

  switch (action.type) {
    case 'UPDATE_LOCATION':
      return {
        ...state,
        temperature: (((main.temp - 273.15) * 9) / 5 + 32).toFixed(0),
        city: name,
        country: sys.country,
        humidity: main.humidity,
        description: weather[0].description,
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
    error: '',
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
