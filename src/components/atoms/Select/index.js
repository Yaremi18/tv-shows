import React from 'react'
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

export default Select