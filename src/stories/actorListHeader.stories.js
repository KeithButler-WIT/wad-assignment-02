import React from "react";
import ActorListHeader from "../components/headerActorList";

export default {
  title: "Actor Page/ActorListHeader",
  component: ActorListHeader,
};

export const Basic = () => <ActorListHeader title={'Discover Actors'} />;

Basic.storyName = "Default";
