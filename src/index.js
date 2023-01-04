import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TvShowPage from "./pages/tvShowDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import FavouriteActorsPage from "./pages/favouriteActorsPage";
import PlaylistMoviesPage from "./pages/playlistMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import PopularTvShowsPage from "./pages/popularTvShowsPage";
import PopularActorsPage from "./pages/popularActorsPage";
import {Link} from 'react-router-dom';
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import ActorsContextProvider from "./contexts/actorsContext";
import TvShowsContextProvider from "./contexts/tvShowsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <TvShowsContextProvider>
        <ActorsContextProvider>
          <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route exact path="/movies/playlist" element={<PlaylistMoviesPage/>} />
            <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route exact path="/movies/popular" element={<PopularMoviesPage/>} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route exact path="/tv/popular" element={<PopularTvShowsPage/>} />
            <Route path="/tv/:id" element={<TvShowPage />} />
            <Route exact path="/actors/favourites" element={<FavouriteActorsPage/>} />
            <Route exact path="/actors/popular" element={<PopularActorsPage/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </ActorsContextProvider>
        </TvShowsContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
