import React from 'react';
import QRCode from 'react-qr-code';
import './modal.css';


const Modal = ({ setToOpen }) => {

    const url = window.location.href;

    return (
        <>
            <div className='darkBG' onClick={() => setToOpen(false)} />
            <div className='centered'>
                <div>
                <QRCode value={url}/>
                </div>
                <button className='closeBtn' onClick={() => setToOpen(false)}>
                    close
                </button>
            </div>
        </>
    );
  };

export default Modal;
