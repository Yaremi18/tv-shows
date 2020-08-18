import React, { useMemo, useCallback, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
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
    TopWrapper,
    FavoriteButton,
    BackWrapper,
    BackButton,
} from './style'
import Icon from '../../atoms/Icon'
import { saveFavoriteShow, isFavoriteShow } from '../../../utils/favoritesShowsLS'

const ShowDetail = () => {
    const { state: show } = useLocation() // Get show data
    const history = useHistory()
    const [isFavorite, setIsFavorite] = useState(isFavoriteShow(show.id))

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

    const handleMarkFavorite = useCallback((showId) => () => {
        saveFavoriteShow(showId)
        setIsFavorite(prev => !prev)
    }, [])

    if (isLoading) {
        return <Loading>Loading show detail...</Loading>
    }

    return (
        <Page>
            <ShowDetailWrapper>
                <BackWrapper onClick={() => history.goBack()}>
                    <BackButton>
                        <Icon name="ArrowBack" color="primary" />
                    </BackButton>
                </BackWrapper>
                <Text type="header-2">{show.name}</Text>
                
                <Image src={show.image} type="detail" />
                <Score value={show.score} />
                
                <DetailWrapper>
                    <TopWrapper>
                        <Text type="header-2" color="primary">Overview</Text>
                        <FavoriteButton onClick={handleMarkFavorite(show.id)} isFavorite={isFavorite}>
                            <Icon color={isFavorite ? 'red' : 'lightGray'} name="Favorite" />
                        </FavoriteButton>
                    </TopWrapper>
                    <Text type="paragraph">{show.overview}</Text>

                    <ChipsWrapper>
                        <Chip icon="Movie" label={genres.join('/')} />
                        <Chip icon="Schedule" label={`${duration?.[0] || 0} min`} />
                        <Chip label={`${seasons} seasons`} />
                    </ChipsWrapper>
                </DetailWrapper>
            </ShowDetailWrapper>
        </Page>
            
    )
}

export default ShowDetail