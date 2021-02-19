import React, { useState } from "react";

import Button from "../FormElements/Button";

import "./Card.scss";

const Review = () => {

   const [review, setReview] = useState(0);

   const handleReview = e => {
      const reviewNumber = e.target.id.match(/\d$/);
      setReview(reviewNumber);
   }

   const styles = {
      star1: review >= 1 ? {"backgroundPositionX": "82.8%"} : {"backgroundPositionX": "96.5%"},
      star2: review >= 2 ? {"backgroundPositionX": "82.8%"} : {"backgroundPositionX": "96.5%"},
      star3: review >= 3 ? {"backgroundPositionX": "82.8%"} : {"backgroundPositionX": "96.5%"},
      star4: review >= 4 ? {"backgroundPositionX": "82.8%"} : {"backgroundPositionX": "96.5%"},
      star5: review >= 5 ? {"backgroundPositionX": "82.8%"} : {"backgroundPositionX": "96.5%"}
   }

   return (
      <div className="review__container">
         <i className="review__star" id="star1" style={styles.star1} onClick={handleReview}></i>
         <i className="review__star" id="star2" style={styles.star2} onClick={handleReview}></i>
         <i className="review__star" id="star3" style={styles.star3} onClick={handleReview}></i>
         <i className="review__star" id="star4" style={styles.star4} onClick={handleReview}></i>
         <i className="review__star" id="star5" style={styles.star5} onClick={handleReview}></i>
      </div>
   )
}

const Details = props => {

   const { data } = props;

   return (
      <div className="card__details">
         <section className="details__price">
            <span className="price__euro">{data.euro[0]}</span>
            <span>{data.cents[0]}</span>
            <span>{data.currency}</span>
            <span className="price__euro">
               {data.type == "range" ? "- " : ""}
            </span>
            <span className={`price__euro ${data.type == "discount" && "price__euro--discount"}`} >{data.euro[1]}</span>
            <span>{data.cents[1]}</span>
            <span>{data.currency}</span>
         </section>
         <span className="details__product">{data.product}</span>
      </div>
   );
}

const Card = props => {
   return (
      <article className={`card ${props.className}`} id={props.id}>
         {props.header && (
            <div className="card__header">
               <h2>{props.header}</h2>
            </div>
         )}
         <section className="card__body">{props.children}</section>
         {props.review && <Review></Review>}
         {props.details && <Details data={props.details}></Details>}
         {props.footer && (
            <div className="card__footer">
               <Button to="/random-category">{props.footer}</Button>
            </div>
         )}
      </article>
   );
}

export default Card;