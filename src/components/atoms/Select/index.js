import React from 'react';
import Text from '../Text';
import { SelectWrapper, Selector } from './style';

const Select = ({
    options,
    label,
}) => {
    return (
        <SelectWrapper>
            <Text type="paragraph">{label}</Text>
            <Selector>
                {options.map((option) => (
                    <option value={option.id}>{option.name}</option>
                ))}
            </Selector>
        </SelectWrapper>
    )
};

export default Select;