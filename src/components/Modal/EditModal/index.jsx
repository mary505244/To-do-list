import React, {useRef} from 'react';
import './index.scss';
import Modal from '../';
import {formatDateTime} from '../../../libs/utils';


function EditModal(props) {
    const { isShowEditModal, data, submitEdit } = props;
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
            completed:checkRef.current.checked
        }

        submitEdit(newData, data.id);
    }

    return ( 
        <Modal
        isShowModal={ isShowEditModal }
        modalTitle="編輯事件"
        >
            <p className='topic'>時間:{formatDateTime(data.id)}</p>
            <p className='topic'>
                <textarea
                    className='text-area'
                    ref={inputRef}
                    defaultValue={data.content}>
                </textarea>
            </p>
            
            <p className='topic'>
                狀態:
                <input 
                type="checkbox"
                defaultChecked={ data.completed ? true : false }
                ref={checkRef}
                />
            </p>
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