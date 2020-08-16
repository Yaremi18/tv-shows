import React from 'react';
import Text from '../../atoms/Text';
import Score from '../../atoms/Score';
import Image from '../../atoms/Image';
import {
    CardWrapper,
    FooterWrapper,
    ImageWrapper,
} from './style';

const Card = ({
    width,
    scoreShow,
    imageShow,
    nameShow
}) => {
    return (
        <CardWrapper width={width}>
            <ImageWrapper>
                <Image src={imageShow} />
            </ImageWrapper>
            <FooterWrapper>
                <Text>{nameShow}</Text>
            <Score value={scoreShow} />
            </FooterWrapper>
        </CardWrapper>
    )
}

export default Card