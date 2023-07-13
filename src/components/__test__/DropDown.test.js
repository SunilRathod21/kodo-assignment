import React, { useState } from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import DropDown from "../DropDown/DropDown";

describe("DropDown", () => {
  const mockOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  it("renders the component with correct options", () => {
    const Component = () => {
      const [selectedOption, setSelectedOption] = useState(mockOptions[0].value);
      const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };

      return (
        <DropDown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          handleOptionChange={handleOptionChange}
          options={mockOptions}
        />
      );
    };

    const { getByText } = render(<Component />);

    mockOptions.forEach((option) => {
      expect(getByText(option.label)).toBeInTheDocument();
    });
  });

});
