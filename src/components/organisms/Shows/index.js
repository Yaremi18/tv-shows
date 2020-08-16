import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Card from '../../molecules/Card';
import Select from '../../atoms/Select';
import Page from '../../atoms/Page';
import config from '../../../config.json';
import {
    ContentWrapper,
    CardsWrapper,
    SearchWrapper,
} from './style';

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
    const [shows, setShows] = useState([])
    
    useEffect(() => {
        const loadShows = async () => {
            const result = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${config.apiKey}&language=en-US&page=${page}`)
            console.log(result)
            if (result.status !== 200) return

            setShows(result.data?.results)
        }

        loadShows()
        
    }, [page])

    return (
        <Page title={headers[category]}>
            <ContentWrapper>
                <SearchWrapper>
                    <Select options={searchOptions} label="Order by" />
                </SearchWrapper>
                <CardsWrapper>
                    {shows.map((show) => (
                        <Card
                            scoreShow={show.vote_average}
                            nameShow={show.name}
                            imageShow={`https://image.tmdb.org/t/p/w220_and_h330_face/${show.poster_path}`}
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
