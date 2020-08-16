import React, { lazy, Suspense, useState } from 'react'
import PropTypes from 'prop-types'
import Select from '../../atoms/Select'
import Page from '../../atoms/Page'
import Text from '../../atoms/Text'
import {
    ContentWrapper,
    SearchWrapper,
    LoadingWrapper,
} from './style'
import useShows from '../../../hooks/useShows'

const headers = {
    popular: 'Popular shows',
    topRated: 'Top rated shows',
    airingNow: 'Airing now shows'
}

const searchOptions = [{
    id: 'ascName', name: 'Ascending name',
},{
    id: 'descName', name: 'Descending name',
},{
    id: 'ascScore', name: 'Ascending score',
},{
    id: 'descScore', name: 'Descending score',
}]

const ShowsList = lazy(() => import('../../molecules/ShowsList'));

const Shows = ({ category }) => {
    const [page, setPage] = useState(1)
    const shows = useShows(category, page)

    // const shows = [{
    //     id: 1,
    //     name: "Yaremi",
    //     overview: "This is an example",
    //     vote_average: 7.5,
    //     poster_path: '/zu5HCP84rcBJJhoIQAafMXMeU2p.jpg',
    //     genre_ids: [12, 28],
    //     duration: 120,
    // }]
    
    return (
        <Page title={headers[category]}>
            <ContentWrapper>
                <SearchWrapper>
                    <Select options={searchOptions} label="Order by" />
                </SearchWrapper>
                <Suspense
                    fallback={
                        <LoadingWrapper>
                            <Text type="header-2">Loading shows...</Text>
                        </LoadingWrapper>
                    }
                >
                    <ShowsList shows={shows} setPage={setPage} />
                </Suspense>
            </ContentWrapper>
        </Page>
    )
}

Shows.propTypes = {
    category: PropTypes.oneOf(Object.keys(headers)).isRequired,
}

export default Shows
