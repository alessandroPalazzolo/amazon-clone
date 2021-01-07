import React from "react";
import ReactDOM from "react-dom";

import "./Backdrop.scss";

const Backdrop = props => {
   const component = (
      <div
         className={`backdrop ${props.lower ? "backdrop--lower" : ""}`}
         onClick={props.onClick}
      >
         {props.children}
      </div>
   );
   return ReactDOM.createPortal(component, document.getElementById("backdrop-hook"));
}

export default Backdrop;