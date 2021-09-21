import React,{useState} from 'react';
import './HomePage.scss'
import logo from '../Images/cloudy.png'
import PlacesAutocomplete from 'react-places-autocomplete';

const SearchLocation = () => {
    const[location,setLocation] = useState('');
    const handleSelect = async value=>
    {
    setLocation(value)
    };
    function displayWeather(e){
        e.preventDefault();
        console.log(location)
        setLocation('')
    }
    
    return (
        <PlacesAutocomplete value={location} onChange={setLocation} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
                <div className='weatheryy-banner'>
                    <div>
                        <img src={logo} alt='logo' className='weatheryy-logo'></img>
                    </div>
                    <div>
                        <p className='weatheryy-intro '>WEATHERYY</p>
                    </div>
                </div>
            <form onSubmit={displayWeather}>
                <input {...getInputProps({placeholder: 'Enter Location'})}/>

                <div className="autocomplete-dropdown-container" >
                {/* {loading && <div>Loading....</div>} */}
                {suggestions.map(suggestion => {
                    const className = suggestion.active ? 'suggestion-item--active': 'suggestion-item';
                    const style = suggestion.active ? { backgroundColor: '#ccc', cursor: 'pointer',}: { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (  
                    <div {...getSuggestionItemProps(suggestion, {className, style})}>                   
                        <span>{suggestion.description}</span>
                    </div>
                    );
                })}
                </div>
                <button class='Weatheryy-Start-Button'>Search</button>
                </form>
          </div>
        )}
      </PlacesAutocomplete>
     );
}
 
export default SearchLocation;



// function showResult(event){
    //     event.preventDefault()
    //     console.log(location)
    //     setLocation('');
    // }

        // <React.Fragment>
         
        //     <form onSubmit={showResult}>
        //         <input type="text" placeholder='Enter Location' onChange={monitorInput} value={location}/><br/>
        //         <button className='Weatheryy-Start-Button'><span>Search</span></button>
        //     </form>
        // </React.Fragment>