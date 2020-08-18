import React from 'react'
import Page from '../../atoms/Page'
import { LoadingWrapper } from './style'

const Loading = ({ children, isSideMenuFixed }) => (
    <Page isSideMenuFixed={isSideMenuFixed}>
        <LoadingWrapper>
            {children}
        </LoadingWrapper>
    </Page>
)

export default Loading