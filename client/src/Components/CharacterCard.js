import React, {Component} from 'react'

// import characters from '../../scripts/characterSeed.js' 

const CharacterCard = props => (
    <div className="card">
      <div className="img-container" style="width: 18rem">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  )

export default CharacterCard