import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./RMCharacter.scss";
import Card from "../../molecules/Card/Card";
import FilterTemplate from "../../templates/FilterTemplate/FilterTemplate";
import {
  filterCategories,
  filterCategoriesNestedKey,
} from "../../../constants";
import SearchBox from "../../organisms/SearchBox/SearchBox";
import CardContainer from "../../organisms/SearchBox/CardContainer/CardContainer";
import AppliedFilters from "../../molecules/AppliedFilters/AppliedFilters";
import Button from "../../atoms/Button/Button";
export default function RMCharacter() {
  const [page, setPage] = useState(1);
  const [filteredValue, setFilteredValue] = useState([]);
  const [res, setResponse] = useState([]);
  const [filterArr, setFilterArr] = useState({});
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 480;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    fetch("https://rickandmortyapi.com/api/character/?page=" + page)
      .then((response) => response.json())
      .then((res) => {
        setResponse(res && res.results);
        setFilteredValue(res && res.results);
      });
    // .then(res => console.log(res&&res.results))
  }, [page]);
  const nextPage = () => {
    setPage(page + 1);
  };
  const searchCharachterHandler = () => {
    const inputVal = document.getElementById("search").value;
    if (!inputVal) {
      setPage(1);
      setFilteredValue(res);
      return;
    }
    const searchedUser = filteredValue.filter(function (res) {
      return searchCharacter(res, inputVal);
    });
    setFilteredValue(searchedUser);
  };
  const searchCharacter = (charachter, inputVal) => {
    const firstName =
      charachter["name"] && charachter["name"].toUpperCase().split(" ")[0];
    const lastName =
      charachter["name"] && charachter["name"].toUpperCase().split(" ")[1];
    return (
      inputVal.toUpperCase() == firstName || inputVal.toUpperCase() == lastName
    );
  };
  const selectFilter = (event, selectFilter = true) => {
    const filters = { ...filterArr };
    let filter = filters[event.target.name];
    if (!event.target.checked || !selectFilter) {
      if (filter.length == 1 && Object.keys(filters).length == 1) {
        delete filters[event.target.name];
        setFilterArr(filters);
        setFilteredValue(res);
        return;
      } else if (filter.length == 1) delete filters[event.target.name];
      else filter.splice(filter.indexOf(event.target.value), 1);
    } else {
      if (!filters[event.target.name]) filters[event.target.name] = [];
      filters[event.target.name].push(event.target.value);
    }
    let retFlag = false;
    const finalArr = res.filter((res) => {
      for (let i in filters) {
        if (typeof res[i] == "object")
          retFlag = filters[i].indexOf(res[i][filterCategoriesNestedKey]) > -1;
        else retFlag = filters[i].indexOf(res[i]) > -1;
        if (retFlag) break;
      }
      return retFlag;
    });
    setFilterArr(filters);
    setFilteredValue(finalArr);
  };
  return (
    <div className="container">
      {/* {width > breakPoint ? (
        <FilterTemplate
          res={res}
          page={page}
          selectFilter={selectFilter}
          types={filterCategories}
          filterArr={filterArr}
        />
      ) : null} */}
      <div className="content">
        {width > breakPoint ? null : (
          <FilterTemplate
            res={res}
            page={page}
            selectFilter={selectFilter}
            types={filterCategories}
            filterArr={filterArr}
          />
        )}
        <SearchBox searchHandler={searchCharachterHandler} />
        <AppliedFilters filters={filterArr} selectFilter={selectFilter} />
        <CardContainer filteredValue={filteredValue} />
        <Button onClickHandler={nextPage} value="Next" />
      </div>
    </div>
  );
}
