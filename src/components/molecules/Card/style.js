import styled from 'styled-components/macro'
import themeProvider from '../../../provider/themeProvider'

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${themeProvider.colors.gray};
    border-radius: 10px;

    height: 300px;
    min-width: 120px;
`;

export const FooterWrapper = styled.div`
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
`;