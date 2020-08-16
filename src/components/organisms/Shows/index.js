import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import Card from '../../molecules/Card';
import {
    ShowsWrapper,
    HeaderWrapper,
    ContentWrapper,
    CardsWrapper,
    SearchWrapper,
} from './style';

const headers = {
    popular: 'Popular shows',
    topRated: 'Top rated shows',
    airingNow: 'Airing now shows'
};

const Shows = ({ category, scoreShow = 3.5 }) => {
    return (
        <ShowsWrapper>
            <HeaderWrapper>
                <Text type="header-1" color="black">{headers[category]}</Text>
            </HeaderWrapper>
            <ContentWrapper>
                <SearchWrapper>
                    <Text type="paragraph" color="black">Searcher here</Text>
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
            
        </ShowsWrapper>
    );
};

Shows.propTypes = {
    category: PropTypes.oneOf(Object.keys(headers)).isRequired,
};

export default Shows;
