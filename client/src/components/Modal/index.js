import React from 'react';
import QRCode from 'react-qr-code';
import './modal.css';


const Modal = ({ setIsOpen }) => {
    // const { username: userParam } = useParams();

    // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    //     variables: { username: userParam }
    //   });

    // console.log({username: userParam})

    // const qrName = {username: userParam}


    const url = window.location.href;

    return (
        <>
            <div className='darkBG' onClick={() => setIsOpen(false)} />
            <div className='centered'>
                <div>
                <QRCode value={url}/>
                </div>
                <button className='closeBtn' onClick={() => setIsOpen(false)}>
                    close
                </button>
            </div>
        </>
    );
  };

export default Modal;
