import React from "react";
import TvShowCard from "../components/tvShowCard";
import SampleTvShow from "./sampleTvShowData";
import { MemoryRouter } from "react-router";
import TvShowsContextProvider from "../contexts/tvShowsContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Tv Show Page/TvShowCard",
  component: TvShowCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TvShowCard
      show={SampleTvShow}
      action={(show) => <AddToFavouritesIcon show={show} />}
      taging={(show) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTvShow, poster_path: undefined };
  return (
    <TvShowCard
      show={sampleNoPoster}
      action={(show) => <AddToFavouritesIcon show={show} />}
      taging={(show) => null}
    />
  );
};
Exceptional.storyName = "exception";
