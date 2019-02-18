import React, { Component } from 'react';
import Header from './components/layout/Header';
import SearchForm from './components/weather/SearchForm';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default App;
