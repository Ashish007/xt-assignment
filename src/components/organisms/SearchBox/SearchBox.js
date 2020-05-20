import React from "react";
import ReactDOM from "react-dom";
import "./SearchBox.scss";
import Button from "../../atoms/Button/Button";
export default function SearchBox(props) {
  const { searchHandler } = props;
  return (
    <div className="search-box-container">
      <div className="search-box">
        <input id="search" placeholder="Search charachter" />
        <Button onClickHandler={searchHandler} value="Search" />
      </div>
    </div>
  );
}
