import React from 'react';
import { render } from '@testing-library/react';
import FeedCard from '../FeedCard/FeedCard';

describe('FeedCard', () => {
  const mockProps = {
    name: 'Test Name',
    description: 'Test Description',
    img: 'test.jpg',
    datalastEdited: '2023-07-13'
  };

  it('renders the component with correct props', () => {
    const { getByText, getByAltText } = render(<FeedCard {...mockProps} />);

    const titleElement = getByText(mockProps.name);
    const descriptionElement = getByText(mockProps.description);
    const imgElement = getByAltText(mockProps.img);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });

  it('displays the correct content', () => {
    const { getByText } = render(<FeedCard {...mockProps} />);

    expect(getByText(mockProps.name)).toBeInTheDocument();
    expect(getByText(mockProps.description)).toBeInTheDocument();
  });
});
