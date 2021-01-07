import React, { useState } from "react";

import Button from "../FormElements/Button";

import "./Carousel.scss";

const Carousel = props => {

   const { items } = props;
   const l = items.length;
   const [ carouselState, setCarouselState ] = useState(Math.floor(Math.random() * l));

   const leftClickHandler = () => setCarouselState( !carouselState ? 5 : carouselState-1 );
   const rightClickHandler = () => {
      setCarouselState( (carouselState+1)%l );
   }

   return (
      <div className={`carousel ${props.className}`}>
         <img alt="carouselItem" src={items[carouselState]}></img>
         <Button
            className="carousel__left-arrow"
            onClick={leftClickHandler}
         ></Button>
         <Button
            className="carousel__right-arrow"
            onClick={rightClickHandler}
         ></Button>
      </div>
   );
}

export default Carousel;