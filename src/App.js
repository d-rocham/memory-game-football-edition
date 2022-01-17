import './App.css';
import Aside from './components/Aside';
import Gameboard from './components/Gameboard';
import laf from './data/laf';
import ScoreContextProvider from './contexts/ScoreContext';

function App() {
  //TODO: useState for chosen league (useEffect as well)

  return (
    <div className="App grid grid-cols-10 h-screen">
      <ScoreContextProvider>
        <Aside />
        <Gameboard selectedLeague={laf} level={8}></Gameboard>
      </ScoreContextProvider>
    </div>
  );
}

export default App;
