import styled from 'styled-components/macro'

export const sizes = {
    detail: {
        mobile: {
            width: '300px',
            height: '400px',
        },
        web: {
            width: '300px',
            height: '400px',
        }
    },
    card: {
        mobile: {
            width: '147px',
            height: '215px',
        },
        web: {
            width: '147px',
            height: '215px',
        }
    },
}

const Image = styled.img`
    border-radius: 10px;
    width: 85%;
    height: 90%;
    object-fit: cover;

    max-height: 400px;
    max-width: 250px;
`

export default Image