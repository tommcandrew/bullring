import React from "react";
import twitter from "twitter-text";
import { CardWrapper, CardUsername, CardText } from "../../styles/card";

function TwitterCard({ post, img }) {
  const res = twitter.autoLink(twitter.htmlEscape(post.item_data.tweet));
  const innerHtml = { __html: res };

  return (
    <CardWrapper>
      <CardUsername>
        {post.item_data.user.username}
      </CardUsername>
      <CardText dangerouslySetInnerHTML={innerHtml} />
    </CardWrapper>
  );
}

export default TwitterCard;
