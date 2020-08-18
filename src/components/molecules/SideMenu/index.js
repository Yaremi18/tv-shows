import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import Divider from '../../atoms/Divider'
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
    const [selectedOption, setSelectedOption] = useState('/')

    const handleSelectOption = useCallback((option) => () => {
        onSideMenuToggle()
        setSelectedOption(option)
    }, [onSideMenuToggle])
    return (
        <SideMenuWrapper isOpen={isOpen}>
            <HeaderWrapper>
                <Text type="header-1" color="primary">TV Shows</Text>
            </HeaderWrapper>
            <BodyWrapper>
                {menuOptions.map((option) => (
                    <ItemWrapper key={option.name}>
                        <OptionWrapper
                            to={option.path}
                            onClick={handleSelectOption(option.path)}
                            selected={selectedOption === option.path}
                        >
                            <Icon color="lightPrimary" name={option.icon} />
                            <Text type="paragraph" color="lightPrimary">{option.name}</Text>
                        </OptionWrapper>
                        <Divider color="primary" />
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