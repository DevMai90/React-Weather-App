import React, { Component } from 'react';
import Header from './components/layout/Header';
import SearchForm from './components/layout/SearchForm';
import WeatherDashboard from './components/weather/WeatherDashboard';
import Footer from './components/layout/Footer';

import { Provider } from './context';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <SearchForm />
          <WeatherDashboard />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
