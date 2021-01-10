import React, { useReducer, useEffect,  Children } from "react";

import Button from "../FormElements/Button";

import "./Carousel.scss";

const carouselReducer = (state, action) => {
   switch (action.type) {
      case "ALL":
         return({
            ...state,
            index: action.newIndex,
            transition: action.newTransition
         })
      case "INDEX": 
         return({
            ...state,
            index: action.newIndex
         });
      case "TRANSITION":
         return({
            ...state,
            transition: action.newTransition
         })
      default:
         return state;
   }
}

const Carousel = props => {

   const l = Children.count(props.children);

   const [ carouselState, dispatch ] = useReducer(carouselReducer, {
      index: Math.floor(Math.random() * l),
      transition: "transform 250ms ease-in-out"
   });

   const styles = {
      transform: `translateX(${-carouselState.index * 100}%)`,
      transition: `${carouselState.transition}`
   }

   useEffect(() => {
      const automateCarousel = setTimeout(() => dispatch({
         type: "ALL",
         newIndex: carouselState.index + 1,
         newTransition: "transform 250ms ease-in-out"
      }), 6000);
      return () => clearTimeout(automateCarousel);
   }, [carouselState]);

   const leftClickHandler = () => {
      dispatch({
         type: "ALL", 
         newIndex: carouselState.index-1,
         newTransition: "transform 250ms ease-in-out"
      });
   } 
   const rightClickHandler = () => {
      dispatch({
         type: "ALL", 
         newIndex: carouselState.index+1,
         newTransition: "transform 250ms ease-in-out"
      });
   } 

   const transitionHandler = () => {
      if (carouselState.index == l-1 || carouselState.index == 0) {
         dispatch({
            type: "ALL",
            newTransition: "none",
            newIndex: carouselState.index ? 1 : l-2
         });
      }
   }

   return (
      <div className={`carousel ${props.className}`}>
         <div
            className={`carousel__slider`}
            style={styles}
            onTransitionEnd={transitionHandler}
         >
            {props.children}
         </div>
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