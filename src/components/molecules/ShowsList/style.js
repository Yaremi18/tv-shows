import styled from 'styled-components/macro'

export const CardsWrapper = styled.div`
    padding-top: 55px;
    display: grid;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
    grid-gap: 20px;
    padding-bottom: 20px;
`

export const ButtonMore = styled.div`
    padding: 5px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 1px solid gray;
    border-radius: 10px;
`