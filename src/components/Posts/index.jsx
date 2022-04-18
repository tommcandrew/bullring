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
  // so each post keeps the same image after loading more
  const currentPageIndex = Math.floor(index / 20);
  const imageIndex = index - 20 * currentPageIndex;
  return fashionImages[imageIndex];
};

function Posts({ posts }) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {posts.map((post, i) => (
        <Card
          // eslint-disable-next-line react/no-array-index-key
          key={post.item_id + i}
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

export default React.memo(Posts);
