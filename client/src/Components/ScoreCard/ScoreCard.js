import React, { Component, Fragment } from "react"
import "./ScoreCard.css"

class ScoreCard extends Component {
    render() {
        return (
            <Fragment>
                {/* {console.log("Score Card Component")} */}
                <div>
                    High Score: {this.props.highScore}
                </div>
                <div>
                    Current Score: {this.props.currentScore}
                </div>
            </Fragment>
        )
    }
}

export default ScoreCard