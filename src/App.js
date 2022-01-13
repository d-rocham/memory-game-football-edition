import './App.css';
import Aside from './components/Aside';
import Gameboard from './components/Gameboard';
import laf from './data/laf';


function App() {
  console.log(laf.length);
  const getClubs = (/* ARG1: level (number of clubs), AR2: league (object to take the clubs from) */) => {

    const getRandomID = () => { //TODO: 25 is arbitrary, it has to be updated to the number of clubs in selected league
      return Math.floor(Math.random() * 26);
    }

    const generateRandomClubList = () => {
      let levelIds = [];

      for (let i = 0; i < 8; i++) {//TODO: i< num has to be dynamic, depends on current level

        // Generate list of random, unique clubs w. length determined by level
        let randomid;
        do {
          // Prevent repeated id's in list
          randomid = getRandomID();
        } while (levelIds.includes(randomid));

        levelIds.push(randomid)
      }

      return levelIds;
    }

    return generateRandomClubList().map(id => laf[id]); //TODO: source array will be 2 argument, league chosen by user
  }

  console.log(getClubs());


  return (
    <div className="App grid grid-cols-10 h-screen">
      <Aside />
      <Gameboard></Gameboard>
    </div>
  );
}

export default App;
