import React from "react";
import { FaTwitter } from "react-icons/fa";
import {
  CardUsername,
  CardText,
  SocialIconWrapper,
} from "../../styles/card";
import { parseTwitter } from "../../utils/parsingUtils";

function TwitterCard({ post }) {
  const tweetHtml = parseTwitter(post.item_data.tweet);
  const innerHtml = { __html: tweetHtml };

  return (
    <>
      <SocialIconWrapper type="Twitter">
        <FaTwitter size="2em" color="white" />
      </SocialIconWrapper>
      <CardUsername>{post.item_data.user.username}</CardUsername>
      <CardText dangerouslySetInnerHTML={innerHtml} />
    </>
  );
}

export default TwitterCard;
