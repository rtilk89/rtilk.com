import React, { Component } from 'react';
import NavBar from './components/header';
import About from './components/about';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App
