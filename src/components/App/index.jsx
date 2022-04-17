import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import fashionImages from "../../assets/images/images";
import ManualCard from "../ManualCard";
import InstagramCard from "../InstagramCard";
import TwitterCard from "../TwitterCard";
import GlobalStyle from "../../styles/global";
import { AppWrapper } from "../../styles/app";

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
      "http://private-cc77e-aff.apiary-mock.com/posts"
    );
    setPosts(res.data.items);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(posts.filter((post) => post.service_name === "Instagram"));
  }, [posts]);

  const getRandomImageUrl = () => fashionImages[Math.floor(Math.random() * 20)];

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
                  <ManualCard post={post} img={fashionImages[i]} />
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
