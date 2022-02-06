import React, {useRef} from 'react';
import './index.scss';
import Modal from '../';
import {formatDateTime} from '../../../libs/utils';
import calendar from '../CheckModal/imgs/calendar.svg'
import content from '../CheckModal/imgs/content.svg'
import status from '../CheckModal/imgs/status.svg'


function EditModal(props) {
    const { isShowEditModal, data, submitEdit, closeModal } = props;
    const inputRef = useRef();
    const checkRef = useRef();

    const formatNewData = () => {
        const inputValue = inputRef.current.value.trim();

        if(inputValue.length === 0){
            inputRef.current.value = data.content;
            return;
        }

        const newData = {
            id: new Date().getTime(),
            content:inputValue,
            // completed:checkRef.current.checked
        }

        submitEdit(newData, data.id);
    }

    return ( 
        <Modal
        isShowModal={ isShowEditModal }
        modalTitle="編輯"
        closeModal={closeModal}
        >
            <p className='title'>
                <img className='icon' src={calendar} alt="calendar"/>時間：
                <span className='content'>{formatDateTime(data.id)}</span>
            </p>
            <p className='title'>
                <img className='icon' src={content} alt="calendar"/>內容：
                <textarea
                    className='text-area'
                    ref={inputRef}
                    defaultValue={data.content}>
                </textarea>
            </p>
            
            {/* <p className='title'>
                 <img className='icon' src={status} alt="calendar"/>狀態： */}
                 {/* <div className='check-box'>
                    <input
                    type="checkbox" 
                    // onChange={()=>completeItem(data.id)}
                    checked={data.completed}
                    className='checkbox'
                    defaultChecked={ data.completed ? true : false }
                    ref={checkRef}
                    />
                </div> */}
                {/* <input 
                type="checkbox"
                defaultChecked={ data.completed ? true : false }
                ref={checkRef}
                /> */}
            {/* </p> */}
            <button
            className='btn btn-primary comfirm-btn'
            onClick={ formatNewData }
            >
                提交
            </button>
            
        </Modal>
     );
}

export default EditModal;