import React from "react";
import PropTypes from "prop-types";
import { FilterWrapper, FilterButton } from "../../styles/filter";
import cardTypes from "../../enums/cardTypes";

function Filter({ onFilter, currentFilter }) {
  return (
    <FilterWrapper>
      <FilterButton
        $isActive={currentFilter === cardTypes.MANUAL}
        onClick={() => onFilter(cardTypes.MANUAL)}
      >
        Manual
      </FilterButton>
      <FilterButton
        $isActive={currentFilter === cardTypes.TWITTER}
        onClick={() => onFilter(cardTypes.TWITTER)}
      >
        Twitter
      </FilterButton>
      <FilterButton
        $isActive={currentFilter === cardTypes.INSTAGRAM}
        onClick={() => onFilter(cardTypes.INSTAGRAM)}
      >
        Instagram
      </FilterButton>
    </FilterWrapper>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string,
};

Filter.defaultProps = {
  currentFilter: null,
};

export default Filter;
