import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const Button = props => {
   if (props.to) {
      return (
         <Link
            to={props.to}
            exact={props.exact}
            className={`link-btn ${props.className}`}
         >
            {props.children}
         </Link>
      );
   }
   return (
      <button
         className={`button-btn ${props.className}`}
         onClick={props.onClick}
         style={props.style}
      ></button>
   );
};

export default Button;