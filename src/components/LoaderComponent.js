import React from 'react';
import PropTypes from 'prop-types';
import loaderGif from '../resources/loader-1.gif';
const LoaderComponent = ({isLoading}) => {
    return (

        <div className={isLoading ? `loader` : `loader-disabled`}>
            <img src={loaderGif} />
        </div>
    );
};

LoaderComponent.PropTypes={
    isLoading: PropTypes.bool,

};
export default LoaderComponent;
