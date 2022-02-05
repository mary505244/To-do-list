import React from 'react';
import './index.scss';
import pen from '../Header/imgs/pen.svg'


function Header(props) {

    const { openInput } = props;

    return ( 
        <div className='header'>
            <h1>有什麼計畫？</h1>
            {/* <span 
            className='icon'
            onClick={ openInput }
            >  */}
                <img className='pen' onClick={ openInput } src={pen} alt="pen"/>
            {/* </span> */}
        </div>
     );
}

export default Header;

