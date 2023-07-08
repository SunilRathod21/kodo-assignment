import React, { useState } from "react";
import "./Navbar.css";
import DropDown from "../DropDown/DropDown";
import { sortOption } from "../../utils/enum";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState(sortOption[0]);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="navbar">
      <h4 className="navbar__brand">Kodo Assignment</h4>
      <div className="navbar__search">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="navbar__btn">Search</button>
      </div>

      <div className="drop-down-container">
        <h4 className="title">Sort By</h4>
        <DropDown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          handleOptionChange={handleOptionChange}
          options = {sortOption}
        />
      </div>
    </div>
  );
};

export default Navbar;
