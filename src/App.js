import React, { Component } from 'react';
import SearchForm from './components/layout/SearchForm';
import WeatherCard from './components/weather/WeatherCard';

import { Provider } from './context';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="container">
            <SearchForm />
            <WeatherCard />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
