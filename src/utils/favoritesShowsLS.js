export const getFavorites = () => {
    const favoritesShowsS = localStorage.getItem('favoritesShows')

    if (favoritesShowsS) {
        return JSON.parse(favoritesShowsS)
    }

    return {}
}

export const isFavoriteShow = (showId) => {
    const favoritesShows = getFavorites()
    return !!favoritesShows[showId]
}

export const saveFavoriteShow = (showId) => {
    const isFavorite = isFavoriteShow(showId)
    let favoritesShows = getFavorites()

    if (isFavorite) {
        delete favoritesShows[showId]
    } else {
        favoritesShows = {
            ...favoritesShows,
            [showId]: true
        }
    }
    localStorage.setItem('favoritesShows', JSON.stringify(favoritesShows))
}