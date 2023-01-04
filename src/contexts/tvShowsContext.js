import React, { useState } from "react";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )

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
    ) )
  };

  return (
    <TvShowsContext.Provider
        value={{
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
