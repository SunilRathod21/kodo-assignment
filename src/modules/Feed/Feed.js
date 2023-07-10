import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FeedContainer from "../../components/FeedContainer/FeedContainer";
import Table from "../../components/Table/Table";
import { mockData } from "../../utils/mock_data";
import { sortOption } from "../../utils/enum";

const Feed = () => {
  const [selectedOption, setSelectedOption] = useState(sortOption[0]);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Navbar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        handleOptionChange={handleOptionChange}
        onSearch = {onSearch}
      />
      <FeedContainer mockData={mockData} />
      <Table data={mockData} />
    </>
  );
};

export default Feed;
