import React from 'react'
import Text from '../Text'
import { SelectWrapper, Selector } from './style'

const Select = ({
    options,
    label,
    onChange,
}) => {
    return (
        <SelectWrapper>
            <Text type="paragraph">{label}</Text>
            <Selector onChange={onChange}>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))}
            </Selector>
        </SelectWrapper>
    )
}

export default Select