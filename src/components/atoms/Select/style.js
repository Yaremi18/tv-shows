import styled from 'styled-components/macro'
import theme from '../../../provider/themeProvider'
import device from '../../../utils/sizesDevices'
import { sizes } from '../../atoms/Text/style'

export const Selector = styled.select`
    width: 140px;
    height: 30px;
    border-radius: 15px;
    padding-left: 5px;
    outline: none;
    font-family:  'Alata', sans-serif;
    background: ${theme.colors.lightPrimary};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.secondary};
    font-weight: bold;

    @media ${device.laptop} { 
        font-size: ${({ type }) => sizes[type].web};
    }
    
    @media ${device.desktop} {
        font-size: ${({ type }) => sizes[type].web};
    }

    @media ${device.mobileS} {
        font-size: ${({ type }) => sizes[type].mobile};
    }
`;

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 15px;

    > select {
        margin-left: 10px;
    }
`;