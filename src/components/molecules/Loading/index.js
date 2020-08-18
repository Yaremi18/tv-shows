import React from 'react'
import PropTypes from 'prop-types'
import Page from '../../atoms/Page'
import { LoadingWrapper } from './style'

const Loading = ({ children, isSideMenuFixed }) => (
    <Page isSideMenuFixed={isSideMenuFixed}>
        <LoadingWrapper>
            {children}
        </LoadingWrapper>
    </Page>
)

Loading.propTypes = {
    isSideMenuFixed: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

Loading.defaultProps = {
    isSideMenuFixed: false,
}

export default Loading