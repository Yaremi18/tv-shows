import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SideMenuWrapper } from './style';

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isFixed, setIsFixed] = useState(false);

    return isOpen && (
        <SideMenuWrapper isFixed={isFixed}>

        </SideMenuWrapper>
    )
}

SideMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
}

export default SideMenu