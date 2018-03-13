import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
        return (
            <div className="container">
                <h2 style={{textAlign:'center', fontWeight:'700'}}> {`Search Results for ${this.props.match.params.query}`} </h2>
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
}
