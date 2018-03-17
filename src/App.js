import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import RootPage from './components/RootPage';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RootPage />
        </header>
      </div>
    );
  }
}

export default App;
