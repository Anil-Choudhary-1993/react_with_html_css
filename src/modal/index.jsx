import React from 'react';
import './index.css';

const Modal = ({ setToggle }) => {
  return (
    <div class="modal">
      <h1 class="modal__title">Do you want to continue?</h1>
      <div class="modal__actions">
        <a href="start-hosting/index.html" class="modal__action" onClick={(event) => {
          event.preventDefault();
          setToggle(false)
        }}>Yes!</a>
        <button class="modal__action modal__action--negative" type="button" onClick={() => setToggle(false)}>No!</button>
      </div>
    </div>
  )
}

export default Modal;