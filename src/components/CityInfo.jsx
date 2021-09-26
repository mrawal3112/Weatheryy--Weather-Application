/* eslint-disable */
import React from 'react';
import moment from 'moment'; 
import tz from 'moment-timezone';
import './CityInfo.css'

const CityInfo = (props) => {
    return (  
        <div>
            <p className='cityName'>{props.city}</p>
            <p className='presentDate'>{moment.unix(props.date.current.dt).tz(props.date.timezone).format('MMMM D, YYYY')}</p>
        </div>
    );
}
 
export default CityInfo;