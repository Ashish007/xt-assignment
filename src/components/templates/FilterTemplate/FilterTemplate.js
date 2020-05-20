import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./FilterTemplate.scss";
import { filterCategoriesNestedKey } from "../../../constants";
import CheckBox from "../../atoms/CheckBox/CheckBox";
import Border from "../../atoms/Border/Border";
import Heading from "../../atoms/Heading/Heading";
import SubHeading from "../../atoms/SubHeading/SubHeading";

export default function FilterTemplate(props) {
  const { res, selectFilter, types, filterArr } = props;
  const [categories, setCategories] = useState({});
  useEffect(() => {
    const types = categoriseSpecies(res);
    setCategories(types);
  }, [res]);
  function categoriseSpecies(arr) {
    let specieFilter = {};
    for (let i = 0; i < types.length; i++) {
      let specieFilterB = {};
      for (let j = 0; j < arr.length; j++) {
        if (typeof arr[j][types[i]] == "object") {
          if (!specieFilterB[arr[j][types[i]][filterCategoriesNestedKey]])
            specieFilterB[arr[j][types[i]][filterCategoriesNestedKey]] = [];
          specieFilterB[arr[j][types[i]][filterCategoriesNestedKey]].push(
            arr[j]
          );
        } else {
          if (!specieFilterB[arr[j][types[i]]])
            specieFilterB[arr[j][types[i]]] = [];
          specieFilterB[arr[j][types[i]]].push(arr[j]);
        }
      }
      specieFilter[types[i]] = specieFilterB;
    }
    return specieFilter;
  }

  return (
    <div className="filter-container" onClick={selectFilter}>
      <Heading title="Filter"/>
      {categories &&
        Object.keys(categories).map((category) =>
          Object.keys(categories[category]).map((categoryName, index) => (
            <div className="filter" key={categoryName}>
              {index == 0 ? <SubHeading title={category} /> : null}
              {/* checked={filterArr[category] && filterArr[category].indexOf(categoryName) != -1 ? "checked" : null}  */}
              <CheckBox category={category} categoryName={categoryName} checked={filterArr[category] && filterArr[category].indexOf(categoryName) != -1} />
              {index == Object.keys(categories[category]).length - 1 ? (
                <Border />
              ) : null}
            </div>
          ))
        )}
    </div>
  );
}
