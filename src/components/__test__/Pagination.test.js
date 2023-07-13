import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination/Pagination";

describe("Pagination component", () => {
  it("renders the correct number of page buttons", () => {
    const { getAllByRole } = render(
      <Pagination currentPage={1} totalPages={5} />
    );
    const pageButtons = getAllByRole("button");
    expect(pageButtons).toHaveLength(3); // Previous, Current, Next buttons
  });

  it("disables the Previous button on the first page", () => {
    const { getByText } = render(
      <Pagination currentPage={1} totalPages={5} />
    );
    const previousButton = getByText("Previous");
    expect(previousButton).toBeDisabled();
  });

  it("disables the Next button on the last page", () => {
    const { getByText } = render(
      <Pagination currentPage={5} totalPages={5} />
    );
    const nextButton = getByText("Next");
    expect(nextButton).toBeDisabled();
  });

  it("calls onPageChange with the correct page number when Previous button is clicked", () => {
    const mockOnPageChange = jest.fn();
    const { getByText } = render(
      <Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />
    );
    const previousButton = getByText("Previous");
    fireEvent.click(previousButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange with the correct page number when Next button is clicked", () => {
    const mockOnPageChange = jest.fn();
    const { getByText } = render(
      <Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />
    );
    const nextButton = getByText("Next");
    fireEvent.click(nextButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  // Add more test cases as needed
});
