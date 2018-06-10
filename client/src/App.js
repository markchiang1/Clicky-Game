import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import characterSeed from '../../../scripts/characterSeed.js'
import heroes from './heroes.json'
import CharacterCard from "./Components/CharacterCard.js";

class App extends Component {

  state = {
    heroes,
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
    
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to League of Legend's Clicky Game</h2>
        </div>
        <p className="App-intro">
          Click on an image to earn points, but don't click on any more than once!
        </p>
        {this.state.heroes.map(hero => (
          <CharacterCard
            name = {hero.name}
            image = {hero.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
