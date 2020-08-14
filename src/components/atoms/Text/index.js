import React from 'react';
import PropTypes from 'prop-types';
import { Span } from './style';

const Text = ({ color, type, children }) => {
    return (
        <Span color={color} type={type}>
            {children}
        </Span>
    )
}

Text.propTypes = {
    color: PropTypes.string,
    type: PropTypes.oneOf(['header-1', 'header-2', 'paragraph', 'label']),
    children: PropTypes.node.isRequired,
};

Text.defaultProps = {
    color: 'gray',
    type: 'paragraph'
};

export default Text;