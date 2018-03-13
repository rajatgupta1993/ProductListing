import React from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

export default function Tile({ url, title, price, emiPrice, features, rating }) {
  var decimal = rating % 1;
  var ratingUrl = "";
  var arr = [];
  var length = rating - decimal;
  arr[4] = '3';
  return (
    <div className="tiles">
      <div className="tile-container">
        <h3> {title} </h3>
        <div className="image-container" >
          <img src={url} width='300px' height='200px' />
        </div>
        <div className="rating-container">

          <div className="rating-box"> {_.map(arr, ((item, i) => {
            ratingUrl = i <= length - 1 ? '../src/image/fullStar.png' : decimal && i == length ? '../src/image/halfStar.png' : '../src/image/star.png'
            return <img key={i} src={ratingUrl} className="rating-image" width='20px' height='20px' />
          }))

          } </div>
        </div>

        <hr style={{ marginTop: "10px", marginBottom: "10px" }} ></hr>

        <div> <strong> {`Rs. ${price}`} </strong> </div>
        <div> {`EMI from Rs. ${emiPrice}`} </div>

        <hr style={{ marginTop: "10px" }} />

        <ul >
          {_.map(features, (item, index) => <li key={index}> {features[index]} </li>)}
        </ul>
      </div>
    </div>
  );
}

Tile.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  emiPrice: PropTypes.number,
  features: PropTypes.array,
  rating: PropTypes.number,


};
