import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreContext";


const Scoreboard = () => {
    const { scores } = useContext(ScoreContext);

    return (
        <div className="">
            <p className="font-urbanist text-lg text-center">Your current score is {scores.current}</p>
            <p className="font-urbanist text-lg text-center">Top score is {scores.highest}</p>
        </div>
    )
}

export default Scoreboard;