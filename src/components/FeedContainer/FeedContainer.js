import React from "react";
import FeedCard from "../FeedCard/FeedCard";
import "./FeedContainer.css";

const FeedContainer = ({mockData}) => {
  return (
    <div className="feedContainer">
      {mockData.map((data) => (
        <FeedCard
          name={data.name}
          description={data.description}
          img={data.image}
        />
      ))}
    </div>
  );
};

export default FeedContainer;
