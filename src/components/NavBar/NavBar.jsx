import * as handlers from '../../assets/handlers.jsx'
import './NavBar.css'

const NavBar = () => {
    return <>
        <nav>
            <a onClick={handlers.homePage}>Home</a>
            <a onClick={handlers.ourHistory}>Our History</a>
            <a onClick={handlers.games}>Games</a>
            <a onClick={handlers.staff}>Staff</a>
            <a onClick={handlers.contactUs}>Contact Us</a>
        </nav>
    </>
}

export default NavBar
