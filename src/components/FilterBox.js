import React from "react";
import PropTypes from "prop-types";

export default function FilterBox({
  searchText,
  onValueChange,
  onSearchClicked
}) {
  return (
    <label>
      <input type="radio" />
      Never
    </label>
  );
}

FilterBox.propTypes = {
  searchText: PropTypes.string,
  onValueChange: PropTypes.func,
  onSearchClicked: PropTypes.func
};
