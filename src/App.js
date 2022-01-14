import './App.css';
import Aside from './components/Aside';
import Gameboard from './components/Gameboard';
import laf from './data/laf';
import { useState } from 'react';
import { createContext } from 'react';

function App() {
  //TODO: useState for chosen league (useEffect as well)

  return (
    <div className="App grid grid-cols-10 h-screen">
      <Aside />
      <Gameboard selectedLeague={laf} level={8}></Gameboard>
    </div>
  );
}

export default App;
