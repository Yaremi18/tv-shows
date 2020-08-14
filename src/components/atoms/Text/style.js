import styled from 'styled-components/macro';
import device from '../../../utils/sizesDevices'

const sizes = {
    'header-1': {
        mobile: '25px',
        web: '30px',
    },
    'header-2': {
        mobile: '15px',
        web: '20px',
    },
    paragraph: {
        mobile: '10px',
        web: '12px',
    },
    label: {
        mobile: '9px',
        web: '11px',
    }
}

export const Span = styled.span`
    color: ${({ color }) => color};
    

    @media ${device.laptop} { 
        font-size: ${({ type }) => sizes[type].web};
    }
    
    @media ${device.desktop} {
        font-size: ${({ type }) => sizes[type].web};
    }

    @media ${device.mobileS} {
        font-size: ${({ type }) => sizes[type].mobile};
    }
`