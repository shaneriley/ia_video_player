import React, { Component } from 'react';
import './App.css';
import ListComponent from "./components/ListComponent";
import DetailsContainer from "./containers/Details";
import RelatedContainer from "./containers/Related";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={ListComponent} />
          <Route path="/details/:id" component={DetailsContainer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
