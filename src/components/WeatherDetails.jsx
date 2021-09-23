import React from 'react';
import rain from '../Images/rain.png';
import './WeatherDetails.scss'
import moment from 'moment';
const apiData = {
    "lat": 43.577,
    "lon": -79.7745,
    "timezone": "America/Toronto",
    "timezone_offset": -14400,
    "current": {
      "dt": 1632354504,
      "sunrise": 1632308795,
      "sunset": 1632352615,
      "temp": 286.9,
      "feels_like": 286.81,
      "pressure": 1007,
      "humidity": 95,
      "dew_point": 286.11,
      "uvi": 0,
      "clouds": 90,
      "visibility": 6437,
      "wind_speed": 8.23,
      "wind_deg": 360,
      "wind_gust": 12.86,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        },
        {
          "id": 701,
          "main": "Mist",
          "description": "mist",
          "icon": "50n"
        }
      ],
      "rain": {
        "1h": 3.65
      }
    }
  }
  const apiData2={
    "coord": {
      "lon": -79.6457,
      "lat": 43.5903
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 287.54,
      "feels_like": 287.52,
      "temp_min": 286.35,
      "temp_max": 290.14,
      "pressure": 1008,
      "humidity": 95
    },
    "visibility": 10000,

    "dt": 1632344670,
   
  }

const WeatherDetails = (props) => {

 
    return ( 
        <>
        <div className='WeatherDeatils-container'>
            <div className='tempInfo'>
                <div className='climate-icon-container'>
                    <img src={rain} alt='rainImage' className='climateIcon'></img>
                </div>
                <div className='Climate-info-container'>
                    <p className='Today_temp'>{(Math.floor(apiData.current.temp - 273.15))}<span>&#176;</span></p>
                    <p className='Today_climate'>{apiData.current.weather[0].description}</p>
                </div>
            </div>
            <div className='additionalInfo'>
                
                <div className="grid-item">
                    <div className='info-heading'>High</div>
                    <div className='info-details'>{Math.floor(apiData2.main.temp_max - 273.15)}<span>&#176;</span></div>
                </div>

                <div className="grid-item">
                    <div className='info-heading'>Low</div>
                    <div className='info-details'>{Math.floor(apiData2.main.temp_min - 273.15)}<span>&#176;</span></div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Feels Like</div>
                    <div className='info-details'>{Math.floor(apiData.current.feels_like - 273.15)}<span>&#176;</span></div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Pressure</div>
                    <div className='info-details'>{apiData.current.pressure + ' hPa'}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Humidity</div>
                    <div className='info-details'>{apiData.current.humidity + '%'}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Visibility</div>
                    <div className='info-details'>{((apiData.current.visibility)/1000).toPrecision(2) + ' Km'}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Wind Speed</div>
                    <div className='info-details'>{((apiData.current.wind_speed)*3.6).toPrecision(2)+'km/h'}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>UV Index</div>
                    <div className='info-details'>{apiData.current.uvi}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Sunrise</div>
                    <div className='info-details'>{moment(apiData.current.sunrise).format('LT')}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Sunset</div>
                    <div className='info-details'>{moment(apiData.current.sunset).format('LT')}</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Precipitation</div>
                    <div className='info-details'>0.6 cm</div>
                </div>
                
                <div className="grid-item">
                    <div className='info-heading'>Chances Of Rain</div>
                    <div className='info-details'>100%</div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default WeatherDetails;

// const[weatherInfo,setWeatherInfo] = useState({});


   // useEffect(()=>{
    //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.cityInfo.lat}&lon=${props.cityInfo.lng}&appid=`)
    //     .then(response => response.json())
    //     .then(json => setWeatherInfo(json))
    // },[props])
    // console.log('render');

// {Object.keys(weatherInfo).length===0?"":
// <p>City's GeoLocation Co-ordinates : Latitude - {apiData.coord.lat} and Longitude - {apiData.coord.lon} </p>}