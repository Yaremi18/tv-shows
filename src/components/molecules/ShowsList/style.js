import styled, { keyframes, css } from 'styled-components/macro'
import theme from '../../../provider/themeProvider'

export const CardsWrapper = styled.div`
    padding-top: 55px;
    display: grid;
    width: 100%;
    max-width: 2000px;
    grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
    grid-gap: 20px;
    padding-bottom: 20px;
    align-items: center;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ButtonMore = styled.div`
    padding: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.secondary};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;

    ${({ disabled }) => {
        if (disabled) {
            return css`animation: ${rotate} 2s linear infinite;`
        }
    }}
`