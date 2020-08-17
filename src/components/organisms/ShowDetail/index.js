import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import Text from '../../atoms/Text'
import Image from '../../atoms/Image'
import Score from '../../atoms/Score'
import Chip from '../../molecules/Chip'
import Page from '../../atoms/Page'
import Loading from '../../molecules/Loading'
import useGenres from '../../../hooks/useGenres'
import useExtraShowDetail from '../../../hooks/useExtraDetailShow'
import {
    ShowDetailWrapper,
    DetailWrapper,
    ChipsWrapper,
} from './style'

const ShowDetail = () => {
    const { state: show } = useLocation() // Get show data

    // This hook get all available genres from redux store
    const allGenres = useGenres()

    // This hook get a extra show detail, in this case
    // only is necessary run_time
    const {
        showDetail: {
            episode_run_time: duration,
            number_of_seasons: seasons,
        },
        isLoading,
    } = useExtraShowDetail(show.id) || {}

    // Calculate what are the show's names depending of
    // its ids
    const genres = useMemo(() => (
        allGenres.reduce((accum, genreDef) => {
            let newGenres = accum
            show.genre_ids.forEach((genreId) => {
                if (genreId === genreDef.id) {
                    newGenres = [...newGenres, genreDef.name]
                }
            })

            return newGenres
        }, [])
    ), [allGenres, show.genre_ids])


    if (isLoading) {
        return <Loading>Loading show detail...</Loading>
    }

    return (
        <Page>
            <ShowDetailWrapper>
                <Text type="header-2">{show.name}</Text>
                <Image src={show.image} />
                <Score value={show.score} />
                
                <DetailWrapper>
                    <Text type="header-2">Overview</Text>
                    <Text type="paragraph">{show.overview}</Text>

                    <Text type="header-2">{`${seasons} seasons`}</Text>

                    <ChipsWrapper>
                        <Chip icon="Movie" color="secondary" label={genres.join('/')} />
                        <Chip icon="Schedule" color="secondary" label={`${duration?.[0] || 0} min`} />
                    </ChipsWrapper>
                </DetailWrapper>
            </ShowDetailWrapper>
        </Page>
            
    )
}

export default ShowDetail