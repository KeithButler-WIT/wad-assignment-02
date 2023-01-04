import { useEffect, useState } from "react";
import {getTvShow} from '../api/tmdb-api'

const useTvShow = id => {
  const [TvShow, setTvShow] = useState(null);
  useEffect(() => {
    getTvShow(id).then(TvShow => {
      setTvShow(TvShow);
    });
  }, [id]);
  return [TvShow, setTvShow];
};

export default useTvShow
