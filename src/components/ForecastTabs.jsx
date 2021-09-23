import React from 'react';
import logo1 from '../Images/rain.png'
import './TodayWeather.css'
const ForecastTabs = () => {
    return ( 
        <div class='forecastTab-container'>
            <div className='infoConatainer'>
                <div className='infoHeading'>21/09</div>
                <div className='infoData'>Tue</div>
            </div>
            <div className='infoConatainer'>
                <img src={logo1} alt='logo' className='weather-logo'></img> 
            </div>
           
            <div className='infoConatainer'>
                <div className='infoHeading'>Lowest Temp</div>
                <div className='infoData'>10<span>&#176;</span></div>
            </div>
           
            <div className='infoConatainer'>
                <div className='infoHeading'>Highest Temp</div>
                <div className='infoData'>16<span>&#176;</span></div>
            </div>
           
            <div className='infoConatainer'>
                <div className='infoHeading'>Speed Of Wind</div>
                <div className='infoData'>25 Km/h</div>
            </div>
           
            <div className='infoConatainer'>
                <div className='infoHeading'>Chances Of Rain</div>
                <div className='infoData'>80%</div>
            </div>

        </div>
     );
}
 
export default ForecastTabs;