import React from "react";
import ReactDOM from "react-dom";
import "./Card.scss";
import { createdOn } from "../../../utility";
import { cardDetailsKey, tags } from "../../../constants";

export default function Card(props) {
  const { res } = props;
  const { id, name, image, created } = res;
  const filtered = Object.keys(res)
    .filter((key) => cardDetailsKey.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: res[key],
      };
    }, {});
  // fetch(image)
  // .then(res => console.log(res))
  return (
    <article className="card">
      <img alt={name} src={image} width="100%" />
      <div>{name}</div>
      <div>
        {tags.id}: {id} {createdOn(created)}
      </div>
      <div>
      {Object.keys(filtered).map((key) => {
        return (
          <div key={key} className="card__table">
            <span className="card__key">{key.toUpperCase()}</span>
            {
              <span className="card__value">
                {typeof filtered[key] == "object"
                  ? filtered[key]["name"]
                  : filtered[key]}
              </span>
            }
          </div>
        );
      })}
          </div>
    </article>
  );
}
