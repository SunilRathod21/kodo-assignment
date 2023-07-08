import React from 'react';
import "./FeedCard.css";

const FeedCard = ({name,description,img,datalastEdited}) => {
  return (
    <div className='feedCard'>
        <img src={img} alt={img}/>
        <h1 className='title'>{name}</h1>
        <p className='description'>{description}</p>
    </div>
  )
}

export default FeedCard