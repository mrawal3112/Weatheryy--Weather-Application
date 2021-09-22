import React from 'react';
import moment from 'moment';
import './CityInfo.css'

const CityInfo = (props) => {
    return (  
        <div>
            <p className='cityName'>{props.city}</p>
            <p className='presentDate'>{moment(Date.now()).format('LL')}</p>
        </div>
    );
}
 
export default CityInfo;