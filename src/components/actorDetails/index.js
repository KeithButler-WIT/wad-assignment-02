import React, { useState} from "react";
// import Chip from "@mui/material/Chip";
// import Paper from "@mui/material/Paper";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import MonetizationIcon from "@mui/icons-material/MonetizationOn";
// import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
// import Drawer from "@mui/material/Drawer";


// const root = {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     listStyle: "none",
//     padding: 1.5,
//     margin: 0,
// };

const ActorDetails = ({ actor }) => {  // Don't miss this!

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {actor.overview}
      </Typography>
     <Fab
        color="secondary"
        variant="extended"
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
      </Fab>
    </>
  );
};

export default ActorDetails ;
