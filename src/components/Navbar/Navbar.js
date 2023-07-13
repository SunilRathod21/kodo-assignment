import React, { useEffect, useState } from "react";
import "./Navbar.css";
import DropDown from "../DropDown/DropDown";
import { sortOption } from "../../utils/enum";

const Navbar = ({
  selectedOption,
  setSelectedOption,
  handleOptionChange,
  onSearch,
}) => {
  const [searchText, setSearchText] = useState("");
  let sessionSearch = sessionStorage.getItem("search");

  useEffect(() => {
    if (sessionSearch) {
      setSearchText(sessionSearch)
      onSearch(sessionSearch);
    }
  }, []);

  useEffect(() => {
    if (searchText === "") {
      onSearch(searchText);
    }
  }, [searchText]);

  return (
    <div className="navbar">
      {/* <h4 className="navbar__brand">Kodo Assignment</h4> */}
      <div className="navbar__search">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="navbar__btn" onClick={() => onSearch(searchText)}>
          Search
        </button>
      </div>

      <div className="drop-down-container">
        <h4 className="title">Sort By</h4>
        <DropDown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          handleOptionChange={handleOptionChange}
          options={sortOption}
        />
      </div>
    </div>
  );
};

export default Navbar;
