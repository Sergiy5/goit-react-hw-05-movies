import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "utils/searchDataMovie";
import MovieItem from "../MovieItem/movieItem";
import AdditionalInformatione from "../AdditionalInformatione/additionalInformatione"

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    
    const getMovie = async () => await getMovieById(id)
      .then(res => setMovie(res))
    
      getMovie()       
  }, [id]);

  return (
    <div>
      <div> {movie ? <MovieItem movie={movie} /> : ''}</div>
      <div>
        <AdditionalInformatione />
      </div>
    </div>
  );

  }

export default Movie;