import * as handlers from '../../assets/handlers.jsx'
import './Footer.css'

const Footer = () => {
    return <>
        <footer>
            <a onClick={handlers.ourHistory}>Our History</a>
            <a onClick={handlers.games}>Games</a>
            <a onClick={handlers.staff}>Staff</a>
            <a onClick={handlers.contactUs}>Contact Us</a>
            <div>
                {/* TODO: Add external links */}
            </div>
        </footer>
    </>
}

export default Footer
