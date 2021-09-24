import React from 'react';
import './TodayWeather.css'
import WeatherPills from './WeatherPills';
const TodayWeather = (props) => {
    return (  
        <div className='forecast-container'>
            <p className='forecastHeading'>Today's Weather</p>
            <div className='temp-pills-container'>
                 {props.hourlyForecast.hourly.map((item,index)=> {return (index<12?<WeatherPills info={item} key={index}/>:"")}
                )}
            </div> 
        </div>
    );
}
 
export default TodayWeather;