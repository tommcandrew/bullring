import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import Card from "../Card";
import GlobalStyle from "../../styles/global";
import { AppWrapper } from "../../styles/app";
import fashionImages from "../../assets/images/images";
import { sortItemsByDate } from "../../utils/dateUtils";
import sortOptions from "../../enums/sortOptions";

const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  700: 1,
};

function App() {
  const [posts, setPosts] = useState([]);

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
      setPosts(sortedPosts);
    }
    updatePosts();
  }, []);

  const handleLoadMore = async () => {
    const morePosts = await getData();
    const sortedPosts = sortItemsByDate(morePosts, sortOptions.ASC);
    setPosts([...posts, ...sortedPosts]);
  };

  const getImageUrl = (index) => {
    const pageIndex = Math.floor(index / 20);
    const imageIndex = index - (20 * pageIndex);
    return fashionImages[imageIndex];
  };

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts
            .map((post, i) => (
              <Card
                key={post.item_id}
                post={post}
                img={getImageUrl(i)}
              />
            ))}
        </Masonry>
        <button onClick={handleLoadMore} type="button">More</button>
      </AppWrapper>
    </>
  );
}
export default App;
