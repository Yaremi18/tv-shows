import styled from 'styled-components/macro'
import device from '../../../utils/sizesDevices'
import { sideMenuWidth } from '../../molecules/SideMenu/style'

const Page = styled.div`
    margin-top: 60px;
    font-family: 'Alata', sans-serif;
    ${({ isSideMenuFixed }) => isSideMenuFixed && `
        @media ${device.mobileS} {
            margin-left: ${sideMenuWidth.size1};
        }

        @media ${device.mobileL} {
            margin-left: ${sideMenuWidth.size2};
        }

        @media ${device.tablet} {
            margin-left: ${sideMenuWidth.size3};
        }
    `}
`

export default Page
