import Button from "./Button";
import Scoreboard from "./Scoreboard";

const Aside = () => {

    return (
        <div className="aside col-span-2 flex flex-col justify-evenly shadow-2xl">
            <h1 className="font-rocknrollone text-3xl text-center ">Memory Game: Football Edition</h1>
            <div className="buttonContainer flex flex-col px-3">
                <Button content={"Change League"}></Button>
                <Button content={"Restart"}></Button>
            </div>
            <Scoreboard></Scoreboard>
        </div>
    )
}

export default Aside;