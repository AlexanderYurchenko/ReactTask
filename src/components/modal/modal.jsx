import React, { Component } from "react";
import PropTypes from 'prop-types';
import Portal from "../portal/portal";
import "./modal.scss";

const Modal = ({ isOpen, onClose, author, phone }) => {
  return (
    <React.Fragment>
      { isOpen && 
        <Portal>
          <div className="c-modal">
            <div className="c-modal__dialog">
              <div className="c-modal__content">
                <button className="c-modal__close" onClick={onClose}></button>
                <div className="c-modal__name">{author}</div>
                <div className="c-modal__phone">{phone}</div>
              </div>
            </div>
          </div>
        </Portal>
      }
    </React.Fragment>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  author: PropTypes.string,
  phone: PropTypes.string,
};

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
  author: '',
  phone: 'No phone number found'
}

export default Modal;
