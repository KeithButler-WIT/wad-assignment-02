import { useEffect, useState } from "react";
import {getActor} from '../api/movies-api';

const useActor = id => {
  const [actor, setActor] = useState(null);
  useEffect(() => {
    getActor(id).then(actor => {
      setActor(actor);
    });
  }, [id]);
  return [actor, setActor];
};

export default useActor;
