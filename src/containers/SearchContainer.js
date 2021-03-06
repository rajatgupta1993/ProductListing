import React from 'react';
import { connect } from 'react-redux';

import SearchResultsPage from './../components/SearchResultsPage';

const mapStateToProps = (store) => {
    console.log('store', store);
    return {
        products: store.homeReducer.products,
    };
};

const SearchContainer = connect(mapStateToProps)(SearchResultsPage);

export default SearchContainer;
