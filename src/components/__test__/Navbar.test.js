import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";

describe("Navbar component", () => {
  const onSearch = jest.fn()
  it("renders the search input and button", () => {
    const { getByPlaceholderText, getByText } = render(<Navbar onSearch={onSearch} />);
    const searchInput = getByPlaceholderText("Search...");
    const searchButton = getByText("Search");
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("updates the search text when the input value changes", () => {
    const { getByPlaceholderText } = render(<Navbar onSearch={onSearch}/>);
    const searchInput = getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "example" } });
    expect(searchInput.value).toBe("example");
  });

  it("calls onSearch function when the search button is clicked", () => {
    const mockOnSearch = jest.fn();
    const { getByText } = render(<Navbar onSearch={mockOnSearch} />);
    const searchButton = getByText("Search");
    fireEvent.click(searchButton);
    expect(mockOnSearch).toHaveBeenCalled();
  });

});
