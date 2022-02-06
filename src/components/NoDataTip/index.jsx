import React from 'react';
import './index.scss';
import NoData from '../NoDataTip/imgs/NoData-unscreen.gif'


function NoDataTip() {
    return ( 
        <div className='nodata-wrapper'>  
            <div className='title'>開始添加清單吧🧡</div>  
            <img className='icon' src={NoData} alt="NoData"/>
        </div>
     );
}

export default NoDataTip;