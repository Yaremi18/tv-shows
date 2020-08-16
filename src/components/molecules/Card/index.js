import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
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
    nameShow,
    // history,
}) => {
    const history = useHistory()

    const goShowDetail = useCallback(() => {
        history.push('/show/1')
    }, [history])
    
    return (
        <CardWrapper width={width} onClick={goShowDetail}>
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