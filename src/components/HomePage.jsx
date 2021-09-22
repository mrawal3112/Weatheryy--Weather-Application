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
            {!getStarted && (<React.Fragment>
                <img src={logo} alt='logo' className='Weatheryy-Logo__HomePage'></img>
                <p className='Weatheryy-Intro__HomePage'>WELCOME TO WEATHERYY</p>
                <button className='Weatheryy-Start-Button' onClick={changeState}><span>Get Started</span></button>
            </React.Fragment>)}
            {getStarted && <SearchLocation weatherInfo={weatherPage} cityInfo={getCity} coordsInfo={getCoords}/>}
            {displayReport && <WeatherInfoPage city={selectedCity} geoLocation={cityCoords}/>}
        </div>
    );
}
 
export default HomePage;
