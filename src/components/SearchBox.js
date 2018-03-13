import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBox({ searchText, onValueChange, onSearchClicked }) {

    return (
        <div className="searchContainer">
            <div className="search-box-container">
                <div className="search-box">
                    <form onSubmit= {onSearchClicked}>
                        <input type="text" placeholder="Search"
                              value={searchText} onChange={onValueChange} />
                        <i className="glyphicon glyphicon-search search-icon" />
                    </form>
                </div>
            </div>
        </div>);
}

SearchBox.propTypes = {
    searchText: PropTypes.string,
    onValueChange: PropTypes.func,
    onSearchClicked: PropTypes.func
}