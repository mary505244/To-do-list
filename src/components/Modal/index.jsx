import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './index.scss';

function Modal(props) {
    const { isShowModal, modalTitle, children } = props;

    return ( 
        <Fragment>
            {isShowModal ? (
                <div className='modal-wrapper'>
                    <div className='modal-inner'>
                        <div className='inner-header'>{modalTitle}</div>
                        <div className='inner-content'>
                            {children}
                        </div>
                    </div>
                </div>
            ) : ''}
        </Fragment>
     );
}

export default Modal;