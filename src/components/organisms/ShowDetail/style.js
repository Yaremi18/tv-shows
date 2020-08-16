import styled from 'styled-components/macro';

export const ShowDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;

    > span {
        margin-bottom: 10px;
    }
`;

export const ChipsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    >div {
        margin-right: 5px;
        margin-bottom: 5px;
    }
`;