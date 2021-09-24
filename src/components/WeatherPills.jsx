import moment from 'moment';
import React from 'react';
const WeatherPills = (props) => {
console.log(!props.info.hasOwnProperty('rain')?"Property Doesn't exist" : props.info.rain['1h'])
// console.log(props.info)
    return ( 
        <div className='pill-container'>
            <div className='specifiedTime'>{moment.unix(props.info.dt).format('hA')}</div>
            <div><img src={`https://openweathermap.org/img/wn/${props.info.weather[0].icon}@2x.png`} alt='logo' className='weather-logo'></img></div>
            <div className='specifiedTemp'>{Math.round(props.info.temp)}<span>&#176;</span></div>
        </div>
     );
}
 
export default WeatherPills;