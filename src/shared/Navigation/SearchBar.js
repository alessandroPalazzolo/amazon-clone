import React from "react";

import Input from "../FormElements/Input";
import Button from "../FormElements/Button";

import "./SearchBar.scss";

const SearchBar = props => {
   return (
      <span className="search-bar">
         <select className="search-bar__select">
            <option selected="selected">Tutte le categorie </option>
            <option>option</option>
            <option>option</option>
            <option>option</option>
            <option>option...</option>
         </select>
         <Input className="search-bar__input" />
         <Button className="search-bar__button" />
      </span>
   );
}

export default SearchBar;