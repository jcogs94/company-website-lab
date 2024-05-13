import App from '../../App.jsx'
import './Footer.css'

const Footer = ({ handler }) => {
    return <>
        <footer>
            <a onClick={() => handler('contact-us')}>Contact Us</a>
            <a href="http://www.google.com">External 1</a>
            <a href="http://www.google.com">External 2</a>
            <a href="http://www.google.com">External 3</a>
            <a href="http://www.google.com">External 4</a>
            <div>
                {/* TODO: Add external links */}
            </div>
        </footer>
    </>
}

export default Footer
