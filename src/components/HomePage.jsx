import React,{useState} from 'react';
import './HomePage.scss'
import SearchLocation from './SearchLocation';
import logo from '../Images/cloudy.png'
import WeatherInfoPage from './WeatherInfoPage';

const HomePage = () => {
    const [getStarted,setGetStarted]= useState(false);
    const [displayReport,setDisplayReport] = useState(false);
    const [selectedCity,setselectedCity] = useState('');
    const[cityCoords,setCityCoords] = useState({lat:'',lng:''});

    function changeState(){
        setGetStarted(prevGetStarted=> !prevGetStarted)
    }

    const weatherPage = (value) =>
    {
        setDisplayReport(value);
    }

    const getCity=value=>
    {
        setselectedCity(value)
    }

    const getCoords = value =>{
        setCityCoords({lat:value.lat,lng:value.lng})
    } 

    return (  
        <div className={displayReport?'WeatherPage-container':'Homepage-container'}>
            {!getStarted && (<div className='homepage-container'>
                <div>
                <img src={logo} alt='logo' className='Weatheryy-Logo__HomePage'></img>
                </div>
                <div>
                <span><p className='Weatheryy-Intro__HomePage'>WELCOME TO WEATHERYY</p></span>
                </div>
                <div>
                <button className='Weatheryy-Start-Button' onClick={changeState}><span>Get Started</span></button>
                </div>
            </div>)}
            {getStarted && <SearchLocation weatherInfo={weatherPage} cityInfo={getCity} coordsInfo={getCoords}/>}
            {displayReport && <WeatherInfoPage city={selectedCity} geoLocation={cityCoords} />}
        </div>
    );
}
 
export default HomePage;
