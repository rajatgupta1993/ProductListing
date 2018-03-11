import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBox({searchText, onValueChange, onSearchClicked }) {

    return (
       <div className="search-box-container">
            <div className="search-box-container">
                <form  onSubmit={onSearchClicked}>
                <input className="search-input" type="text" placeholder="Search Movie"
                        value={searchText} onChange={onValueChange} />
                <button className="search-button" type="submit" >
                    <i className="glyphicon glyphicon-search" />
                </button>
                </form>
            </div>
        </div>);
}

SearchBox.propTypes ={
    searchText: PropTypes.string,
    onValueChange: PropTypes.func,
    onSearchClicked: PropTypes.func
}