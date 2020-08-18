import React, {
    useState,
    useEffect,
    Suspense,
    lazy,
    useCallback,
} from 'react'
import PropTypes from 'prop-types'
import Select from '../../atoms/Select'
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
    id: 'none', name: 'None'
}, {
    id: 'ascName', name: 'Ascending name',
}, {
    id: 'descName', name: 'Descending name',
}, {
    id: 'ascScore', name: 'Ascending score',
}, {
    id: 'descScore', name: 'Descending score',
}]

const ShowsList = lazy(() => import('../../molecules/ShowsList'))

const orderShows = (orderBy, shows, order) => {
    return shows.sort((showA, showB) => {
        if (showA[orderBy] < showB[orderBy]) {
            return order === 'asc' ? -1 : 1
        }
        if (showA[orderBy] > showB[orderBy]) {
            return order === 'asc' ? 1 : -1
        }
        return 0
    })
}
// const isLoading = false
const Shows = ({ category, setTitle, isSideMenuFixed }) => {
    const [page, setPage] = useState(1)
    const { shows, isLoading } = useShows(category, page)
    
    // const shows = useMemo(() => [{
    //     id: 1,
    //     name: "Yaremi",
    //     overview: "This is an example",
    //     vote_average: 7.5,
    //     poster_path: '/zu5HCP84rcBJJhoIQAafMXMeU2p.jpg',
    //     genre_ids: [12, 28],
    //     duration: 120,
    // }], [])

    const [showsOrdered, setShowsOrdered] = useState([])

    useEffect(() => {
        setTitle(headers[category])
    }, [setTitle, category])

    useEffect(() => {
        setShowsOrdered(shows)
    }, [shows])

    const handleOrderBy = useCallback((e) => {
        let _showsOrdered = []
        const _shows = [...shows]
        switch (e.target.value) {
            case 'ascName':
                _showsOrdered = orderShows('name', _shows, 'asc')
                break
            case 'descName':
                _showsOrdered = orderShows('name', _shows, 'desc')
                break
            case 'ascScore':
                _showsOrdered = orderShows('vote_average', _shows, 'asc')
                break
            case 'descScore':
                _showsOrdered = orderShows('vote_average', _shows, 'desc')
                break
            default:
                _showsOrdered = shows
                break
        }
        setShowsOrdered(_showsOrdered)
    }, [shows])

    return (
        <ContentWrapper>
            <SearchWrapper>
                <Select
                    name="orderBy"
                    label="Order by"
                    color="secondary"
                    options={searchOptions}
                    onChange={handleOrderBy}
                />
            </SearchWrapper>
            <Suspense fallback={<Loading>Loading shows...</Loading>}>
                <ShowsList
                    shows={showsOrdered}
                    setPage={setPage}
                    isLoading={isLoading}
                />
            </Suspense>
        </ContentWrapper>
    )
}

Shows.propTypes = {
    category: PropTypes.oneOf(Object.keys(headers)).isRequired,
}

export default Shows
