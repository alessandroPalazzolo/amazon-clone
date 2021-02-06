import React from "react";

import Button from "../FormElements/Button";

import "./Card.scss";

const Card = props => {
   return (
      <div className="card" id={props.id}>
         {props.header && <div className="card__header"><h2>{props.header}</h2></div>}
         <div className="card__body">{props.children}</div>
         {props.footer && <div className="card__footer"><Button to="/random-category">{props.footer}</Button></div>}
      </div>
   );
}

export default Card;