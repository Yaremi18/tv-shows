import React from 'react';
import Text from '../../atoms/Text';
import { PageWrapper, HeaderWrapper } from './style';

const Page = ({ title, children }) => {

    return (
        <PageWrapper>
            <HeaderWrapper>
                <Text type="header-1" color="black">Show detail</Text>
            </HeaderWrapper>
            {children}
        </PageWrapper>
    )
}

export default Page