import styled from 'styled-components/macro';
import theme from '../../../provider/themeProvider';

export const Selector = styled.select`
    width: 140px;
    height: 30px;
    border-radius: 15px;
    padding-left: 5px;
    outline: none;
    font-family:  'Alata', sans-serif;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.secondary};

    font-size: 10px;
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