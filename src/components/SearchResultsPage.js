import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Constants from '../common/constants';
import _ from 'lodash';
import Tile from './Tile';

export default class SearchResultsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        console.log('props in searchPage', this.props)
        let query = this.props.match.params.query;
        let data = _.filter(this.props.products.products, (item) => item.itemTitle.toLowerCase().includes(query.toLowerCase()) ||
            item.features.toLowerCase().includes(query.toLowerCase()));
        this.setState({ data });
    }

    render() {
        console.log('state', this.state);
        return (
            <div className="container">
                <div className="product-container">
                    <div className="product-container-inner">
                        {_.map(this.state.data, (item) => <Tile key={item.itemId} url={item.itemImage} title={item.itemTitle} price={item.price}
                            emiPrice={item.emiPrice} features={item.features.split(',')} />
                        )}
                      
                    </div>
                </div>
            </div>
        );
    }
}

SearchResultsPage.propTypes = {
    match: PropTypes.object,
    movies: PropTypes.object
}
