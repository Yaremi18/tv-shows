import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import Text from '../../atoms/Text'
import Score from '../../atoms/Score'
import Image from '../../atoms/Image'
import {
    CardWrapper,
    FooterWrapper,
    ImageWrapper,
} from './style'

const Card = ({
    show,
}) => {
    const history = useHistory()

    const goShowDetail = useCallback((showId) => () => {
        history.push({
            pathname:`/show/${showId}`,
            state: show,
        })
    }, [history, show])
    
    return (
        <CardWrapper onClick={goShowDetail(show.id)}>
            <ImageWrapper>
                <Image src={show.image} type="card" />
            </ImageWrapper>
            <FooterWrapper>
                <Text type="header-2" inline>{show.name}</Text>
            <Score value={show.score} />
            </FooterWrapper>
        </CardWrapper>
    )
}

export default Card