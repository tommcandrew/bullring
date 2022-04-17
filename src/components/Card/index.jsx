import React from "react";
import PropTypes from "prop-types";
import {
  CardWrapper, CardContent, CardTimestamp,
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
  post: PropTypes.object,
  img: PropTypes.string,
};

export default Card;
