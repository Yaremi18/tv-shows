import styled from 'styled-components/macro';
import theme from '../../../provider/themeProvider';

const Divider = styled.div`
    height: 0.5px;
    min-height: 0.5px;
    margin: 10px 0px 10px 0px;
    background: ${({ color }) => theme.colors[color || 'aqua']};
`;

export default Divider;