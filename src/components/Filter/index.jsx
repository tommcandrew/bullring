import React from "react";
import PropTypes from "prop-types";
import { FilterWrapper, FilterButton, FilterButtons } from "../../styles/filter";
import cardTypes from "../../enums/cardTypes";

const FILTER_OPTIONS = [
  cardTypes.MANUAL,
  cardTypes.TWITTER,
  cardTypes.INSTAGRAM,
];

function Filter({ onFilter, currentFilter }) {
  return (
    <FilterWrapper>
      <FilterButtons>
        {FILTER_OPTIONS.map((option) => (
          <FilterButton
            key={option}
            isActive={currentFilter === option}
            onClick={() => onFilter(option)}
          >
            {option}
          </FilterButton>
        ))}
      </FilterButtons>
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
