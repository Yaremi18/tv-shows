import React from 'react'
import Page from '../../atoms/Page'
import { LoadingWrapper } from './style'

const Loading = ({ children }) => (
    <Page>
        <LoadingWrapper>
            {children}
        </LoadingWrapper>
    </Page>
)

export default Loading