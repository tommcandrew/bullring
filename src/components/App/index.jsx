import React, { useState, useEffect } from "react";
import axios from "axios";
import GlobalStyle from "../../styles/global";
import { AppWrapper, LoadMoreButton, Buttons } from "../../styles/app";
import Filter from "../Filter";
import { sortItemsByDate } from "../../utils/dateUtils";
import sortOptions from "../../enums/sortOptions";
import Posts from "../Posts";

function App() {
  const [postsData, setPostsData] = useState([]);
  const [sortedAndFilteredPosts, setSortedAndFilteredPosts] = useState([]);
  const [fetchingMore, setFetchingMore] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(null);

  async function getData() {
    const res = await axios.get(
      "http://private-cc77e-aff.apiary-mock.com/posts",
    );
    return sortItemsByDate(res.data.items, sortOptions.ASC);
  }

  useEffect(() => {
    async function updatePosts() {
      const items = await getData();
      setPostsData(items);
    }
    updatePosts();
  }, []);

  useEffect(() => {
    let filteredPosts;
    if (currentFilter) {
      filteredPosts = postsData.filter(
        (post) => post.service_name === currentFilter,
      );
    } else {
      filteredPosts = [...postsData];
    }
    setSortedAndFilteredPosts(filteredPosts);
  }, [postsData, currentFilter]);

  const handleLoadMore = async () => {
    setFetchingMore(true);
    const morePosts = await getData();
    setFetchingMore(false);
    setPostsData([...postsData, ...morePosts]);
  };

  const handleFilter = (selectedFilter) => {
    if (currentFilter && selectedFilter === currentFilter) {
      setCurrentFilter(null);
    } else {
      setCurrentFilter(selectedFilter);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Filter onFilter={handleFilter} currentFilter={currentFilter} />
        <Posts posts={sortedAndFilteredPosts} />
        <Buttons>
          <LoadMoreButton
            onClick={handleLoadMore}
            type="button"
            loading={fetchingMore}
          >
            <span>More</span>
          </LoadMoreButton>
        </Buttons>
      </AppWrapper>
    </>
  );
}
export default React.memo(App);
