import { gamesData as data } from './gamesData.jsx'
import './Games.css'
import GameCard from './GameCard/GameCard.jsx'

const Games = () => {
    return <>
        <main>
            <h1>Games</h1>
            <div className='all-games'>
                {data.map( (game, index) => (
                    <GameCard key={index} {...game} />
                ))}
            </div>
        </main>
    </>
}

export default Games
