import { Link } from "react-router-dom";


const ListMovies = ( {movies} ) => {
    return (
      <ul>
        {movies.map(({ title, id, name }) => {
          return (
            <li key={id}>
              <Link to={`${id}`}>{title ? title : name}</Link>{' '}
            </li>
          );
        })}
      </ul>
    );
}
export default ListMovies