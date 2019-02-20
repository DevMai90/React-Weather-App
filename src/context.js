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
        temperature: list[0].weather[0].description,
        location: action.payload,
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
