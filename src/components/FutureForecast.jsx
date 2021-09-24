import React from 'react';
import './TodayWeather.css'
import ForecastTabs from './ForecastTabs';
const FutureForecast = (props) => {
    return (  
        <div>
            <div className='forecast-container'>
            <p className='forecastHeading'>Next 7 Days Forecast</p>
            <div className='future-forecast-tabs-container'>
                {props.dailyForecast.daily.map((item,index)=>{
                    return (index!==0?<ForecastTabs info={item} key={index}/>:"")
                })}
            </div>
        </div>
        </div>
    );
}
 
export default FutureForecast;