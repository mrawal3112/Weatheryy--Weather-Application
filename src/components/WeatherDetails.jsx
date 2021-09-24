import React from 'react';
import './WeatherDetails.scss'
import moment from 'moment';
import tz from 'moment-timezone';

const WeatherDetails = (props) => {
    return ( 
        <>
        <div className='WeatherDeatils-container'>
            <div className='tempInfo'>
                <div className='climate-icon-container'>
                    <img src={`https://openweathermap.org/img/wn/${props.weatherInformation.hourly[0].weather[0].icon}@2x.png`} alt='rainImage' className='climateIcon'></img>
                </div>
                <div className='Climate-info-container'>
                    <p className='Today_temp'>{(Math.floor(props.weatherInformation.hourly[0].temp))}<span>&#176;</span></p>  
                    <p className='Today_climate'>{props.weatherInformation.hourly[0].weather[0].description}</p>
                </div>
            </div>
            <div className='additionalInfo'>
                
                <div className="grid-item">
                    <div className='info-heading'>High</div>
                    <div className='info-details'>{(Math.round(props.weatherInformation.daily[0].temp.max))}<span>&#176;</span></div>
                </div>

                <div className="grid-item">
                    <div className='info-heading'>Low</div>
                    <div className='info-details'>{(Math.round(props.weatherInformation.daily[0].temp.min))}<span>&#176;</span></div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Feels Like</div>
                    <div className='info-details'>{(Math.round(props.weatherInformation.hourly[0].feels_like))}<span>&#176;</span></div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Pressure</div>
                    <div className='info-details'>{props.weatherInformation.hourly[0].pressure + ' hPa'}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Humidity</div>
                    <div className='info-details'>{props.weatherInformation.hourly[0].humidity + '%'}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Visibility</div>
                    <div className='info-details'>{((props.weatherInformation.hourly[0].visibility)/1000).toPrecision(2)+' Km'}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Wind Speed</div>
                    <div className='info-details'>{((props.weatherInformation.hourly[0].wind_speed)*3.6).toPrecision(2) + ' Km/h'}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>UV Index</div>
                    <div className='info-details'>{Math.round(props.weatherInformation.hourly[0].uvi)}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Sunrise</div>
                    <div className='info-details'>{moment.unix(props.weatherInformation.daily[0].sunrise).tz(props.weatherInformation.timezone).format('LT')}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Sunset</div>
                    <div className='info-details'>{moment.unix(props.weatherInformation.daily[0].sunset).tz(props.weatherInformation.timezone).format('LT')}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Precipitation</div>
                    <div className='info-details'>{((props.weatherInformation.hourly[0].pop) * 100).toPrecision(2)+'%'}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Volume Of Rain</div>
                    <div className='info-details'>{!props.weatherInformation.hourly[0].hasOwnProperty('rain')?"0 mm":((Math.round(props.weatherInformation.hourly[0].rain['1h']*100)) + ' mm')}</div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default WeatherDetails;
