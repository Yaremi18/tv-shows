import React from 'react'
import PropTypes from 'prop-types'
import { Span } from './style'

const Text = ({ color, type, inline, children }) => {
    return (
        <Span color={color} type={type} inline={inline}>
            {children}
        </Span>
    )
}

Text.propTypes = {
    color: PropTypes.string,
    type: PropTypes.oneOf(['header-1', 'header-2', 'paragraph', 'label']),
    children: PropTypes.node.isRequired,
    inline: PropTypes.bool,
}

Text.defaultProps = {
    color: 'secondary',
    type: 'paragraph',
    inline: false,
}

export default Text