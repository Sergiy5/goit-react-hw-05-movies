import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-use';
import {trendMovies} from "utils/searchDataMovie";

const Home = () => {
    const [movies, setMovies] = useState([])
  const location = useLocation()
  
    useEffect(() => {
        trendMovies().then(data => {
                setMovies(data.results)
    });
    }, []);
  return (
    <ul>
      {movies.map(({ title, id, name }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title ? title : name}
            </Link>{' '}
          </li>
        );
      })}
    </ul>
  );
}

export default Home;