import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { ActorsContext } from "../../contexts/actorsContext";


export default function ActorCard({ actor, action }) {
  const { favourites, addToFavourites } = useContext(ActorsContext);


  if (favourites.find((id) => id === actor.id)) {
    actor.favourite = true;
  } else {
    actor.favourite = false
  }

  const handleAddToFavourite = (e) => {
    e.preventDefault();
    addToFavourites(actor);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
          avatar={
            actor.favourite ? (
              <Avatar sx={{ backgroundColor: 'red' }}>
                {action(actor)}
              </Avatar>
            ): null
          }
          title={
            <Typography variant="h5" component="p">
              {actor.name}{" "}
            </Typography>
          }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "}{actor.popularity}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favourites" onClick={handleAddToFavourite}>
          <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
