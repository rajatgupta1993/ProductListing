import React from 'react';
import PropTypes from 'prop-types';

export default class home extends React.PureComponent {
    constructor() {
        super();
        console.log(this, "this in Constructor ");
        this.state = {
            searchText: '',
        };

     
    }

    componentWillMount() {
        this.props.fetchProducts();
    }


    render() {
       // this.onValueChange();
         console.log(this.props);
        return (
          <div> sfdgdsvg </div> 
        );
    }
}

home.PropTypes={
    state: PropTypes.array,
    fetchData:PropTypes.func,
};
