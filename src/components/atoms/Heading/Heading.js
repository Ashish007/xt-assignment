import React from "react";
import ReactDOM from "react-dom";
import "./Heading.scss";
export default function Heading(props) {
    const {title} = props
    return <h1 className="heading">{title}</h1>
}