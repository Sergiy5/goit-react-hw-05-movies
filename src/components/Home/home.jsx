import ListMovies from 'components/ListMovies/listMovies';
import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import {trendMovies} from "utils/searchDataMovie";

const Home = () => {
    const [movies, setMovies] = useState([])
  // const location = useLocation()
 
  useEffect(() => {
        trendMovies().then(data => setMovies(data.results));
    }, []);
  return <>{movies && <ListMovies movies={movies} />}</>;
  // <ul>
  //   {movies.map(({ title, id, name }) => {
  //     return (
  //       <li key={id}>
  //         <Link to={`movies/${id}`} state={{ from: location }}>
  //           {title ? title : name}
  //         </Link>{' '}
  //       </li>
  //     );
  //   })}
  // </ul>
}

export default Home;