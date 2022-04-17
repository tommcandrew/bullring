import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import Card from "../Card";
import GlobalStyle from "../../styles/global";
import { AppWrapper } from "../../styles/app";
import { getRandomImageUrl } from "../../utils/imageUtils";
import { sortItemsByDate } from "../../utils/dateUtils";
import sortOptions from "../../enums/sortOptions";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

function App() {
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    const res = await axios.get(
      "http://private-cc77e-aff.apiary-mock.com/posts",
    );
    setPosts(sortItemsByDate(res.data.items, sortOptions.ASC));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts.map((post) => <Card key={post.item_id} post={post} img={getRandomImageUrl()} />)}
        </Masonry>
      </AppWrapper>
    </>
  );
}
export default App;
