import { historyData as data } from './historyData.jsx'
import './History.css'

const History = () => {
    return <>
        <main>
            <h1>{data.name} History</h1>
            <div className="history-group">
                <h2>{data.location}</h2>
                <img src="https://t4.ftcdn.net/jpg/03/09/63/11/240_F_309631114_EnfdvPLKkFzz9oXoOuyQ38aOD37rqNcu.jpg" alt="texas-holdem" />
                <div id='offerings'>
                    <h3>Founded in {data.establishmentDate}, our casino offers:</h3>
                    <ul>
                        {data.notableFeatures.map( (feature, index) => <li key={index}>{feature}</li>)}
                    </ul>
                </div>
            </div>
            <div className="history-group">
                <h2>Beginnings</h2>
                <img src="https://t4.ftcdn.net/jpg/03/96/13/05/240_F_396130502_olBPwohAIeirgu4eZ4nPU9ES2GA7WrfB.jpg" alt="beginnings-of-casino" />
                <p>{data.goldenAge}</p>
            </div>
            <div className="history-group">
                <h2>Modernization</h2>
                <img src="https://t3.ftcdn.net/jpg/03/99/90/44/240_F_399904475_Hrq2woVTwbjw9QSORRtX8pJ1cT5q1Eh8.jpg" alt="casino-machines" />
                <p>{data.modernization}</p>
            </div>
            <div className="history-group">
                <h2>Today</h2>
                <p>{data.legacy}</p>
                <div id='events'>
                <img src="https://as1.ftcdn.net/v2/jpg/02/79/12/88/1000_F_279128870_7sCAoknyAQmHtaDBTq9byKKJVw0mTHnQ.jpg" alt="casino-guests" />
                    <h3>Recent Events</h3>
                    <ul>
                        {data.signatureEvents.map( (event, index) => <li key={index}>{event}</li>)}
                    </ul>
                </div>
            </div>
        </main>
    </>
}

export default History
