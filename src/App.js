import React, { Component } from 'react';
import SearchForm from './components/layout/SearchForm';

import { Provider } from './context';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="container">
            <SearchForm />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
