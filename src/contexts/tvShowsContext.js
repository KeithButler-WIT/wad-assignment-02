import React, { useState, createContext, useEffect, useReducer } from "react";
import { getShows } from "../api/movie-api";

export const TvShowsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { shows: action.payload.result };
    default:
      return state;
  }
};

const TvShowsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { shows: [] });
  const [authenticated, setAuthenticated] = useState(false);
  const [favourites, setFavourites] = useState( [] );

  useEffect(() => {
    getShows().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  const addToFavourites = (show) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(show.id)) {
      newFavourites.push(show.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (show) => {
    setFavourites( favourites.filter(
      (mId) => mId !== show.id
    ) );
  };

  return (
    <TvShowsContext.Provider
        value={{
        setAuthenticated,
        favourites,
        addToFavourites,
        removeFromFavourites,
        }}
    >
        {props.children}
    </TvShowsContext.Provider>
    );
};

export default TvShowsContextProvider;
