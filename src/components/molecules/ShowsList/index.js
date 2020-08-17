import React from 'react'
import Card from '../Card'
import { CardsWrapper, ButtonMore } from './style'

const ShowsList = ({ shows, setPage, isLoading }) => {
    return (
        <CardsWrapper>
            {shows.map((show) => (
                <Card
                    key={show.id}
                    show={{
                        id: show.id,
                        name: show.name,
                        overview: show.overview,
                        score: show.vote_average * 5 / 10,
                        image: `https://image.tmdb.org/t/p/w220_and_h330_face/${show.poster_path}`,
                        genre_ids: show.genre_ids,
                        duration: 0,
                    }}
                />
            ))}
            
            <ButtonMore
                onClick={() => setPage(prev => prev + 1)}
                disabled={isLoading}
            >
                {isLoading ? 'Loading shows...' : 'More shows'}
            </ButtonMore>
        </CardsWrapper>
    )
}

export default ShowsList