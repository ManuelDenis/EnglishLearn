import React, { Component } from 'react';
import { HashRouter, Routes, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename="">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
