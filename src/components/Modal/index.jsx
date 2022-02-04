import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './index.scss';

function Modal(props) {
    const { isShowModal, modalTitle, children } = props;

    return ( 
        <Fragment>
            {isShowModal ? (
                <div className='modal'>
                    <div className='inner'>
                        <div className='m-header'>{modalTitle}</div>
                        <div className='content-wrapper'>
                            {children}
                        </div>
                    </div>
                </div>
            ) : ''}
        </Fragment>
     );
}

export default Modal;