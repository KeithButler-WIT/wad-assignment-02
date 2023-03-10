import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result};
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: []});
  const [authenticated, setAuthenticated] = useState(false);
  // const [myReviews, setMyReviews] = useState( {} );
  // const [favourites, setFavourites] = useState( [] );
  // const [playlist, setPlaylist] = useState( [] );

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  // const addToFavourites = (movie) => {
  //   let newFavourites = [...favourites];
  //   if (!favourites.includes(movie.id)) {
  //     newFavourites.push(movie.id);
  //   }
  //   setFavourites(newFavourites);
  // };

  // // We will use this function in a later section
  // const removeFromFavourites = (movie) => {
  //   setFavourites( favourites.filter(
  //     (mId) => mId !== movie.id
  //   ) );
  // };

  // const addReview = (movie, review) => {
  //   setMyReviews( {...myReviews, [movie.id]: review } );
  // };

  // const addToPlaylist = (movie) => {
  //   let newPlaylist = [...playlist];
  //   if (!playlist.includes(movie.id)) {
  //     newPlaylist.push(movie.id);
  //   }
  //   setPlaylist(newPlaylist);
  // };

  // const removeFromPlaylist = (movie) => {
  //   setPlaylist( playlist.filter(
  //     (mId) => mId !== movie.id
  //   ) );
  // };

  return (
    <MoviesContext.Provider
        value={{
          movies: state.movies,
          setAuthenticated,
          /* favourites, */
          /* addToFavourites, */
          /* removeFromFavourites, */
          /* addReview, */
          /* playlist, */
          /* addToPlaylist, */
          /* removeFromPlaylist, */
        }}
    >
      {props.children}
    </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
