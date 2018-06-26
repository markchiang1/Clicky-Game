import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import characterSeed from '../../../scripts/characterSeed.js'
import heroes from './heroes.json'
import {CharacterCard, Wrapper} from "./Components/index.js";

class App extends Component {

  state = {
    heroes,
  }

  shuffleCards = () => {
    console.log('cards are shuffling!!!')
    
    var i, j, x
    // if(this.checkState()===false){
        for (i= heroes.length-1; i>0; i--){
          j = Math.floor(Math.random()*(i+1)) 
          x = heroes[i]
          heroes[i] = heroes[j]
          heroes[j] = x
        }
      console.log(heroes)
      this.setState({heroes: heroes})
    // }

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

        <Wrapper>
        {this.state.heroes.map(hero => (
          <CharacterCard
            name = {hero.name}
            image = {hero.image}
            onClick = {this.shuffleCards}
            key = {hero.name}
          />
        ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
