import React from "react";

const SVG = props => {
   if (props.type == "marker") {
      return (
         <svg
            viewBox="0 0 24 24"
            width="19"
            height="17"
            stroke="white"
            stroke-width="2.2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
         >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
         </svg>
      );
   }
}

export default SVG;