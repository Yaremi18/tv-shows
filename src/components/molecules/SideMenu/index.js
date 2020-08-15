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

const SideMenu = () => {

    const { width: screenWidth } = useScreenSize()

    console.log(sizes.mobileL, screenWidth)

    const canFixed = screenWidth > sizes.tablet

    console.log(canFixed)

    
    const [isOpen, setIsOpen] = useState(true);
    const [isFixed, setIsFixed] = useState(true);

    return isOpen && (
        <SideMenuWrapper isFixed={isFixed}>
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