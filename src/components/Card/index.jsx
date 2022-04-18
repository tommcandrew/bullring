import React from "react";
import PropTypes from "prop-types";
import {
  CardWrapper, CardTimestamp,
} from "../../styles/card";
import { getRelativeTime } from "../../utils/dateUtils";
import ManualCard from "../ManualCard";
import TwitterCard from "../TwitterCard";
import InstagramCard from "../InstagramCard";

function Card({ post, img }) {
  return (
    <CardWrapper>
      {post.service_name === "Manual" && <ManualCard post={post} img={img} />}
      {post.service_name === "Twitter" && <TwitterCard post={post} />}
      {post.service_name === "Instagram" && <InstagramCard post={post} img={img} />}
      <CardTimestamp>{getRelativeTime(post.item_created)}</CardTimestamp>
    </CardWrapper>
  );
}

Card.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.object.isRequired,
  img: PropTypes.string,
};

Card.defaultProps = {
  img: null,
};

export default Card;
