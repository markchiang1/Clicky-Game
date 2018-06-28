import React, { Component, Fragment } from "react"
import "./ScoreCard.css"

class ScoreCard extends Component {
    render() {
        return (
            <Fragment>
                {console.log("Score Card Component")}
                <div>
                    Current Score: {this.props.currentScore}
                </div>
            </Fragment>
        )
    }
}