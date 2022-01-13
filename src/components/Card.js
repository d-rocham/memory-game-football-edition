let club = "boca";

const Card = () => {
    return (
        <div className="card flex flex-col items-center justify-evenly shadow-md bg-white">
            <div className="w-3/4 h-3/4">
                <img src={process.env.PUBLIC_URL + `assets/laf/${club}.png`} alt="" className="object-scale-down" />
            </div>
            <p className="font-urbanist text-2xl text-center">Boca Juniors</p>
        </div >
    )

}

export default Card;