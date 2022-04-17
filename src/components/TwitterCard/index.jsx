import React from "react";
import { FaTwitter } from "react-icons/fa";
import twitter from "twitter-text";
import {
  CardWrapper,
  CardUsername,
  CardText,
  SocialIconWrapper,
} from "../../styles/card";

function TwitterCard({ post }) {
  const res = twitter.autoLink(twitter.htmlEscape(post.item_data.tweet));
  const innerHtml = { __html: res };

  return (
    <CardWrapper>
      <SocialIconWrapper>
        <FaTwitter size="2em" color="white" />
      </SocialIconWrapper>
      <CardUsername>{post.item_data.user.username}</CardUsername>
      <CardText dangerouslySetInnerHTML={innerHtml} />
    </CardWrapper>
  );
}

export default TwitterCard;
