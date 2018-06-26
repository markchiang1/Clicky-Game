import React, {Component} from 'react'
import './CharacterCard.css'
// import characters from '../../scripts/characterSeed.js' 

class CharacterCard extends Component {
  state = {
    clicked: false
  }

  // firstClick(){
  //   this.state.clicked=true;
  // }

  checkState = () => {
    var isClicked = this.state.clicked
    console.log(isClicked)
    if(isClicked){
     alert('You already clicked that!')
    }
    else{
      this.setState({clicked:true})
      console.log(this.state.clicked)
    }
  }

  // onClick = {this.checkState}
  render(){
    return (
      <span className="card">
        <span className="card-img" style={{width: "18rem"}} onClick = {this.checkState}>
          <img alt={this.props.name} src={this.props.image} onClick={this.props.onClick}/>
        </span>
      </span>
    )
  }  
}

export default CharacterCard