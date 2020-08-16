import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import Text from '../../atoms/Text'
import Image from '../../atoms/Image'
import Score from '../../atoms/Score'
import Chip from '../../molecules/Chip'
import Page from '../../atoms/Page'
import useGenres from '../../../hooks/useGenres'
import {
    ShowDetailWrapper,
    DetailWrapper,
    ChipsWrapper,
} from './style'
import useExtraShowDetail from '../../../hooks/useExtraDetailShow'

const ShowDetail = () => {
    const { state: show } = useLocation() // Get show data

    // This hook get all available genres from redux store
    const genres = useGenres()

    // This hook get a extra show detail, in this case
    // only is necessary run_time
    const { episode_run_time: durationShow } = useExtraShowDetail(show.id) || {}

    // Calculate what are the show's names depending of
    // its ids
    const genresShow = useMemo(() => (
        genres.reduce((accum, genreDef) => {
            let newGenres = accum
            show.genre_ids.forEach((genreId) => {
                if (genreId === genreDef.id) {
                    newGenres = [...newGenres, genreDef.name]
                }
            })

            return newGenres
        }, [])
    ), [genres, show.genre_ids])

    return (
        <Page title="Show detail">
            <ShowDetailWrapper>
                <Text type="header-2">{show.name}</Text>
                <Image src={show.image} />
                <Score value={show.score} />
                
                <DetailWrapper>
                    <Text type="header-2">Overview</Text>
                    <Text type="paragraph">{show.overview}</Text>

                    <ChipsWrapper>
                        <Chip icon="Movie" color="secondary" label={genresShow.join('/')} />
                        <Chip icon="Schedule" color="secondary" label={`${durationShow?.[0] || 0} min`} />
                    </ChipsWrapper>
                </DetailWrapper>
            </ShowDetailWrapper>
        </Page>
            
    )
}

export default ShowDetail