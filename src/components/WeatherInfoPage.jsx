import React from 'react';
import logo from '../Images/cloudy.png'
import CityInfo from './CityInfo';
import WeatherDetails from './WeatherDetails';
import './HomePage.scss'
const WeatherInfoPage = (props) => {
    return ( 
        <React.Fragment>
            <div className='weatheryy-banner'>
                    <div>
                        <img src={logo} alt='logo' className='Weatheryy-Logo__WeatherPage'></img>
                    </div>
                    <div>
                        <p className='Weatheryy-Intro__WeatherPage'>WEATHERYY</p>
                    </div>
            </div>
            <div className='cityWeatherInfo'>
            <CityInfo city={props.city}/>
            <WeatherDetails geoLocation={props.geoLocation}/> 
            </div>
        </React.Fragment>
     );
}
 
export default WeatherInfoPage;