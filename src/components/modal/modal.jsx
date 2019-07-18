import React, { Component } from "react";
import Portal from "../portal/portal";
import "./modal.scss";

class Modal extends Component {
  render() {
    return (
      <Portal>
        <div className=""></div>
      </Portal>
    );
  }
}

export default Modal;
