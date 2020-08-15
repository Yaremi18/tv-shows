import styled from 'styled-components/macro'

export const SideMenuToggle = styled.button`
    margin: 0px;
    padding: 0px;
    outline: none;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;

    position: absolute;
    top: 20px;
    left: 10px;

`

export const HeaderWrapper = styled.div`
    position: absolute;
    display: flex;
`

export const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    z-index: 100;
    top: 0;
    right: 0;
`