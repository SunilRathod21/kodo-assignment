import React from 'react'
import "./NoDataFound.css";
const NoDataFound = () => {
  return (
    <div className="container">
    <h2 className="heading">Data Not Found</h2>
    <p className="message">Sorry, the requested data could not be found.</p>
  </div>
  )
}

export default NoDataFound