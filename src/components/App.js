import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import AppBar from './AppBar/AppBar';
import NotFoundView from '../views/NotFoundView';

const HomeView = lazy(() =>
  import('../views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('../views/MoviesPage.js' /* webpackChunkName: "movies-view" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../views/MovieDetailsPage.js' /* webpackChunkName: "movie-detail-view" */
  ),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Movies</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.errorPage} component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
