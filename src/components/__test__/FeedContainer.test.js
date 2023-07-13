import React from "react";
import { render } from "@testing-library/react";
import FeedContainer from "../FeedContainer/FeedContainer";

describe("FeedContainer", () => {
  it("should render FeedCard components for each data item", () => {
    const mockData = [
      {
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet",
        image: "https://example.com/image1.jpg",
      },
      {
        name: "Jane Smith",
        description: "Consectetur adipiscing elit",
        image: "https://example.com/image2.jpg",
      },
    ];

    const { getByText, getByAltText } = render(
      <FeedContainer mockData={mockData} />
    );

    mockData.forEach((data) => {
      const nameElement = getByText(data.name);
      const descriptionElement = getByText(data.description);
      const imgElement = getByAltText(data.image);

      expect(nameElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
      expect(imgElement).toBeInTheDocument();
    });
  });

  it("should render 'No Data Found' message when mockData is empty", () => {
    const mockData = [];

    const { getByText } = render(<FeedContainer mockData={mockData} />);
    const noDataMessage = getByText("No Data Found");

    expect(noDataMessage).toBeInTheDocument();
  });
});
