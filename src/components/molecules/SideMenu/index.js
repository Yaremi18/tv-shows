import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';
import Divider from '../../atoms/Divider';
// import useScreenSize from '../../../hooks/useScreenSize';
// import { sizes } from '../../../utils/sizesDevices';
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
    path: '/',
},
{
    name: 'Top rated',
    icon: 'Star',
    path: '/topRated',
},
{
    name: 'Airing now',
    icon: 'LiveTv',
    path: '/airingNow',
}];

const SideMenu = ({ isOpen, onSideMenuToggle }) => {

    // const { width: screenWidth } = useScreenSize()

    return (
        <SideMenuWrapper isOpen={isOpen}>
            <HeaderWrapper>
                <Text type="header-1" color="primary">TV Shows</Text>
            </HeaderWrapper>
            <Divider />
            <BodyWrapper>
                {menuOptions.map((option) => (
                    <ItemWrapper key={option.name}>
                        <OptionWrapper to={option.path} onClick={onSideMenuToggle}>
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