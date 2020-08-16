import React from 'react';
import { ChipWrapper } from './style';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';

const Chip = ({ color, label, icon }) => {
    return (
        <ChipWrapper color={color}>
            <Icon name={icon} color="primary" />
            <Text type="paragraph">{label}</Text>
        </ChipWrapper>
    )
};

export default Chip;