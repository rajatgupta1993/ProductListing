import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/actions';
import Home from "../components/home";

const mapStateToProps = (store) => {
    return {
        products: store.homeReducer.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
