import React from 'react';
import './TodayWeather.css'
import moment from 'moment';
const ForecastTabs = (props) => {
    console.log(props.info.rain)
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
                <div className='infoHeading low-temp'>Lowest Temp</div>
                <div className='infoData'>{Math.round(props.info.temp.min)}<span>&#176;</span></div>
            </div>
           
            <div className='infoConatainer'>
                <div className='infoHeading high-temp'>Highest Temp</div>
                <div className='infoData'>{Math.round(props.info.temp.max)}<span>&#176;</span></div>
            </div>
           
            <div className='infoConatainer'>
                <div className='infoHeading wind-speed'>Speed Of Wind</div>
                <div className='infoData'>{((props.info.wind_speed)*3.6).toPrecision(2) +'Km/h'}</div>
            </div>
           
            <div className='infoConatainer'>
                <div className='infoHeading rain-volume'>Volume Of Rain</div>
                <div className='infoData'>{!props.info.hasOwnProperty('rain')?"0mm":((Math.round(props.info.rain*100))) + 'mm'}</div>
            </div>

        </div>
     );
}
 
export default ForecastTabs;