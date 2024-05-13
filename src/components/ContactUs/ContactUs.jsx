import { contactUsData as data } from './contactUsData'
import './ContactUs.css'

const ContactUs = () => {
    const socialMediaKeys = Object.keys(data.socialMedia)
    
    return <>
        <main>
            <h1>Contact Us</h1>
            <div id='socials-container'>
                <h2>Social Media</h2>
                <img src="https://t4.ftcdn.net/jpg/02/85/44/69/240_F_285446974_yVsizh73QxHP5QeI1ghJC8Vd5ikhSpxH.jpg" alt="socials" />
                <ul className="socials">
                    {socialMediaKeys.map( (type, index) => (
                        <li key={index}>
                            <p><b>{type}</b></p>
                            <a href="http://">{data.socialMedia[type]}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <ul>
                <li><b>Phone:</b> {data.phoneNumber}</li>
                <li><b>Email:</b> {data.email}</li>
                <li><b>Address:</b> {data.address}</li>
            </ul>
        </main>
    </>
}

export default ContactUs
