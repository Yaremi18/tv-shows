import styled from 'styled-components/macro';
import theme from '../../../provider/themeProvider';

export const ChipWrapper = styled.div`
    background: ${theme.colors.secondary};
    border-radius: 20px;
    width: fit-content;
    height: 20px;
    display: flex;
    align-items: center;
    padding: 5px 10px 5px 10px;
    overflow: auto;

    >span {
        padding-left: 5px;
    }
`;
