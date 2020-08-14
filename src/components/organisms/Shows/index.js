import React from 'react'
import PropTypes from 'prop-types'
import Text from '../../atoms/Text'
import Divider from '../../atoms/Divider'
import { ShowsWrapper } from './style'

const headers = {
    popular: 'Popular shows',
    topRated: 'Top rated shows',
    airingNow: 'Airing now shows'
}

const Shows = ({ category }) => {
    return (
        <ShowsWrapper>
            <Text type="header-1" color="black">{headers[category]}</Text>
            <Divider />

            {/* Content */}
        </ShowsWrapper>
    )
}

Shows.propTypes = {
    category: PropTypes.oneOf(Object.keys(headers)).isRequired,
}

export default Shows
