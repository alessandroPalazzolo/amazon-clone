import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";

import "./Modal.scss";

const Modal = props => {
   const component = (
      <>
         <Backdrop lower={props.lower} onClick={props.onCancel} />
         <div className={`modal modal--${props.elem}`}>
            <div className={`arrow arrow--${props.elem}`}></div>
            {props.children}
         </div>
      </>
   );
   return ReactDOM.createPortal(component, document.getElementById("modal-hook"));
}

export default Modal;