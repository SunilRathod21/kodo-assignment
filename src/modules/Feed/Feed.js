import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FeedContainer from "../../components/FeedContainer/FeedContainer";
import Table from "../../components/Table/Table";
import { mockData } from "../../utils/mock_data";
import Pagination from "../../components/Pagination/Pagination";
import { sortOption } from "../../utils/enum";
import { sortByDate, sortByName } from "../../utils/utils";

const Feed = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [feedData, setFeedData] = useState(mockData);
  const [filteredData, setFilteredData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [isSearch,setIsSearch] = useState(false)
  const [selectedOption, setSelectedOption] = useState(() => {
    const sortBySession = sessionStorage.getItem("sortBy");
    return sortBySession || sortOption[0];
  });
  const limit = 10;
  const totalPages = Math.ceil(feedData.length / limit);

  const sortFeedData = (data) => {
    if (selectedOption === "name") {
      sessionStorage.setItem("sortBy", "name");
      return sortByName(data);
    } else if (selectedOption === "dateLastEdited") {
      sessionStorage.setItem("sortBy", "dateLastEdited");
      return sortByDate(data);
    } else {
      return data;
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    const slicedData = feedData.slice(startIndex, endIndex);
    const sortedData = sortFeedData(slicedData);
    setFilteredData(sortedData);
  }, [currentPage, limit, feedData, selectedOption]);

  useEffect(() => {
    if (isSearch) {
      setFeedData(searchedData);
    }
  }, [searchedData]);

  const onSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFeedData(mockData);
      return;
    }
    setIsSearch(true)
    const isPhraseSearch =
      searchTerm.startsWith('"') && searchTerm.endsWith('"');
    let filteredResults;

    if (isPhraseSearch) {
      const phrase = searchTerm.slice(1, -1).toLowerCase();
      filteredResults = mockData.filter(
        (el) =>
          el.name.toLowerCase().includes(phrase) ||
          el.description.toLowerCase().includes(phrase)
      );
    } else {
      filteredResults = mockData.filter(
        (el) =>
          el.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          el.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setSearchedData(filteredResults);

    console.log("after set");

    sessionStorage.setItem("search", searchTerm);
  };

  console.log("--->", feedData);

  return (
    <>
      <Navbar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        handleOptionChange={handleOptionChange}
        onSearch={onSearch}
      />
      <FeedContainer mockData={filteredData} />
      <Table data={filteredData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default Feed;
