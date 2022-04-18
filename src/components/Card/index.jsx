import React from "react";
import PropTypes from "prop-types";
import {
  CardWrapper, CardTimestamp,
} from "../../styles/card";
import { getRelativeTime } from "../../utils/dateUtils";
import ManualCard from "../ManualCard";
import TwitterCard from "../TwitterCard";
import InstagramCard from "../InstagramCard";
import cardTypes from "../../enums/cardTypes";

function Card({ post, img }) {
  return (
    <CardWrapper>
      {post.service_name === cardTypes.MANUAL && <ManualCard post={post} img={img} />}
      {post.service_name === cardTypes.TWITTER && <TwitterCard post={post} />}
      {post.service_name === cardTypes.INSTAGRAM && <InstagramCard post={post} img={img} />}
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
