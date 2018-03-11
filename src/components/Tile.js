import React from "react";
import PropTypes from "prop-types";

export default function Tile({ url, title, price, emiPrice, features }) {
  console.log(url);
  let url1 = 'require("' + url + '")';
  return (
    <div className="tiles">
      <div className="tile-container">
        <h3> {title} </h3>
        {/* <img src={url1} width='70%' height='40%'/> */}

        <div className="image-container" />

        <div className="rating-container">
          <div className="rating-box"> </div>
        </div>

        <hr style={{ marginTop: "10px" }} />

        <div> <strong> {`Rs. ${price}`} </strong> </div>
        <div> {`EMI from Rs. ${emiPrice}`} </div>

        <hr style={{ marginTop: "10px" }} />

        <ul >
            {_.map(features, (item,index) => <li key={item.itemId}> {features[index]} </li> )}
        </ul>
      </div>
    </div>
  );
}

Tile.propTypes = {
  searchText: PropTypes.string,
  onValueChange: PropTypes.func,
  onSearchClicked: PropTypes.func
};
