import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text'
import { SelectWrapper, Selector } from './style'

const Select = ({
    options,
    label,
    onChange,
    color,
}) => {
    return (
        <SelectWrapper>
            <Text type="paragraph" color={color}>{label}</Text>
            <Selector onChange={onChange} type="paragraph">
                {options.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))}
            </Selector>
        </SelectWrapper>
    )
}

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
}

export default Select