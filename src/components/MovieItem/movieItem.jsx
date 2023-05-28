import { nanoid } from 'nanoid';

const MovieItem = ({ movie }) => {
  const { original_title, genres, poster_path, vote_average, overview } = movie;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : '';
  return (
    <div style={{ display: 'Flex' }}>
      <div>
        <img src={poster} style={{ width: '200px' }} alt="OUPS" />
      </div>
      <div style={{ display: 'block', marginLeft: '20px' }}>
        <h3>{original_title}</h3>
        <ul>
          <li>Average: {vote_average}</li>
          <li>Overview: {overview}</li>
          {genres.length ? (
            <li>
              {genres
                .map(ganre => (
                  <p key={nanoid()} style={{ display: 'inline' }}>
                    {ganre.name}
                  </p>
                ))
                .reduce((prev, curr) => [prev, ', ', curr])}
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </div>
  );
};

export default MovieItem;
