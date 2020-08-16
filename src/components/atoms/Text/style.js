import styled from 'styled-components/macro';
import device from '../../../utils/sizesDevices';
import theme from '../../../provider/themeProvider';

const sizes = {
    'header-1': {
        mobile: '25px',
        web: '30px',
    },
    'header-2': {
        mobile: '18px',
        web: '23px',
    },
    paragraph: {
        mobile: '12px',
        web: '14px',
    },
    label: {
        mobile: '11px',
        web: '13px',
    }
}

export const Span = styled.span`
    text-align: justify;
    color: ${({ color }) => theme.colors[color]};

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