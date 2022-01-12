import './App.css';
import Aside from './components/Aside';
import Gameboard from './components/Gameboard';

function App() {
  return (
    <div className="App grid grid-cols-10 h-screen">
      <Aside />
      <Gameboard></Gameboard>
    </div>
  );
}

export default App;
