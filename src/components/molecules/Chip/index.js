import React from 'react';
import { ChipWrapper } from './style';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';

const Chip = ({label, icon }) => {
    return (
        <ChipWrapper>
            {icon && <Icon name={icon} color="primary" />}
            <Text type="paragraph" color="lightPrimary">{label}</Text>
        </ChipWrapper>
    )
};

export default Chip;