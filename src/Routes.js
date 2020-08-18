import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from './components/molecules/Loading'
import Page from './components/atoms/Page'

const Shows = lazy(() => import('./components/organisms/Shows'))
const ShowDetail = lazy(() => import('./components/organisms/ShowDetail'))

const Routes = ({ setTitle, isSideMenuFixed }) => (
    <Suspense
        fallback={<Loading isSideMenuFixed={isSideMenuFixed}>Loading page...</Loading>}
    >
        <Page isSideMenuFixed={isSideMenuFixed}>
            <Switch>
                {/* Other pages */}
                <Route path="/topRated">
                    <Shows category="topRated" setTitle={setTitle} />
                </Route>
                <Route path="/airingNow">
                    <Shows category="airingNow" setTitle={setTitle} />
                </Route>

                {/* Path to see the show detail */}
                <Route path="/show/:showId">
                    <ShowDetail />
                </Route>


                {/* Initial page */}
                <Route exact path="/">
                    <Shows category="popular" setTitle={setTitle} />
                </Route>

                {/* Add not found page */}
            </Switch>
        </Page>
    </Suspense>
)

export default Routes