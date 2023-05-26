import React from 'react'
import './header.css';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='main'>
            <div className="header">

                <div className="logo">
                    <img src="./rs.png" alt="Logo" />
                    <p>Rahul Sharma</p>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#work">Works</a></li>
                    </ul>
                    <button className='btn'>Get in Touch</button>
                    <Link href="#"><img className='dark' src="./dark.png" alt="Dark Mode" /></Link>
                </div>
            </div>
            <div className='hero'>
                <div className="about">
                    <div className="about-text">
                        <h2>Hi I'm Rahul</h2>
                        <p> Hi, I'm a UI/UX <br /> & Web Designer from India</p>
                    </div>
                    <div className="about-img">
                        <img src="./me.png" alt="About" />
                    </div>
                </div>
                <div className='bottom'>
                    <Link href="#"><img className='dark' src="./bottom.png" alt="Bottom Icon" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;