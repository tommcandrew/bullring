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
  post: PropTypes.object,
  img: PropTypes.string,
};

export default ManualCard;
