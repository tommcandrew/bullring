import React from "react";
import { FaInstagram } from "react-icons/fa";
import PropTypes from "prop-types";
import {
  CardImageWrapper,
  CardText,
  CardContent,
  CardUsername,
  SocialIconWrapper,
} from "../../styles/card";
import { parseInstagram } from "../../utils/parsingUtils";
import cardTypes from "../../enums/cardTypes";

function InstagramCard({ post, img }) {
  const postHtml = parseInstagram(post.item_data.caption);
  const innerHtml = { __html: postHtml };
  return (
    <>
      <SocialIconWrapper $type={cardTypes.INSTAGRAM}>
        <FaInstagram size="2em" color="white" />
      </SocialIconWrapper>
      <CardContent>
        <CardImageWrapper>
          <img src={img} alt="#" width="100%" loading="lazy" />
        </CardImageWrapper>
        <CardUsername>{post.item_data.user.username}</CardUsername>
        <CardText dangerouslySetInnerHTML={innerHtml} />
      </CardContent>
    </>
  );
}

InstagramCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
};

export default InstagramCard;
