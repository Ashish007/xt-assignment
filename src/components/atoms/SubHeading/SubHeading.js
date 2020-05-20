import React from "react";
import ReactDOM from "react-dom";
import "./SubHeading.scss";
export default function SubHeading(props) {
    const {title} = props
    return <span className="sub-heading">{title}</span>
}