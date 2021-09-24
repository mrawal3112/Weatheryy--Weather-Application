/* eslint-disable */
import React,{useState,useEffect} from 'react';
import './HomePage.scss'
import logo from '../Images/cloudy.png'
import PlacesAutocomplete ,{geocodeByAddress,
    getLatLng}from 'react-places-autocomplete';

const SearchLocation = (props) => {
    const[location,setLocation] = useState('');
    const[coordinates,setCoordinates] = useState({lat:'',lng:''})
    const[weatherPage,setWeatherPage] = useState(false)
    const handleSelect = async value=>
    {
        const coords = await geocodeByAddress(value);
        const latlng = await getLatLng(coords[0])
        setCoordinates(latlng)
        setLocation(value)
    };
    function displayWeather(e){
        e.preventDefault();
        // console.log(location)
        // console.log(coordinates)
        if(location.trim()==='')
        {
            alert('Please enter a valid location')
            setWeatherPage(false)
        }
        else{
        setWeatherPage(prevWeatherPage=>!prevWeatherPage);
    }
       
    }
    useEffect(()=>{
        props.weatherInfo(weatherPage)
        props.cityInfo(location)
        props.coordsInfo(coordinates)
    },[weatherPage])

    return (
        <React.Fragment>
        {!weatherPage && 
        <PlacesAutocomplete value={location} onChange={setLocation} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
                <div className='weatheryy-banner'>
                    <div>
                        <img src={logo} alt='logo' className='Weatheryy-Logo__SearchPage'></img>
                    </div>
                    <div className='Weatheryy-Intro__SearchPage'>
                        <p>WEATHERYY</p>
                    </div>
                </div>
                <div className='form-container'>
            <form onSubmit={displayWeather}>
                <input {...getInputProps({placeholder: 'Enter Location'})}/>

                <div className="autocomplete-dropdown-container" >
                {suggestions.map(suggestion => {
                    suggestion.id = suggestion.description;
                    const style = suggestion.active ? { backgroundColor: '#ccc', cursor: 'pointer',}: { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (  
                    <div className='input-suggestion' {...getSuggestionItemProps(suggestion, {style})}>                  
                    {/* {console.log(suggestion)}  */}
                         <i className="material-icons">location_on</i><span>{suggestion.description}</span>
                    </div>
                    );
                })}
                </div>
                <button className='Weatheryy-Start-Button Search-Button'><span>Search</span></button>
                </form>
                </div>
          </div>
        )}
      </PlacesAutocomplete>}
      </React.Fragment>
     );
}
 
export default SearchLocation;


