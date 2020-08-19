import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import Icon from '../../atoms/Icon'

import { CardsWrapper, ButtonMore } from './style'

// Component to display all the shows loaded in a list
const ShowsList = ({ shows, setPage, isLoading }) => (
    <CardsWrapper>
        {shows.map((show, i) => (
            <Card
                key={`${show.id}${i}`}
                show={{
                    id: show.id,
                    name: show.name,
                    overview: show.overview,
                    score: show.vote_average * 5 / 10,
                    image: `https://image.tmdb.org/t/p/w220_and_h330_face/${show.poster_path}`,
                    genre_ids: show.genre_ids,
                }}
            />
        ))}
        {shows.length ? (
            <ButtonMore
                onClick={() => setPage(prev => prev + 1)}
                disabled={isLoading}
            >
                {isLoading ? <Icon name="Loop" color="primary" /> : (
                    <Icon name="Add" color="primary" />
                )}
            </ButtonMore>
        ) : 'No shows'}

    </CardsWrapper>
)

ShowsList.propTypes = {
    shows: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    setPage: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default ShowsList