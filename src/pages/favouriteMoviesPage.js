import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteMoviesPage = () => {
  const {favourites: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id);
    // q.data.genre_ids = q.data.genre_ids.sort();
    return q.data
  });

  const toDo = () => true;
  // const sortedMovies = movies[Symbol.iterator] = function* () {
  //     yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
  // }

  // const sortedMovies = new Map([...movies.entries()].sort(([a], [b]) => String(a).localeCompare(b)));

  return (
    <PageTemplate
      title="Favourite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavourites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavouriteMoviesPage;
