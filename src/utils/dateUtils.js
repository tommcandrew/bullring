import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import sortOptions from "../enums/sortOptions";

TimeAgo.addDefaultLocale(en);

export const sortItemsByDate = (items, selectedSortOption) => {
  const res = items.sort((a, b) => {
    if (selectedSortOption === sortOptions.ASC) {
      return new Date(b.item_created) - new Date(a.item_created);
    }
    return new Date(a.item_created) - new Date(b.item_created);
  });
  return res;
};

export const getRelativeTime = (date) => {
  const timeAgo = new TimeAgo("en-UK");
  return timeAgo.format(new Date(date));
};
