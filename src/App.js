import React, { Component } from 'react';
import Header from './components/layout/Header';
import SearchForm from './components/layout/SearchForm';
import WeatherCard from './components/weather/WeatherCard';
import Footer from './components/layout/Footer';

import { Provider } from './context';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="container">
            <Header />
            <SearchForm />
            <WeatherCard />
            <Footer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
