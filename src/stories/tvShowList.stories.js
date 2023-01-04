import React from "react";
import TvShowList from "../components/tvShowList";
import SampleTvShow from "./sampleTvShowData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@mui/material/Grid";
import TvShowsContextProvider from "../contexts/tvShowsContext";

export default {
  title: "Tv Show Page/TvShowList",
  component: TvShowList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
  ],
};

export const Basic = () => {
  const shows = [
    { ...SampleTvShow, id: 1 },
    { ...SampleTvShow, id: 2 },
    { ...SampleTvShow, id: 3 },
    { ...SampleTvShow, id: 4 },
    { ...SampleTvShow, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TvShowList
        shows={shows}
        action={(tvShow) => <AddToFavouritesIcon shows={shows} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
