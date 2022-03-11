import React from 'react';
import QRCode from 'react-qr-code';
import './modal.css';


const Modal = ({ setIsOpen }) => {
    const url = window.location.href;

    return (
      <>
        <div className='darkBG' onClick={() => setIsOpen(false)} />
        <div className='centered'>
          <div className='modal'>
            <div>
                <QRCode value={url}/>
            </div>
            <button className='closeBtn' onClick={() => setIsOpen(false)}>
              close
            </button>
          </div>
        </div>
      </>
    );
  };

export default Modal;