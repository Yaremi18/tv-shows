import React, { useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import Divider from '../../atoms/Divider'
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
},
{
    name: 'Send favorites',
    icon: 'Favorite',
    path: '/sendFavorites',
}]

// This component renders the sidemenu.
const SideMenu = ({ isOpen, onSideMenuToggle }) => {
    const location = useLocation()
    const [selectedOption, setSelectedOption] = useState(location.pathname)

    // This callback set the selected option and hide the sidemenu when an
    // option is selected.
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
    onSideMenuToggle: PropTypes.func.isRequired,
}

export default SideMenu