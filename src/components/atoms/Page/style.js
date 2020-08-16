import styled from 'styled-components/macro';
import theme from '../../../provider/themeProvider';

export const PageWrapper = styled.div`
    margin-top: 60px;
    font-family: 'Alata', sans-serif;
`;

export const HeaderWrapper = styled.div`
    background: ${theme.colors.secondary};
    position: fixed;
    left: 0;
    top: 0;
    padding-left: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    width: 100%;
`