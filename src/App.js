import React, { Component } from "react";
import Header from "./components/layout/Header";
import SearchForm from "./components/weather/SearchForm";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="React Weather Cards" />
        <div className="container">
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default App;
