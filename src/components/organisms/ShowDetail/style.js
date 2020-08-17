import styled from 'styled-components/macro'

export const ShowDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;

    > span {
        margin-bottom: 10px;
    }
`

export const ChipsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    >div {
        margin-right: 5px;
        margin-bottom: 5px;
    }
`

export const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FavoriteButton = styled.button`
    padding: 0px;
    margin: 0px 0px 5px 0px;
    outline: none;
    background: transparent;
    border: 0;

    transition-duration: 0.8s;
    transition-property: transform;

    ${({ isFavorite }) => isFavorite ? 'transform:rotate(360deg);' : '' }
`