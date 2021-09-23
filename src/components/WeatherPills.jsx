import React from 'react';
import logo from '../Images/rain.png'
const WeatherPills = () => {

    return ( 
        <div className='pill-container'>
            <div className='specifiedTime'>2<span style={{fontSize:'1rem'}}>PM</span></div>
            <div><img src={logo} alt='logo' className='weather-logo'></img></div>
            <div className='specifiedTemp'>15<span>&#176;</span></div>
        </div>
     );
}
 
export default WeatherPills;