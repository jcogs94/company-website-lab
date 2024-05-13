const GameCard = ({ name, description, image }) => {
    return <>
        <div className="game-card">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{description}</p>
        </div>
    </>
}

export default GameCard
