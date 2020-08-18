import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import device from '../../../utils/sizesDevices'
import theme from '../../../provider/themeProvider'

export const sideMenuWidth = {
    size1: '60%',
    size2: '40%',
    size3: '250px'
}

export const SideMenuWrapper = styled.div`
    font-family: 'Alata', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: ${theme.colors.secondary};

    @media ${device.mobileS} {
        width: ${sideMenuWidth.size1};
    }

    @media ${device.mobileL} {
        width: ${sideMenuWidth.size2};
    }

    @media ${device.tablet} {
        width: ${sideMenuWidth.size3};
    }

    z-index: 999;
    transition: transform 0.4s ease-out;
    ${({ isOpen }) => isOpen 
    ? ` transform: translateX(0);`
    : ` transform: translateX(-100%);`}
`

export const shareCss = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 15%;
    padding-left: 20px;
`
export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
`
export const ItemWrapper = styled.div`
    width: 100%;
    width: 85%;
    display: flex;
    flex-direction: column;
`

export const OptionWrapper = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding-left: 5px;
    border-radius: 10px 10px 10px 10px;
    background: ${({ selected }) => selected ? theme.colors.primary : 'transparent' };
    >span {
        padding-left: 30px;
    }

    

    &:hover {
        background: ${theme.colors.primary};
    }
`
