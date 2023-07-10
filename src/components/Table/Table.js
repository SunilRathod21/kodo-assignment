import React from 'react'
import "./Table.css";
import { formattedDate } from '../../utils/utils';
const Table = ({data}) => {
  return (
    <div className="table-container">
    <h4 className='title'>Tabular Form</h4>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Last Edited</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{formattedDate(item.dateLastEdited)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table