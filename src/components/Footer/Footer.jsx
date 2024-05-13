import App from '../../App.jsx'
import './Footer.css'

const Footer = ({ handler }) => {
    return <>
        <footer>
            <a onClick={() => handler('history')}>Our History</a>
            <a onClick={() => handler('games')}>Games</a>
            <a onClick={() => handler('staff')}>Staff</a>
            <a onClick={() => handler('contact-us')}>Contact Us</a>
            <div>
                {/* TODO: Add external links */}
            </div>
        </footer>
    </>
}

export default Footer
