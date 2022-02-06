import React from 'react';
import './index.scss';


function Today(props) {

    // const { openInput, completedCount, totalCount } = props;

    const date = new Date;

    return ( 
        <div className='date-wrapper'>
            <div className="date">
                <div className="day">{date.getDate()}</div>
                <span>
                    <p className="month">{date.toLocaleString('en-us',{ month: "short" }).toUpperCase()}</p>
                    <p className="year">{date.getFullYear()}</p>
                </span>
            </div>
            <div className="dayinword">{date.toLocaleString('en-us',{ weekday: 'long' }).toUpperCase()}</div>
        </div>
      
     );
}

export default Today;





