import React from "react";
import PropTypes from "prop-types";
import {
  CardImageWrapper, CardText, CardLinkWrapper, CardContent,
} from "../../styles/card";

function ManualCard({ post, img }) {
  return (
    <CardContent>
      <CardImageWrapper>
        <img src={img} alt="#" width="100%" loading="lazy" />
      </CardImageWrapper>
      <CardText>{post.item_data.text}</CardText>
      <CardLinkWrapper>
        <a href={post.item_data.link} target="_blank" rel="noreferrer">{post.item_data.link_text}</a>
      </CardLinkWrapper>
    </CardContent>
  );
}

ManualCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.object.isRequired,
  img: PropTypes.string,
};

ManualCard.defaultProps = {
  img: null,
};

export default ManualCard;
