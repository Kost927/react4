import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

// import HomePage from '../Pages/HomePage';
// import MovieDetailsPage from '../Pages/MovieDetailsPage';
// import MoviesPage from '../Pages/MoviesPage';
// import Cast from '../Pages/Cast';
// import Review from '../Pages/Review';

import css from './App.module.css';

const HomePage = lazy(() => import('../Pages/HomePage'))
const MoviesPage = lazy(() => import('../Pages/MoviesPage'))
const MovieDetailsPage = lazy(() => import('../Pages/MovieDetailsPage'))
const Cast = lazy(() => import('../Pages/Cast'))
const Review = lazy(() => import('../Pages/Review'))

const App = () => {
  return (
    <>
      <header>
        <nav className={css.Navigation}>
          <ul className={css.NavigationList}>
            <li>
              <NavLink
                exact
                to="/"
                className={css.NavigationLink}
                activeClassName={css.NavigationLinkActive}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={css.NavigationLink}
                activeClassName={css.NavigationLinkActive}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Redirect to="/" />
        </Switch>
        </Suspense>
      </div>
      
        <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/movies/:id/cast" component={Cast} />
            <Route path="/movies/:id/reviews" component={Review} />
          </Switch>
          </Suspense>
      </div>
    </>
  );
};

export default App;
