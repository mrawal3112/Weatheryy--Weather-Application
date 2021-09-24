import React from 'react';
import './TodayWeather.css'
import moment from 'moment';
const ForecastTabs = (props) => {
    return ( 
        <div className='forecastTab-container'>
            <div className='infoConatainer'>
                <div className='infoHeading'>{moment.unix(props.info.dt).format('D/M')}</div>
                <div className='infoData'>{moment.unix(props.info.dt).format('ddd')}</div>
            </div>
            <div className='infoConatainer'>
                <img src={`https://openweathermap.org/img/wn/${props.info.weather[0].icon}@2x.png`} alt='logo' className='weather-logo'></img> 
            </div>
           
            <div className='infoConatainer'>
                <div className='infoHeading'>Lowest Temp</div>
                <div className='infoData'>{Math.round(props.info.temp.min)}<span>&#176;</span></div>
            </div>
           
            <div className='infoConatainer'>
                <div className='infoHeading'>Highest Temp</div>
                <div className='infoData'>{Math.round(props.info.temp.max)}<span>&#176;</span></div>
            </div>
           
            <div className='infoConatainer'>
                <div className='infoHeading'>Speed Of Wind</div>
                <div className='infoData'>{((props.info.wind_speed)*3.6).toPrecision(2) +' Km/h'}</div>
            </div>
           
            <div className='infoConatainer'>
                <div className='infoHeading'>Chances Of Rain</div>
                <div className='infoData'>{!props.info.hasOwnProperty('rain')?"0%":((Math.round(props.info.rain))*10) + '%'}</div>
            </div>

        </div>
     );
}
 
export default ForecastTabs;