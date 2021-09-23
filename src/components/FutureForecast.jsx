import React from 'react';
import './TodayWeather.css'
import ForecastTabs from './ForecastTabs';
const FutureForecast = () => {
    return (  
        <div>
            <div className='forecast-container'>
            <p className='forecastHeading'>Next 5 Days Forecast</p>
            <div className='future-forecast-tabs-container'>
                <ForecastTabs/>
                <ForecastTabs/>
                <ForecastTabs/>
                <ForecastTabs/>
                <ForecastTabs/>
            </div>
        </div>
        </div>
    );
}
 
export default FutureForecast;