import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null); 
        }
    }

    return(
        <div className="backdrop" onClick={ handleClick }>
            <img src={ selectedImg } alt="A large pic" />
        </div>
    );
}

export default Modal;