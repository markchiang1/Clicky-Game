import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
// import characterSeed from '../../../scripts/characterSeed.js'
import heroes from "./heroes.json"
import { CharacterCard, Wrapper, ScoreCard } from "./Components/index.js";

class App extends Component {

  state = {
    heroes,
    currentScore: 0,
    highScore: 0
  }

  shuffleCards = isClicked => {
    // console.log('cards are shuffling!!!')

    var i, j, x
    // if(this.checkState()===false){
    for (i = heroes.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      x = heroes[i]
      heroes[i] = heroes[j]
      heroes[j] = x
    }
    this.setState({ heroes: heroes })
    this.handleScore(isClicked)
  }

  handleScore = isClicked => {
    let score;
    if (isClicked=== false) {
      if (this.state.highScore <= this.state.currentScore) {
        score = this.state.currentScore + 1
        let highScore = this.state.highScore + 1
        this.setState({ currentScore: score, highScore: highScore })
      }
      else {
        score = this.state.currentScore + 1;
        this.setState({ currentScore: score})
      }
    }
    else {
      this.setState({currentScore:0})
    }
  }

  render() {
    return (
      <Fragment>
        <div className="App">
          <div className="App-header">

            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to League of Legend's Clicky Game</h2>
          </div>
          <p className="App-intro">
            Click on an image to earn points, but don't click on any more than once!
        </p>
          <ScoreCard
            highScore={this.state.highScore}
            currentScore={this.state.currentScore}
          />
          <Wrapper>
            {this.state.heroes.map(hero => (
              <CharacterCard
                name={hero.name}
                image={hero.image}
                onClick={this.shuffleCards}
                key={hero.name}
              />
            ))}
          </Wrapper>
        </div>
      </Fragment>
    );
  }
}

export default App
