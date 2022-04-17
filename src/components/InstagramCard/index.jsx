import React from "react";
import PropTypes from "prop-types";
import {
  CardWrapper, CardImageWrapper, CardText, CardContent, CardUsername,
} from "../../styles/card";

function InstagramCard({ post, img }) {
  const htmlString = post.item_data.caption.replace(/#(\w+)/g, '<a href="https://instagram.com/explore/tags/$1" target="_blank">#$1</a>');
  const innerHtml = { __html: htmlString };
  return (
    <CardWrapper>
      <CardContent>
        <CardImageWrapper>
          <img src={img} alt="#" width="100%" />
        </CardImageWrapper>
        <CardUsername>
          {post.item_data.user.username}
        </CardUsername>
        <CardText dangerouslySetInnerHTML={innerHtml} />
      </CardContent>
    </CardWrapper>
  );
}

InstagramCard.propTypes = {
  post: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
};

export default InstagramCard;
