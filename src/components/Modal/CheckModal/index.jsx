import React from 'react';
import './index.scss';
import Modal from '../';
import {formatDateTime} from '../../../libs/utils';
import calendar from '../CheckModal/imgs/calendar.svg'
import content from '../CheckModal/imgs/content.svg'
import status from '../CheckModal/imgs/status.svg'


function CheckModal(props) {
    const { isShowCheckModal, data, closeModal } = props;

    return ( 
        <Modal
        isShowModal={ isShowCheckModal }
        modalTitle="詳情"
        closeModal={closeModal}
        >
            <div className='modal-container'>
                <p className='title'> 
                    <img className='icon' src={calendar} alt="calendar"/>時間：
                    <span className='content'>{formatDateTime(data.id)}</span>
                </p>
                

                <p className='title'>
                    <img className='icon' src={content} alt="calendar"/>內容：
                    <span className='content'>{data.content}</span>
                </p>
                

                <p className='title'>
                    <img className='icon' src={status} alt="calendar"/>狀態：
                    <span className='content'>{data.completed ? '已完成✔':'未完成✘'}</span>
                </p>
                

                {/* <button 
                className='btn-confirm'
                onClick={ closeModal }>
                    確定
                </button> */}
            </div>
        </Modal>
     );
}

export default CheckModal;