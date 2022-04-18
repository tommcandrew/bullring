import React from "react";
import PropTypes from "prop-types";
import Masonry from "react-masonry-css";
import fashionImages from "../../assets/images/images";
import Card from "../Card";

const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  700: 1,
};

const getImageUrl = (index) => {
  const pageIndex = Math.floor(index / 20);
  const imageIndex = index - (20 * pageIndex);
  return fashionImages[imageIndex];
};

function Posts({ posts }) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {posts
        .map((post, i) => (
          <Card
            key={Math.random()}
            post={post}
            img={getImageUrl(i)}
          />
        ))}
    </Masonry>
  );
}

Posts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};

export default Posts;
