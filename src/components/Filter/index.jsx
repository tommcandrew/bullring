import React from "react";
import PropTypes from "prop-types";
import { FilterWrapper, FilterButton } from "../../styles/filter";

function Filter({ onFilter, currentFilter }) {
  return (
    <FilterWrapper>
      <FilterButton isActive={currentFilter === "Manual"} onClick={() => onFilter("Manual")}>Manual</FilterButton>
      <FilterButton isActive={currentFilter === "Twitter"} onClick={() => onFilter("Twitter")}>Twitter</FilterButton>
      <FilterButton isActive={currentFilter === "Instagram"} onClick={() => onFilter("Instagram")}>Instagram</FilterButton>
    </FilterWrapper>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

export default Filter;
