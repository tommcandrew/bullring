import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import ManualCard from "../ManualCard";
import InstagramCard from "../InstagramCard";
import TwitterCard from "../TwitterCard";
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
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions.ASC);

  async function fetchData() {
    const res = await axios.get(
      "http://private-cc77e-aff.apiary-mock.com/posts",
    );
    setPosts(sortItemsByDate(res.data.items, selectedSortOption));
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
          {posts.map((post, i) => {
            if (post.service_name === "Manual") {
              return (
                <div key={post.item_id}>
                  <ManualCard post={post} img={getRandomImageUrl()} />
                </div>
              );
            }
            if (post.service_name === "Instagram") {
              return (
                <div key={post.item_id}>
                  <InstagramCard post={post} img={getRandomImageUrl()} />
                </div>
              );
            }
            if (post.service_name === "Twitter") {
              return (
                <div key={post.item_id}>
                  <TwitterCard post={post} />
                </div>
              );
            }
            return null;
          })}
        </Masonry>
      </AppWrapper>
    </>
  );
}
export default App;
