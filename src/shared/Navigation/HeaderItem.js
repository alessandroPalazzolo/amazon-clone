import React from "react";
import { useState } from "react";

import Modal from "../UIElements/Modal";

import "./HeaderItem.scss";

const HeaderItem = props => {

   const [modalState, setModalState] = useState(false);

   const handleOverModal = e => {
      if (props.modalOnOver) {
         if (e.type == "mouseover") 
            setModalState(true);
         else 
            setModalState(false);
      }
   }

   const handleClickModal = e => {
      if (props.modalOnClick) {
         if (!modalState) 
            setModalState(true);
         else 
            setModalState(false);
      }
   }

   return (
      <>
         {modalState && (
            <Modal
               elem={props.modalOnOver || props.modalOnClick}
               lower={props.lower}
               onCancel={handleClickModal}
            ></Modal>
         )}
         <div
            className={`header-item ${props.className}`}
            onClick={handleClickModal}
            onMouseOver={handleOverModal}
            onMouseOut={handleOverModal}
         >
            {props.children}
         </div>
      </>
   );
}

export default HeaderItem;