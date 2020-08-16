import styled from 'styled-components/macro';
import theme from '../../../provider/themeProvider';

export const ShowsWrapper = styled.div`
    margin-top: 60px;
    font-family: 'Alata', sans-serif;
`

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

export const ContentWrapper = styled.div`
    padding: 0px 20px 0px 20px;
`

export const CardsWrapper = styled.div`
    padding-top: 40px;

    display: grid;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
  
    grid-gap: 20px;
`

export const SearchWrapper = styled.div`
    position: fixed;
    top: 50px;
    background: white;
    width: 100%;
`