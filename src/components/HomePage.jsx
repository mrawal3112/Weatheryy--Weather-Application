import React from 'react';
import './HomePage.css'
import logo from '../Images/cloudy.png'
const HomePage = () => {
    return (  
        <div className='Homepage-container'>
            <img src={logo} alt='logo' className='Weatheryy-logo'></img>
            <p className='Weatheryy-Intro'>WELCOME TO WEATHERYY</p>
            <button className='Weatheryy-Start-Button'><span>Get Started</span></button>
        </div>
    );
}
 
export default HomePage;
