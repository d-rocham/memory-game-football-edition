const Card = ({ club, onSelection }) => {
    return (
        <div className="card flex flex-col items-center justify-evenly shadow-md bg-white" onClick={() => onSelection(club.id)}>
            <div className="w-3/4 h-3/4">
                <img src={process.env.PUBLIC_URL + `assets/laf/${club.filename}.png`} alt="" className="object-scale-down" />
            </div>
            <p className="font-urbanist text-2xl text-center">{club.name}</p>
        </div >
    )

}

export default Card;