import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./CheckBox.scss";
export default function CheckBox(props) {
    const {category, categoryName, checked} = props
    return(
        <label className="checkbox-container">{categoryName}
        <input type="checkbox" name={category} value={categoryName} checked={checked}/>
        <span className="checkmark"></span>
        </label>
    )
}