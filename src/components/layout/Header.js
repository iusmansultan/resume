import React from 'react'
import Avatar from '../assets/images/avatar.png'
import Facebook from '../assets/images/facebook.png'
import Twitter from '../assets/images/twitter.png'
import Instagram from '../assets/images/instagram.png'
import Github from '../assets/images/github.png'
const Header = () => {
    return (
        <div style={{ marginTop: '20px' }}>
            <div className='header-items'>
                <div className='header-items-i' >
                    <div>
                        <h1 style={{ marginBottom: '0px' }}>Hi, i'm Muhammad Usman</h1>
                        <smal style={{ marginBottom: '10px' }}>Full Stack Developer</smal>
                        <p style={{ marginBottom: '5px', marginTop: '15px' }}>High level experiance in web,mobile <br />and backend design and developement</p>
                    </div>
                    <h4 style={{ marginTop: '20px' }}>Follow me:</h4>
                    <div className="follow-me">
                        <div className="follow-me-i"><a href="https://www.facebook.com" ><img src={Facebook} width='40px' height='40px' /></a></div>
                        <div className="follow-me-i"><a href="#" ><img src={Instagram} width='40px' height='40px' /></a></div>
                        <div className="follow-me-i"><a href="#" ><img src={Twitter} width='40px' height='40px' /></a></div>
                        <div className="follow-me-i"><a href="#" ><img src={Github} width='40px' height='40px' /></a></div>
                    </div>
                </div>
                <div className='header-items-i-i' >
                    <img src={Avatar} height='350px' width='350px' />
                </div>
            </div>
        </div>
    )
}

export default Header
