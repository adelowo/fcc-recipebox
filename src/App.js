import React, { Component } from 'react';
import './App.css';
import RecipeBoard from "./RecipeBoard";
import {ensureLocalStorageIsAvailable} from "./Storage"

class App extends Component {

  componentWillMount() {
    ensureLocalStorageIsAvailable()
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React RecipeBoard</h2>
          
        </div>
        <p className="App-intro">
          <RecipeBoard />
        </p>
      </div>
    );
  }
}

export default App;
