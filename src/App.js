import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
      <div className="container my-3">
        <h2>News Monkey - Top Headlines</h2>
        <News />
          <div>
          </div>
      </div>
      </>
    );
  }
}
