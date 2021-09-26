/* eslint-disable */
import React, { useEffect,useState } from 'react';
import logo from '../Images/cloudy.png'
import CityInfo from './CityInfo';
import WeatherDetails from './WeatherDetails';
import TodayWeather from './TodayWeather';
import FutureForecast from './FutureForecast';
import './HomePage.scss'

const WeatherInfoPage = (props) => {
const[weatherInfo,setWeatherInfo] = useState([]);
const[searchLocationPage,setSearchLocationPage] = useState(false);
const[weatherPageInfo,setWeatherPageInfo] = useState(true);

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.geoLocation.lat}&lon=${props.geoLocation.lng}&exclude=alerts,minutely&appid=${process.env.REACT_APP_API_KEY_W}&units=metric`)
        .then(response => response.json())
        .then(json => setWeatherInfo(json))
    },[props.geoLocation])

const flagSearchPage = ()=> {
    setSearchLocationPage(prevSearchLocationPage=>!prevSearchLocationPage)
setWeatherPageInfo(prevWeatherPageInfo=>!prevWeatherPageInfo);
}
    useEffect(()=>{
        props.searchPage(searchLocationPage)
        props.weatherConatiner(weatherPageInfo)
    },[weatherPageInfo])

    return ( 
        <React.Fragment>
            {Object.keys(weatherInfo).length===0?<>
                <div className='loader-container'>
                <div className="loader"></div>
                </div>
                </>:
            <>
            <div className='weatheryy-banner' onClick={flagSearchPage}>
                    <div>
                        <img src={logo} alt='logo' className='Weatheryy-Logo__WeatherPage'></img>
                    </div>
                    <div>
                        <p className='Weatheryy-Intro__WeatherPage'>WEATHERYY</p>
                    </div>
            </div>
            <div className='cityWeatherInfo'>
            <CityInfo city={props.city} date={weatherInfo}/>
            <WeatherDetails  weatherInformation={weatherInfo}/> 
            <TodayWeather hourlyForecast={weatherInfo}/>
            <FutureForecast dailyForecast={weatherInfo}/>
            </div>
            </>}
        </React.Fragment>
     );
}
 
export default WeatherInfoPage;