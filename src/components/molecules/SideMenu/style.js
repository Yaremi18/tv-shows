import styled, { css } from 'styled-components/macro';
import device from '../../../utils/sizesDevices';
import theme from '../../../provider/themeProvider';


const width = {
    colapsed: {
        size1: '60%',
        size2: '40%',
        size3: '250px'
    },
}

export const SideMenuWrapper = styled.div`
    font-family: 'Alata', sans-serif;
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: ${theme.colors.secondary};

    @media ${device.mobileS} {
        width: ${({ isFixed }) => (isFixed ? width.colapsed.size1 : '50px'  )};
    }

    @media ${device.mobileL} {
        width: ${({ isFixed }) => (isFixed ? width.colapsed.size2 : '50px'  )};
    }

    @media ${device.tablet} {
        width: ${({ isFixed }) => (isFixed ? width.colapsed.size3 : '50px'  )};
    }
`;

export const shareCss = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    // justify-content: center;
    height: 20%;
    padding-left: 20px;
`
export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    height: 80%;
`
export const ItemWrapper = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
`

export const OptionWrapper = styled.div`
    display: flex;
    align-items: center;

    padding-left: 20px;
    padding-right: 20px;

    >span {
        padding-left: 10px;
    }

    &:hover {
        background: ${theme.colors.aqua};
        border-radius: 10px 10px 10px 10px;
    }
`
