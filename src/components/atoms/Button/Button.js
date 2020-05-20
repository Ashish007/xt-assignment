import React from "react";
import ReactDOM from "react-dom";
import "./Button.scss";
export default function Button(props) {
    const {onClickHandler, value} = props;
    return (
        <>
        <button onClick={onClickHandler} className="button-search">{value}</button>
        </>
    )
}
