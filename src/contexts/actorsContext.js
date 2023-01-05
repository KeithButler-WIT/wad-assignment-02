import React, { useState, createContext, useEffect, useReducer } from "react";
import { getActors } from "../api/movie-api";

export const ActorsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { actors: action.payload.result };
    default:
      return state;
  }
};

const ActorsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { actors: [] });
  const [authenticated, setAuthenticated] = useState(false);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    getActors().then((result) => {
      console.log(result);
      dispatch({ type: "load", payload: { result } });
    });
  }, []);

  const addToFavourites = (actor) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setFavourites(newFavourites);
  };

  const removeFromFavourites = (actor) => {
    setFavourites(favourites.filter((mId) => mId !== actor.id));
  };

  return (
    <ActorsContext.Provider
      value={{
        actors: state.actors,
        setAuthenticated,
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;
