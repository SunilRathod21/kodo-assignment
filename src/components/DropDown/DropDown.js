import React from "react";
import "./DropDown.css";
const DropDown = ({
  selectedOption,
  setSelectedOption,
  handleOptionChange,
  options,
}) => {
  return (
    <select
      className="drop-down"
      value={selectedOption}
      onChange={handleOptionChange}
    >
      {options.map((el) => (
        <option value={el.value}>{el.label}</option>
      ))}
    </select>
  );
};

export default DropDown;
