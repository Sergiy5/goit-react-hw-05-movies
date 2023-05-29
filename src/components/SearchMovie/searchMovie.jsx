import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import {FetchAPI} from "utils/searchDataMovie"
import ListMovies from 'components/ListMovies/listMovies';


const SearchMovie = () => {
    const [movies, setMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const handleSubmit = (e) => {
    e.preventDefault()
    
    FetchAPI(query.trim()).then(res => {
      return setMovie(res.results);
    });
  }
  
  const handleChange = ({ target }) => {
    setSearchParams({query: target.value});
  };
  
  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query}
            onChange={handleChange}
            type="text"
          />
          <button type="submit">submit</button>
        </form>
        {movies ? <ListMovies movies={movies} /> : ''}
      </div>
    );
    }

export default SearchMovie