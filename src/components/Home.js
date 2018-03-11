import React from "react";
import PropTypes from "prop-types";
import Tile from './Tile';
import _ from 'lodash';

export default class home extends React.PureComponent {
  constructor() {
    super();
    console.log(this, "this in Constructor ");
    this.state = {
      searchText: ""
    };
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    // this.onValueChange();
    console.log(this.props);
    const {products} = this.props.products;
    return (
      <div>
        <div className="container">
          <div className="searchContainer">
            <div className="search-box-container">
              <div className="search-box">
                <input type="text" placeholder="Search" />

                <i className="glyphicon glyphicon-search search-icon" />
              </div>
            </div>
          </div>

          <hr />

          <div className="filter-container">
            <div className="filter-box">

            <div style={{float:'right'}}>
              <label>
                <input type="radio" />
                Relevance
              </label>

              <label>
                <input type="radio" />
                Popular
              </label>
              <label>
                <input type="radio" />
                High Price
              </label>

              <label>
                <input type="radio" />
                Low Price
              </label>

              <label>
                <input type="radio" />
               New
              </label>
              </div>

            </div>
          </div>


          <div className="product-container">
            <div className="product-container-inner">
            {_.map(products, (item)=> {console.log(item);
                return <Tile  url= {item.itemImage} title={item.itemTitle} price={item.price}
                              emiPrice={item.emiPrice} features={item.features.split(',')}/> })}
              <Tile/>
               
            </div>
          </div>

        </div>
      </div>
    );
  }
}

home.PropTypes = {
  state: PropTypes.array,
  fetchData: PropTypes.func
};
