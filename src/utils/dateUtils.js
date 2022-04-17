/* eslint-disable import/prefer-default-export */
import sortOptions from "../enums/sortOptions";

export const sortItemsByDate = (items, selectedSortOption) => {
  const res = items.sort((a, b) => {
    if (selectedSortOption === sortOptions.ASC) {
      return new Date(b.item_created) - new Date(a.item_created);
    }
    return new Date(a.item_created) - new Date(b.item_created);
  });
  return res;
};
