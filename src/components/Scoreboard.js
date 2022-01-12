const Scoreboard = ({ currentScore, bestScore }) => {
    return (
        <div className="">
            <p className="font-urbanist text-lg text-center">Your current score is {currentScore}</p>
            <p className="font-urbanist text-lg text-center">Top score is {bestScore}</p>
        </div>
    )
}

export default Scoreboard;