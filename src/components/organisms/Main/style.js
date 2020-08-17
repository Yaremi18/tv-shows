import styled from 'styled-components/macro';
import theme from '../../../provider/themeProvider';

export const SideMenuToggle = styled.button`
    margin: 0px;
    padding: 0px;
    padding-left: 10px;
    outline: none;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
`;

export const HeaderWrapper = styled.div`
    z-index: 200;
    width: 100%;
    font-family:  'Alata', sans-serif;
    position: fixed;
    height: 50px;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background: ${theme.colors.secondary};

    display: flex;

    > span {
        padding-left: 20px;
    }
`;

export const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    z-index: 100;
    top: 0;
    right: 0;
`;