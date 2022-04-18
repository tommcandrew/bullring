import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import Card from "../Card";
import GlobalStyle from "../../styles/global";
import { AppWrapper, LoadMoreButton, Buttons } from "../../styles/app";
import Filter from "../Filter";
import fashionImages from "../../assets/images/images";
import { sortItemsByDate } from "../../utils/dateUtils";
import sortOptions from "../../enums/sortOptions";

const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  700: 1,
};

function App() {
  const [postsData, setPostsData] = useState([]);
  const [sortedAndFilteredPosts, setSortedAndFilteredPosts] = useState([]);
  const [filter, setFilter] = useState(null);
  const [fetchingMore, setFetchingMore] = useState(false);

  async function getData() {
    const res = await axios.get(
      "http://private-cc77e-aff.apiary-mock.com/posts",
    );
    return res.data.items;
  }

  useEffect(() => {
    async function updatePosts() {
      const items = await getData();
      const sortedPosts = sortItemsByDate(items, sortOptions.ASC);
      setPostsData(sortedPosts);
    }
    updatePosts();
  }, []);

  useEffect(() => {
    let filteredPosts;
    if (filter) {
      filteredPosts = postsData.filter((post) => post.service_name === filter);
    } else {
      filteredPosts = [...postsData];
    }
    setSortedAndFilteredPosts(filteredPosts);
  }, [postsData, filter]);

  const handleLoadMore = async () => {
    setFetchingMore(true);
    const morePosts = await getData();
    const sortedPosts = sortItemsByDate(morePosts, sortOptions.ASC);
    setFetchingMore(false);
    setPostsData([...postsData, ...sortedPosts]);
  };

  const getImageUrl = (index) => {
    const pageIndex = Math.floor(index / 20);
    const imageIndex = index - (20 * pageIndex);
    return fashionImages[imageIndex];
  };

  const handleFilter = (selectedFilter) => {
    if (filter && selectedFilter === filter) {
      setFilter(null);
    } else {
      setFilter(selectedFilter);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Filter onFilter={handleFilter} currentFilter={filter} />
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {sortedAndFilteredPosts
            .map((post, i) => (
              <Card
                key={Math.random()}
                post={post}
                img={getImageUrl(i)}
              />
            ))}
        </Masonry>
        <Buttons>
          <LoadMoreButton onClick={handleLoadMore} type="button" $loading={fetchingMore}><span>More</span></LoadMoreButton>
        </Buttons>
      </AppWrapper>
    </>
  );
}
export default App;
