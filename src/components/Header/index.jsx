import React from 'react';
import './index.scss';
import add from '../Header/imgs/add.svg'


function Header(props) {

    const { openInput, completedCount, totalCount } = props;

    return ( 
        <div className='header'>
            <h1>有什麼計畫？
                <span>{completedCount}/{totalCount}已完成</span>
            </h1>
            <img className='add' onClick={ openInput } src={add} alt="add"/>   
        </div>
     );
}

export default Header;





