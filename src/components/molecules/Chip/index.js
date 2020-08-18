import React from 'react'
import PropTypes from 'prop-types'
import { ChipWrapper } from './style'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'

const Chip = ({ label, icon }) => {
    return (
        <ChipWrapper>
            {icon && <Icon name={icon} color="primary" />}
            <Text type="paragraph" color="lightPrimary">{label}</Text>
        </ChipWrapper>
    )
}

Chip.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Chip.defaultProps = {
    icon: undefined,
}

export default Chip