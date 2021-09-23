import React from 'react';
import './TodayWeather.css'
import WeatherPills from './WeatherPills';
const TodayWeather = () => {
    return (  
        <div className='forecast-container'>
            <p className='forecastHeading'>Today's Weather</p>
            <div className='temp-pills-container'>
                <WeatherPills/>
                <WeatherPills/>
                <WeatherPills/>
                <WeatherPills/>
                <WeatherPills/>
                <WeatherPills/>
                <WeatherPills/>
                <WeatherPills/>
            </div>
        </div>
    );
}
 
export default TodayWeather;