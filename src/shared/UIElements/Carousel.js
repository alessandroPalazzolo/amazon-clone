import React, { useReducer, useEffect,  Children } from "react";

import Button from "../FormElements/Button";

import "./Carousel.scss";

const carouselReducer = (state, action) => {
   switch (action.type) {
      case "SLIDER":
         return({
            ...state,
            index: action.newIndex,
            transition: action.newTransition
         })
      case "SLIDER+ARROW": 
         return({
            ...state,
            index: action.newIndex,
            transition: action.newTransition,
            rightArrowStyles: action.newRightArrowStyles,
            leftArrowStyles: action.newLeftArrowStyles
         });
      default:
         return state;
   }
}

const Carousel = props => {

   const l = Children.count(props.children);

   // STATE && STYLES
   const [ carouselState, dispatch ] = useReducer(carouselReducer, {
      index: props.infinite ? Math.floor(Math.random() * l): 0,
      transition: "transform 250ms ease-in-out",
      leftArrowStyles: "rgba(255,255,255,0.5)",
      rightArrowStyles: "white"
   });

   const styles = {
      transform: `translateX(${-carouselState.index * 100}%)`,
      transition: `${carouselState.transition}`
   }

   // AUTOMATE CAROUSEL
   useEffect(() => {
      if (props.auto) {
         const automateCarousel = setTimeout(() => dispatch({
            type: "SLIDER",
            newIndex: (carouselState.index + 1) %l,
            newTransition: "transform 250ms ease-in-out"
         }), 7000);
         return () => clearTimeout(automateCarousel);
      }
   }, [carouselState]);

   // CLICK HANDLERS
   const leftClickHandler = () => {
      let newIndex, { index } = carouselState, newLeftArrowStyles, newRightArrowStyles;

      if (props.infinite) {
         newIndex = index-1;
      }
      else {
         newIndex = index == 0 ? index : index-1;
         newLeftArrowStyles = newIndex == 0 ? "rgba(255,255,255,0.5)" : "white";
         newRightArrowStyles = "white"
      }

      dispatch({
         type: "SLIDER+ARROW", 
         newIndex: newIndex,
         newTransition: "transform 250ms ease-in-out",
         newRightArrowStyles: newRightArrowStyles,
         newLeftArrowStyles: newLeftArrowStyles
      });
   } 
   const rightClickHandler = () => {
      let newIndex, { index } = carouselState, newLeftArrowStyles, newRightArrowStyles;

      if (props.infinite) {
         newIndex = index+1;
      }
      else {
         newIndex = index == 1 ? index : index+1;
         newRightArrowStyles = newIndex == 1 ? "rgba(255,255,255,0.5)" : "white";
         newLeftArrowStyles = "white";
      }

      dispatch({
         type: "SLIDER+ARROW", 
         newIndex: newIndex,
         newTransition: "transform 250ms ease-in-out",
         newRightArrowStyles: newRightArrowStyles,
         newLeftArrowStyles: newLeftArrowStyles
      });
   } 

   // TRANSITION HANDLER
   const transitionHandler = () => {
      if (carouselState.index == l-1 || carouselState.index == 0) {
         dispatch({
            type: "SLIDER",
            newTransition: "none",
            newIndex: carouselState.index ? 1 : l-2
         });
      }
   }

   return (
      <div className={`carousel ${props.className}`}>
         {props.title && (
            <div className="carousel__header">
               <h3 className="carousel__title">{props.title}</h3>
               <Button to="/random-category">Visualizza di più</Button>
            </div>
         )}
         <div
            className={`carousel__slider`}
            style={styles}
            onTransitionEnd={props.infinite ? transitionHandler : ""}
         >
            {props.children}
         </div>
         <Button
            className="carousel__left-arrow"
            onClick={leftClickHandler}
            style={{
               backgroundColor: props.infinite
                  ? ""
                  : carouselState.leftArrowStyles,
            }}
         ></Button>
         <Button
            className="carousel__right-arrow"
            onClick={rightClickHandler}
            style={{
               backgroundColor: props.infinite
                  ? ""
                  : carouselState.rightArrowStyles,
            }}
         ></Button>
      </div>
   );
}

export default Carousel;