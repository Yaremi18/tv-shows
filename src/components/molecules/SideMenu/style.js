import styled from 'styled-components/macro';
import device from '../../../utils/sizesDevices';


const width = {
    colapsed: {
        size1: '60%',
        size2: '40%',
        size3: '250px'
    },
}

export const SideMenuWrapper = styled.div`
    position: absolute;
    display: flex;
    height: 100%;
    background: gray;
    border: 1px solid gray;

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
