import React from "react";
import ReactDOM from "react-dom";
import "./AppliedFilters.scss";
export default function AppliedFilters(props) {
  const { filters, selectFilter } = props;
  return <div className="applied-filter-container">
      {Object.keys(filters).map(filter => {
         return filters[filter].map((filterVal)=>{
            return <button key={filterVal} name={filter} value={filterVal} onClick={(event, flag) => selectFilter(event, false)} className="applied-filter">{filterVal} X</button>
          })
      })}
  </div>;
}
