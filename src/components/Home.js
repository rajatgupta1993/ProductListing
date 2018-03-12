import React from "react";
import PropTypes from "prop-types";
import Tile from './Tile';
import _ from 'lodash';
import SearchBox from './SearchBox';

export default class home extends React.PureComponent {
  constructor() {
    super();
    console.log(this, "this in Constructor ");
    this.state = {
      searchText: "",
      data:null, 
      sortingFilter:'none',
    };
    this.onSearchClicked = this.onSearchClicked.bind(this);
    this.onValueChange = this.onValueChange.bind(this); 
    this.onSorting = this.onSorting.bind(this);
    this.sortData = this.sortData.bind(this);
    
  }

  componentDidMount() {
    this.props.fetchProducts();
     this.setState({data: this.props.products.products});
  }

  componentWillReceiveProps(nextProps){
    this.setState({data: nextProps.products.products});
  }

  onValueChange(e) {
    this.setState({ searchText: e.target.value });
  }


  onSearchClicked(e) {
    e.preventDefault();
    this.props.history.push(`/searchresults/q=${this.state.searchText}`);
  }

  onSorting(e){
    console.log(e.target);
    this.setState({sortingFilter: e.target.value});
    this.sortData(e.target.value)
  }

  sortData(filter){
    switch(filter){
      case 'High Price': this.state.data.sort((a,b) =>{
                                                      if(a.price > b.price) return -1;
                                                      if(a.price < b.price) return 1;
                                                      return 0;
                                                      }) 
          break;
       case 'Low Price': this.state.data.sort((a,b) => {
                                                      if(a.price < b.price) return -1;
                                                      if(a.price > b.price) return 1;
                                                      return 0;
                                                      }) 
          break;

        case 'None' :  this.state.data.sort((a,b) => {
                                                      if(a.itemId < b.itemId) return -1;
                                                      if(a.itemId > b.itemId) return 1;
                                                      return 0;
                                                      }) 
          break;
        default : 
    }
  }



  render() {

    console.log(this.props);
    const  products  = this.state.data;
    console.log('products', products);
    return (
      <div>
        <div className="container">

          <SearchBox searchText={this.state.searchText} onValueChange={this.onValueChange} onSearchClicked={this.onSearchClicked} />

          <hr />

          <div className="filter-container">
            <div className="filter-box">

              <div style={{ float: 'right' }} onClick={this.onSorting}>
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


          <div className="product-container">
            <div className="product-container-inner">

              {
                _.map(products, (item ) => <Tile key={item.itemId} url={item.itemImage} title={item.itemTitle} price={item.price}
                  emiPrice={item.emiPrice} features={item.features.split(',')} rating={item.rating}/>
                )}
             

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
