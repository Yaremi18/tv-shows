import styled, { css } from 'styled-components/macro'

export const ShowDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px 0px 20px;

    > span, img {
        margin-bottom: 10px;
        margin-top: 5px;
    }
`

export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    > span {
        margin-bottom: 10px;
    }
`

export const ChipsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    >div {
        margin-right: 5px;
        margin-bottom: 5px;
    }
`

export const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const sharedCss = css`
    padding: 0px;
    outline: none;
    background: transparent;
    border: 0;
    cursor: pointer;
`

export const FavoriteButton = styled.button`
    ${sharedCss}
    margin: 0px 0px 5px 0px;

    transition-duration: 0.8s;
    transition-property: transform;
    outline: none;

    ${({ isFavorite }) => isFavorite ? 'transform:rotate(360deg);' : '' }
`

export const BackWrapper = styled.div`
    display: flex;
    width: 100%;
`

export const BackButton = styled.button`
    ${sharedCss}
    width: 30px;
    height: 30px;
`