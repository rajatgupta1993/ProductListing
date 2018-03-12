import React from "react";
import PropTypes from "prop-types";

export default function FilterBox({ onSorting }) {
  return (
    <div className="filter-container">
            <div className="filter-box">

              <div style={{ float: 'right' }} onClick={onSorting}>
                  <label>
                    <input type="radio" name="selection" value ="None"/>
                    None
                   </label>

                  <label>
                    <input type="radio" name="selection" value ="High Price"/>
                    High Price
                   </label>

                  <label>
                    <input type="radio" name="selection" value ="Low Price" />
                    Low Price
                    </label>

                  <label>
                    <input type="radio" name="selection" value ="New" />
                    New
                   </label>
              </div>

            </div>
          </div>
  );
}

FilterBox.propTypes = {
  searchText: PropTypes.string,
  onValueChange: PropTypes.func,
  onSearchClicked: PropTypes.func
};
