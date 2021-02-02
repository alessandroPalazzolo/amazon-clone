import React from "react";

import Header from "./Header";
import HeaderItem from "./HeaderItem";
import Button from "../FormElements/Button";
import SVG from "../images/SVG";
import SearchBar from "./SearchBar";

import "./MainNavigation.scss"

const lowerHeaderItems = [
   "Buoni Regalo",
   "Amazon.it di Alessandro",
   "Servizio Clienti",
   "Prime",
   "AmazonBasics",
   "Bestseller",
   "Idee Regalo",
   "Libri",
];

const MainNavigation = props => {
   return (
      <>
         <Header className="header--main">
            <Button exact to="/">
               <HeaderItem className="header__logo">
                  <span className="top-span">.it</span>
               </HeaderItem>
            </Button>

            <HeaderItem className="header__address" modalOnClick="address">
               <SVG type="marker"></SVG>
               <span className="top-span">Invia ad Alessandro</span>
               <span className="bottom-span">Siena 53100</span>
            </HeaderItem>

            <HeaderItem className="header__search-bar">
               <SearchBar />
            </HeaderItem>

            <Button to="/account">
               <HeaderItem
                  className="header__account"
                  modalOnOver="account"
                  lower
               >
                  <span className="account__text">
                     <span className="top-span">Ciao Alessandro</span>
                     <span>Account e Liste</span>
                  </span>
                  <span className="arrow-down arrow-down--account"></span>
               </HeaderItem>
            </Button>

            <Button to="/resi">
               <HeaderItem>
                  <span className="top-span">Resi</span>
                  <span>e ordini</span>
               </HeaderItem>
            </Button>

            <Button to="/carrello">
               <HeaderItem className="header__carrello">
                  <span className="cart__no-items">0</span>
                  <span className="cart__title">Carrello</span>
               </HeaderItem>
            </Button>
         </Header>

         <Header className="header--lower">
            <HeaderItem
               className="lower-item lower__tutte"
               modalOnClick="tutte"
            >
               <span>Tutte</span>
            </HeaderItem>

            {lowerHeaderItems.map((el, idx) => {
               if (idx == 3) {
                  return (
                     <Button to="/lower-header" key={idx}>
                        <HeaderItem
                           className="lower-item lower__prime"
                           modalOnOver="prime"
                           lower
                        >
                           <span>{el}</span>
                           <span className="arrow-down arrow-down--prime"></span>
                        </HeaderItem>
                     </Button>
                  );
               }

               return (
                  <Button to="/lower-header" key={idx}>
                     <HeaderItem className="lower-item">
                        <span>{el}</span>
                     </HeaderItem>
                  </Button>
               );
            })}

            <HeaderItem className="lower-item lower__ad">
            </HeaderItem>
            
         </Header>
      </>
   );
}

export default MainNavigation;