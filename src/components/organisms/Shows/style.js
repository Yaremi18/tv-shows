import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
    padding: 0px 20px 0px 20px;
`;

export const CardsWrapper = styled.div`
    padding-top: 55px;
    display: grid;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
    grid-gap: 20px;
`;

export const SearchWrapper = styled.div`
    position: fixed;
    top: 50px;
    background: white;
    width: 100%;
    padding-bottom: 10px;
`;