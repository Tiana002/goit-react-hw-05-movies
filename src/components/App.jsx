import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle.jsx';
import { Container } from './Container.styled';
import LayoutHeader from './LayoutHeader/LayoutHeader';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('components/pages/Home'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Movies = lazy(() => import('./pages/Movies'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <Container>
      <Suspense>
        <Routes>
          <Route path="/" element={<LayoutHeader />}>
          <Route index element={<Home />} />

            <Route path="/movies" element={<Movies />} />

            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </Container>
  );
};
