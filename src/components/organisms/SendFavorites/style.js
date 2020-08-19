import styled, { keyframes, css } from 'styled-components/macro'
import theme from '../../../provider/themeProvider'

export const SendFavoritesWrapper = styled.div`
    padding: 0px 20px 0px 20px;
    display: flex;
    flex-direction: column;

    > input {
        margin-bottom: 15px;
    }

    > span {
        margin-bottom: 5px;
    }
`

export const Input = styled.input`
    width: 150px;
    border: 1px solid ${theme.colors.primary};
    background: ${theme.colors.lightPrimary};
    font-family: 'Alata', sans-serif;
    border-radius: 10px;
    padding: 5px;
    outline: none;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SendButton = styled.button`
    font-family: 'Alata', sans-serif;
    width: 100px;
    outline: none;
    background: ${theme.colors.secondary};
    color: ${theme.colors.lightPrimary};
    border-radius: 10px;
    border: none;
    padding: 5px;
    height: 40px;

    > svg {
        ${css`animation: ${rotate} 2s linear infinite;`}
    }
`