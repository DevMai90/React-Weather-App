import React, { Component } from 'react';
import Dashboard from './components/layout/Dashboard';
import Footer from './components/layout/Footer';

import { Provider } from './context';
import './bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Dashboard />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
