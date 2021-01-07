import React from "react";

import "./Input.scss";

const Input = props => {
   return (
      <>
         <input className={`input ${props.className}`}></input>
      </>
   );
}

export default Input;