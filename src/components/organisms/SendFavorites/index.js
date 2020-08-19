import React, { useEffect, useMemo, useCallback, useState } from 'react'
import { getFavorites } from '../../../utils/favoritesShowsLS'
import useFavorites from '../../../hooks/useFavorites'
import Text from '../../atoms/Text'
import { SendFavoritesWrapper, Input, SendButton } from './style'
import Icon from '../../atoms/Icon'

const SendFavorites = ({ setTitle }) => {
    const sendFavoriteShow = useFavorites()
    const [isLoading, setIsLoading] = useState(false)
    const [sessionId, setSessionId] = useState(undefined)
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })

    useEffect(() => {
        setSessionId(localStorage.getItem('sessionId-themoviedb'))
    }, [])

    useEffect(() => {
        setTitle('Send favorites shows')
    }, [setTitle])

    const favoritesShows = useMemo(() => getFavorites(), [])

    const sendAllFavoritesShows = useCallback(async () => {
        if (!sessionId && (!loginData.username || !loginData.password)) {
            window.alert("All fields are required!")
            return
        }
        setIsLoading(true)
        try {
            const keys = Object.keys(favoritesShows)
            
            // I didn't use a Promise.all(keys.map() => {..}) because I needed that
            // finished each petition to save the sessionId.
            for (let i = 0; i < keys.length; i++) {
                await sendFavoriteShow(
                    loginData.username,
                    loginData.password,
                    keys[i],
                )
            }
            setSessionId(localStorage.getItem('sessionId-themoviedb'))
            window.alert("All your favorites shows were saved on your account.")
        } catch (e) {
            window.alert(e.message)
        }

        setIsLoading(false)
    }, [favoritesShows, loginData, sendFavoriteShow, sessionId])

    const handleChangeLoginData = useCallback(({ target: { value, name } }) => {
        setLoginData(prev => ({
            ...prev,
            [name]: value,
        }))
    }, [])

    if (!Object.keys(favoritesShows).length) {
        return (
            <SendFavoritesWrapper>
                <Text>You don't have favorites shows</Text>
            </SendFavoritesWrapper>
        )
    }
    
    return (
        <SendFavoritesWrapper>
            
            {!sessionId ? (
                <>
                    <Text type="header-2" color="primary">Log in</Text>
                    <Text>
                        <Text>To save your favorites shows you need to have an account in </Text>
                        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">themoviedb</a>
                    </Text>

                    <Text>User name</Text>
                    <Input name="username" value={loginData.username} onChange={handleChangeLoginData} />

                    <Text>Password</Text>
                    <Input type="password" name="password" value={loginData.password} onChange={handleChangeLoginData}/>
                </>
            ) : (
                <Text>You are already logged in, and you can save your favorites shows</Text>
            )}
            <SendButton
                onClick={sendAllFavoritesShows}
                disabled={isLoading}
            >
                {!isLoading ? 'Send favorites' : <Icon name="Loop" color="primary" />}
            </SendButton>
        </SendFavoritesWrapper>
    )
}

export default SendFavorites