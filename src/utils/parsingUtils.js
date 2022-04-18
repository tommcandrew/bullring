export const parseTwitter = (text) => {
  const htmlString = text.replace(
    /#(\w+)/g,
    '<a href="https://twitter.com/search?q=%23$1" target="_blank">#$1</a>',
  ).replace(
    /@(\w+)/g,
    '<a href="https://twitter.com/$1" target="_blank">@$1</a>',
  );
  return htmlString;
};

export const parseInstagram = (text) => {
  const htmlString = text.replace(
    /#(\w+)/g,
    '<a href="https://instagram.com/explore/tags/$1" target="_blank">#$1</a>',
  );
  return htmlString;
};
