import React from "react";

import Card from "../../../shared/UIElements/Card";

const CardsRow = props => {

   const { data } = props;

   return (
      <section className="cards-row">
         {
            data.map((el, idx) => {
               return (
                  <Card
                     key={idx}
                     header={el.header}
                     footer={el.footer}
                     review={el.review}
                     details={el.details}
                  >
                     <img src={el.img} alt="image-card"></img>
                  </Card>
               );
            })
         }
      </section>
   );
}

export default CardsRow;