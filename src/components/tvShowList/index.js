import React from "react";
import TvShowCard from "../tvShowCard";
import Grid from "@mui/material/Grid";

const TvShowList = ( {shows, action }) => {
  let tvShowCards = shows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvShowCard key={m.id} show={m} action={action} />
    </Grid>
  ));
  return tvShowCards;
};

export default TvShowList;
