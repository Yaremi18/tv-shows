import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Shows from './components/organisms/Shows'

const Routes = () => (
    <Switch>
        {/* Other pages */}
        <Route path="/topRated">
            <Shows category="topRated" />
        </Route>
        <Route path="/airingNow">
            <Shows category="airingNow" />
        </Route>

        {/* Path to see the show detail */}
        <Route path="/show/:showId">
            <Shows category="airingNow" />
        </Route>


        {/* Initial page */}
        <Route exact path="/">
            <Shows category="popular" />
        </Route>

        {/* Add not found page */}
    </Switch>
)

export default Routes