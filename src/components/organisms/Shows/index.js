import React from 'react'
import PropTypes from 'prop-types'
import Text from '../../atoms/Text'
import Divider from '../../atoms/Divider'
import { ShowsWrapper } from './style'
import Card from '../../molecules/Card'

const headers = {
    popular: 'Popular shows',
    topRated: 'Top rated shows',
    airingNow: 'Airing now shows'
}

const Shows = ({ category, scoreShow }) => {
    return (
        <ShowsWrapper>
            <Text type="header-1" color="black">{headers[category]}</Text>
            <Divider />

            {/* Content */}

            <Card scoreShow={scoreShow} nameShow="hola" />
        </ShowsWrapper>
    )
}

Shows.propTypes = {
    category: PropTypes.oneOf(Object.keys(headers)).isRequired,
}

export default Shows
