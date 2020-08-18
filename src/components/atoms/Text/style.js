import styled from 'styled-components/macro'
import device from '../../../utils/sizesDevices'
import theme from '../../../provider/themeProvider'

export const sizes = {
    'header-1': {
        mobile: '23px',
        web: '25px',
    },
    'header-2': {
        mobile: '15px',
        web: '18px',
    },
    paragraph: {
        mobile: '12px',
        web: '14px',
    },
    label: {
        mobile: '12px',
        web: '14px',
    }
}

export const Span = styled.span`
    text-align: justify;
    font-family:  'Alata', sans-serif;
    color: ${({ color }) => theme.colors[color]};
    ${({ inline }) => {
        if (inline) {
            return `
                width: 150px;
                white-space: nowrap;
                overflow: hidden !important;
                text-overflow: ellipsis;
                text-align: center;
                width: 100px;`
        }
    }}
    
    @media ${device.mobileS} {
        font-size: ${({ type }) => sizes[type].mobile};
    }

    @media ${device.laptop} { 
        font-size: ${({ type }) => sizes[type].web};
    }
    
    @media ${device.desktop} {
        font-size: ${({ type }) => sizes[type].web};
    }
`