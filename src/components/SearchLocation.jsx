import React,{useState,useEffect,useRef} from 'react';
import './HomePage.scss'
import logo from '../Images/cloudy.png'
import AlgoliaPlaces from 'algolia-places-react';


const SearchLocation = (props) => {
    const[location,setLocation] = useState('');
    const[coordinates,setCoordinates] = useState({lat:'',lng:''})
    const[weatherPage,setWeatherPage] = useState(false)
    const fetchData = useRef(()=>{});
    
    
    function displayWeather(e){
        e.preventDefault();
        console.log(location)
        if(location==='')
        {
            alert('Please enter a valid location')
            setWeatherPage(false)
        }
        else{
        setWeatherPage(prevWeatherPage=>!prevWeatherPage);
        }
    }

    fetchData.current = ()=>{
    props.weatherInfo(weatherPage)
    props.cityInfo(location)
    props.coordsInfo(coordinates)
}
    useEffect(()=>{
       fetchData.current();
    },[weatherPage])


    return (
        <React.Fragment>  
        {!weatherPage && <div>
            <div className='weatheryy-banner'>
                    <div>
                        <img src={logo} alt='logo' className='Weatheryy-Logo__SearchPage'></img>
                    </div>
                    <div>
                        <p className='Weatheryy-Intro__SearchPage'>WEATHERYY</p>
                    </div>
            </div>
            <div className='form-container'>
                <form onSubmit={displayWeather} className='formDisplay'>
                    <div >
                    <AlgoliaPlaces style={{width:'inherit', left:0}} placeholder='Search location' options={{
                    }}
                    onChange={({suggestion})=>{
                        setLocation(suggestion.name)
                        setCoordinates(suggestion.latlng)
                    }}/>
                    </div>
                    <button className='Weatheryy-Start-Button Search-Button'><span>Search</span></button>
                </form>
            </div>
            </div>}
      </React.Fragment>
     );
}
 
export default SearchLocation;


