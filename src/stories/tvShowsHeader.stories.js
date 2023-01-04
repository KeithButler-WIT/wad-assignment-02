import React from "react";
import TvShowsHeader from "../components/headerTvShowList";
import { MemoryRouter } from "react-router";
import TvShowsContextProvider from "../contexts/tvShowsContext";

export default {
  title: "Tv Show Page/TvShowPageHeader",
  component: TvShowsHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
  ],
};

export const Basic = () => <TvShowsHeader title="Discover TvShows" />;

Basic.storyName = "Default";
