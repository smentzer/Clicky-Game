//sets up the reusable Navbar component
import React, { Component } from "react";
import "./style.css";

class Score extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <div>
          <h1 className="itemLeft">Test Your Memory</h1>
		<h2>Click on any image to earn a point, but don't click on the same picture more than once.</h2>
          <h2 className="itemRight">Score: {this.props.score}</h2>
          </div>
      </nav>
    );
  }
}

export default Score;