import React, { Fragment, useRef } from 'react';
import './index.scss';

function AddInput(props) {

    const { isInputShow, addItem } = props;

    const inputRef= useRef();

    const submitValue = () => {
        const inputValue = inputRef.current.value.trim();

        if(inputValue.length === 0){
            return;
        }

        addItem(inputValue);

        inputRef.current.value = '';

    }

    return ( 
        <Fragment>
            {isInputShow ?　
            (
                <div className='input-wrapper'>
                    <input
                    type="text"
                    placeholder='請輸入待辦事項～'
                    ref={inputRef}
                    />
                    <button
                    className='btn-add'
                    // onClick={addItem(data)}>
                    onClick={submitValue}>
                    增加
                    </button>
                </div>

            ):''}
        </Fragment>
     );
}

export default AddInput;
