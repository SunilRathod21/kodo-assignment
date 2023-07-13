import React from "react";
import FeedCard from "../FeedCard/FeedCard";
import "./FeedContainer.css";

const FeedContainer = ({mockData}) => {
  return (
    <div className="feedContainer">
      {mockData.map((data,index) => (
        <FeedCard
          key={index}
          name={data.name}
          description={data.description}
          img={data.image}
          data-testid="feed-card"
        />
      ))}
      {mockData.length === 0 && <div>No Data Found</div>}
    </div>
  );
};

export default FeedContainer;
