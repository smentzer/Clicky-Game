//sets up the reusable footer component
import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      	<footer className="footer">
	<div>
  <a href="https://github.com/smentzer">Mentzer &copy;</a>
    </div>
	</footer>
    );
  }
};

export default Footer;