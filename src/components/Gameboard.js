import Card from "./Card";

const Gameboard = () => {
    return (
        <div className="col-start-3 col-span-8 h-screen p-2 bg-blue-50 grid grid-cols-4 grid-rows-2 gap-2 justify-items-stretch items-stretch">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />


        </div>
    )
}

export default Gameboard;