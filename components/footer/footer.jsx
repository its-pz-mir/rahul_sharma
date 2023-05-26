import React from 'react'
import './footer.css'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='footer'>
            <h2>Get in Touch</h2>
            <p>Do you have a new project or job for me? Or just want to have a chat, feel free to connect.</p>
            <div className='footer-links'>
                <Link href='https://www.linkedin.com'><img src="./linkedin.png" alt="LinkedIn" /></Link>
                <Link href='https://www.instagram.com'><img src="./insta.png" alt="LinkedIn" /></Link>
                <Link href='https://www.gmail.com'><img src="./gmail.png" alt="LinkedIn" /></Link>
                <Link href='https://www.dribble.com'><img src="./dribble.png" alt="LinkedIn" /></Link>
            </div>
        </div>
    )
}

export default Footer;