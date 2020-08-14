import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ color, name }) => {
    return (
        null
    )
}

Icon.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    color: 'gray',
};

export default Icon;