import React from "react";
import PropTypes from "prop-types";
import { FilterWrapper } from "../../styles/filter";

function Filter({ onFilter }) {
  return (
    <FilterWrapper>
      <button onClick={() => onFilter("Manual")}>Manual</button>
      <button onClick={() => onFilter("Twitter")}>Twitter</button>
      <button onClick={() => onFilter("Instagram")}>Instagram</button>
    </FilterWrapper>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
