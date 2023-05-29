import { Link } from "react-router-dom";
import { useLocation } from "react-use";


const ListMovies = ({ movies }) => {
  const location = useLocation()
  
    return (
      <ul>
        {movies.map(({ title, id, name }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title ? title : name}
              </Link>{' '}
            </li>
          );
        })}
      </ul>
    );
}
export default ListMovies