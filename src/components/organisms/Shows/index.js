import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../molecules/Card';
import {
    ContentWrapper,
    CardsWrapper,
    SearchWrapper,
} from './style';
import Select from '../../atoms/Select';
import Page from '../../atoms/Page';

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
    return (
        <Page title={headers[category]}>
            <ContentWrapper>
                <SearchWrapper>
                    <Select options={searchOptions} label="Order by" />
                </SearchWrapper>
                <CardsWrapper>
                    <Card scoreShow={scoreShow} nameShow="hola" />
                    <Card scoreShow={scoreShow} nameShow="hola" />
                    <Card scoreShow={scoreShow} nameShow="hola" />
                    <Card scoreShow={scoreShow} nameShow="hola" />
                    <Card scoreShow={scoreShow} nameShow="hola" />
                    <Card scoreShow={scoreShow} nameShow="hola" />
                </CardsWrapper>
            </ContentWrapper>
        </Page>
    );
};

Shows.propTypes = {
    category: PropTypes.oneOf(Object.keys(headers)).isRequired,
};

export default Shows;
