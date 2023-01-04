import React from "react";
import { getPopularTvShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';


const PopularTvShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popularShows', getPopularTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const shows = data.results;

  return (
    <PageTemplate
      title="Popular Tv Shows"
      shows={shows}
    />
  );

};

export default PopularTvShowsPage;
