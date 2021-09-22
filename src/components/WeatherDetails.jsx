import React,{useEffect,useState} from 'react';

const WeatherDetails = (props) => {
    const[weatherInfo,setWeatherInfo] = useState([]);
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.geoLocation.lat}&lon=${props.geoLocation.lng}&appid=127e886467e938b1f62145c8b4ddbc2f`)
        .then(response => response.json())
        .then(json => setWeatherInfo(json))
    },[props])

    return (
        <>
        <p>City's GeoLocation Co-ordinates : Latitude - {props.geoLocation.lat} and Longitude - {props.geoLocation.lng} </p>
        </>
        );

}
 
export default WeatherDetails;