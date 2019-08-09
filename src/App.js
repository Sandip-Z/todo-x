import React from 'react';
import './App.css';
import Display from './Components/Display'
import Fill from './Components/Fill' 
import RandomGetApi from './Components/RandomGetApi'


function App() {
  return (
    <div className="App">
    <RandomGetApi />
    <Display />
    <Fill />
    </div>
  );
}

export default App;
