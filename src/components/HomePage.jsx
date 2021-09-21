import React,{useState} from 'react';
import './HomePage.scss'
import SearchLocation from './SearchLocation';
import logo from '../Images/cloudy.png'
const HomePage = () => {
    const [getStarted,setGetStarted]= useState(false);
    function changeState(){
        setGetStarted(prevGetStarted=> !prevGetStarted)
    }
   
    return (  
        <div className='Homepage-container'>
            {!getStarted && (<React.Fragment>
                <img src={logo} alt='logo' className='Weatheryy-logo'></img>
                <p className='Weatheryy-Intro'>WELCOME TO WEATHERYY</p>
                <button className='Weatheryy-Start-Button' onClick={changeState}><span>Get Started</span></button>
            </React.Fragment>)}
            {getStarted && <SearchLocation/>}
        </div>
    );
}
 
export default HomePage;
