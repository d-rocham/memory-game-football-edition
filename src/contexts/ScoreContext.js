import { createContext, useState } from "react";

export const ScoreContext = createContext();

const ScoreContextProvider = (props) => {
    const [scores, setScore] = useState({
        current: 0,
        highest: 0
    })

    /*ATTENTION: setScores functions might not work as setState replaces previous obj with new. 
        > User clicks and scores point
        > Call to updateCurrent
        > UpdateCurrent adds a point
        > UpdateCurrent calls to checkHighest
        > If Current is more than Highest, replace
    */

    const updateCurrentScore = () => {
        setScore({ ...scores, current: ++scores.current })
        checkHighest();
        return;
    }

    const checkHighest = () => {
        if (scores.current > scores.highest)
            setScore({ ...scores, highest: scores.current });
    }

    const resetCurrentScore = () => {
        setScore({ ...scores, current: 0 });
    }

    return (
        <ScoreContext.Provider value={{ scores, updateCurrentScore, resetCurrentScore }}>
            {props.children}
        </ScoreContext.Provider>
    )
}

export default ScoreContextProvider;