import React from 'react';
import './index.scss';
import Modal from '../';
import {formatDateTime} from '../../../libs/utils';


function CheckModal(props) {
    const { isShowCheckModal, data, closeModal } = props;

    return ( 
        <Modal
        isShowModal={ isShowCheckModal }
        modalTitle="查看事件"
        >
            <p className='topic'>時間：{formatDateTime(data.id)}</p>
            <p className='topic'>內容：{data.content}</p>
            <p className='topic'>狀態：{data.completed ? '已完成':'未完成'}</p>
            <button 
            className='btn btn-primary comfirm-btn'
            onClick={ closeModal }>
                確定
            </button>

        </Modal>
     );
}

export default CheckModal;