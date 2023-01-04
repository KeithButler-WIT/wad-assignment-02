import React from "react";
import TvShowDetails from "../components/tvShowDetails";
import SampleTvShow from "./sampleTvShowData";
import { MemoryRouter } from "react-router";
import TvShowsContextProvider from "../contexts/tvShowsContext";

export default {
  title: "Tv Show Details Page/TvShowDetails",
  component: TvShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
  ],
};

export const Basic = () => <TvShowDetails show={SampleTvShow} />;

Basic.storyName = "Default";
