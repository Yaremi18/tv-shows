import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';
import Divider from '../../atoms/Divider';
import useScreenSize from '../../../hooks/useScreenSize';
import { sizes } from '../../../utils/sizesDevices';
import {
    SideMenuWrapper,
    HeaderWrapper,
    BodyWrapper,
    ItemWrapper,
    OptionWrapper,
} from './style';

const menuOptions = [{
    name: 'Popular',
    icon: 'Favorite',
},
{
    name: 'Top rated',
    icon: 'Star',
},
{
    name: 'Airing now',
    icon: 'LiveTv',
}];

const SideMenu = ({ isOpen }) => {

    const { width: screenWidth } = useScreenSize()

    return (
        <SideMenuWrapper isOpen={isOpen}>
            <HeaderWrapper>
                <Text type="header-1" color="primary">TV Shows</Text>
            </HeaderWrapper>
            <Divider />
            <BodyWrapper>
                {menuOptions.map((option) => (
                    <ItemWrapper>
                        <OptionWrapper>
                            <Icon color="primary" name={option.icon} />
                            <Text type="paragraph" color="primary">{option.name}</Text>
                        </OptionWrapper>
                        <Divider />
                    </ItemWrapper>
                ))}
            </BodyWrapper>
        </SideMenuWrapper>
    )
}

SideMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
}

export default SideMenu