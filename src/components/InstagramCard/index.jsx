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

function InstagramCard({ post, img }) {
  const htmlString = post.item_data.caption.replace(
    /#(\w+)/g,
    '<a href="https://instagram.com/explore/tags/$1" target="_blank">#$1</a>'
  );
  const innerHtml = { __html: htmlString };
  return (
    <>
      <SocialIconWrapper>
        <FaInstagram size="2em" color="white" />
      </SocialIconWrapper>
      <CardContent>
        <CardImageWrapper>
          <img src={img} alt="#" width="100%" />
        </CardImageWrapper>
        <CardUsername>{post.item_data.user.username}</CardUsername>
        <CardText dangerouslySetInnerHTML={innerHtml} />
      </CardContent>
    </>
  );
}

InstagramCard.propTypes = {
  post: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
};

export default InstagramCard;
