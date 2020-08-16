import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../molecules/Card';
import Select from '../../atoms/Select';
import Page from '../../atoms/Page';
import {
    ContentWrapper,
    CardsWrapper,
    SearchWrapper,
} from './style';
import useShows from '../../../hooks/useShows';
import useGenres from '../../../hooks/useGenres';

const headers = {
    popular: 'Popular shows',
    topRated: 'Top rated shows',
    airingNow: 'Airing now shows'
};

const searchOptions = [{
    id: 'ascName', name: 'Ascending name',
},{
    id: 'descName', name: 'Descending name',
},{
    id: 'ascScore', name: 'Ascending score',
},{
    id: 'descScore', name: 'Descending score',
}]

const Shows = ({ category, scoreShow = 3.5 }) => {
    const [page, setPage] = useState(1)
    // const genres = useGenres()

    // console.log(genres)
    const shows = useShows(category, page)

    return (
        <Page title={headers[category]}>
            <ContentWrapper>
                <SearchWrapper>
                    <Select options={searchOptions} label="Order by" />
                </SearchWrapper>
                <CardsWrapper>
                    {shows.map((show) => (
                        <Card
                            show={{
                                id: show.id,
                                name: show.name,
                                overview: show.overview,
                                score: show.vote_average * 5 / 10,
                                image: `https://image.tmdb.org/t/p/w220_and_h330_face/${show.poster_path}`,
                                genre: show.genre_ids,
                                duration: 0,
                            }}
                        />
                    ))}
                    {/* <Card scoreShow={scoreShow} nameShow="hola" />
                    <Card scoreShow={scoreShow} nameShow="hola" />
                    <Card scoreShow={scoreShow} nameShow="hola" />
                    <Card scoreShow={scoreShow} nameShow="hola" />
                    <Card scoreShow={scoreShow} nameShow="hola" />
                    <Card scoreShow={scoreShow} nameShow="hola" /> */}
                </CardsWrapper>
            </ContentWrapper>
        </Page>
    );
};

Shows.propTypes = {
    category: PropTypes.oneOf(Object.keys(headers)).isRequired,
};

export default Shows;
