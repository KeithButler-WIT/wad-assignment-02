import React from "react";
import TvShowHeader from "../components/headerTvShow";
import SampleTvShow from "./sampleTvShowData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Tv Show Details Page/TvShowHeader",
  component: TvShowHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TvShowHeader show={SampleTvShow} />;

Basic.storyName = "Default";
