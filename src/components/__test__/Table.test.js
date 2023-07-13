import React from 'react';
import { render } from '@testing-library/react';
import Table from '../Table/Table';
import { formattedDate } from '../../utils/utils';

describe('Table', () => {
  const mockData = [
    {
      name: 'Item 1',
      description: 'Description 1',
      dateLastEdited: '2023-07-13'
    },
    {
      name: 'Item 2',
      description: 'Description 2',
      dateLastEdited: '2023-07-14'
    }
  ];

  it('renders the component with correct data', () => {
    const { getByText } = render(<Table data={mockData} />);

    expect(getByText('Tabular Form')).toBeInTheDocument();
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
    expect(getByText('Last Edited')).toBeInTheDocument();

    mockData.forEach(item => {
      expect(getByText(item.name)).toBeInTheDocument();
      expect(getByText(item.description)).toBeInTheDocument();
      expect(getByText(formattedDate(item.dateLastEdited))).toBeInTheDocument();
    });
  });
});
