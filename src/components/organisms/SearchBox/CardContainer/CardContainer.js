import React from "react";
import ReactDOM from "react-dom";
import "./CardContainer.scss";
import Card from "../../../molecules/Card/Card";
import { errorMessage } from "../../../../constants";
export default function CardContainer(props) {
  const { filteredValue } = props;
  return (
    <div className="card-container">
      {filteredValue && filteredValue.length > 0 ? (
        filteredValue &&
        filteredValue.map((res) => <Card key={res.id} res={res} />)
      ) : (
      <span className="error-message">{errorMessage}</span>
      )}
    </div>
  );
}
