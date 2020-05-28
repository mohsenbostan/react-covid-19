import React from 'react';
import './App.css';
import Covid from "./components/Covid";
class App extends React.Component {

  render() {
    return (
        <div className="App">
          <div className="container">
              <h1>Covid 19 Live Status</h1>
              <Covid />
          </div>
        </div>
    )
  }
}

export default App;
