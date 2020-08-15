import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import * as Icons from '@material-ui/icons';
import theme from '../../../provider/themeProvider';

const Icon = ({ color, name }) => {
    const IconSelected = useMemo(() => Icons[name], [name])
    return (
        <IconSelected style={{ color: theme.colors[color] }} />
    )
}

Icon.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    color: 'gray',
};

export default Icon;