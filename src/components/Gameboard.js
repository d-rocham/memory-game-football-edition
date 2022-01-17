import Card from "./Card";
import { useState } from "react";

const Gameboard = ({ selectedLeague, level }) => {

    const getClubs = () => {

        const getRandomID = () => {
            return Math.floor(Math.random() * 26);
        }

        const generateRandomClubList = () => {
            let levelIds = [];

            for (let i = 0; i < level; i++) {
                // Generate list of random, unique clubs w. length determined by level
                let randomid;

                // Prevent repeated id's in list
                do {
                    randomid = getRandomID();
                } while (levelIds.includes(randomid));

                levelIds.push(randomid)
            }

            return levelIds;
        }

        return generateRandomClubList().map(id => selectedLeague[id]);
    }

    const [clubs, setClubs] = useState(() => getClubs())

    const reArrangeClubs = () => {

        let arr = [...clubs];

        let currentIndex = clubs.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * clubs.length);
            currentIndex--;

            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];

            setClubs([...arr]);
        }
    }

    const clickedItems = [];

    const reactToClick = (id) => {
        clickedItems.includes(id) ?
            console.log("Restart game!") :
/*             gameScores.upgradeScore();
 */        clickedItems.push(id);

        reArrangeClubs(); //TODO: This should only happen if clicked card isn't in clickedItems
    }

    return (
        /* TODO: Grid size depends on current level. */
        <div className="col-start-3 col-span-8 h-screen p-2 bg-blue-50 grid grid-cols-4 grid-rows-2 gap-2 justify-items-stretch items-stretch">
            {clubs.map(club => <Card club={club} key={club.id} onSelection={reactToClick} />)}
        </div>
    )
}

export default Gameboard;