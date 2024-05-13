import App from '../../App.jsx'
import './NavBar.css'

const NavBar = ({ handler }) => {
    return <>
        <nav>
            <a onClick={() => handler('home')}>Home</a>
            <a onClick={() => handler('history')}>Our History</a>
            <a onClick={() => handler('games')}>Games</a>
            <a onClick={() => handler('staff')}>Staff</a>
            <a onClick={() => handler('contact-us')}>Contact Us</a>
        </nav>
    </>
}

export default NavBar
