import React, { useState, useEffect, Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import Select from '../../atoms/Select'
import Page from '../../atoms/Page'
// import ShowsList from '../../molecules/ShowsList'
import Loading from '../../molecules/Loading'
import useShows from '../../../hooks/useShows'
import {
    ContentWrapper,
    SearchWrapper,
} from './style'

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

const ShowsList = lazy(() => import('../../molecules/ShowsList'))

const Shows = ({ category, setTitle }) => {
    const [page, setPage] = useState(1)
    const { shows, isLoading } = useShows(category, page)

    // const isLoading = false
    // const shows = [{
    //     id: 1,
    //     name: "Yaremi",
    //     overview: "This is an example",
    //     vote_average: 7.5,
    //     poster_path: '/zu5HCP84rcBJJhoIQAafMXMeU2p.jpg',
    //     genre_ids: [12, 28],
    //     duration: 120,
    // }]

    useEffect(() => {
        setTitle(headers[category])
    }, [setTitle, category])

    return (
        <Page>
            <ContentWrapper>
                <SearchWrapper>
                    <Select options={searchOptions} label="Order by" />
                </SearchWrapper>
                <Suspense fallback={<Loading>Loading shows...</Loading>}>
                    <ShowsList shows={shows} setPage={setPage} isLoading={isLoading} />
                </Suspense>
            </ContentWrapper>
        </Page>
    )
}

Shows.propTypes = {
    category: PropTypes.oneOf(Object.keys(headers)).isRequired,
}

export default Shows
