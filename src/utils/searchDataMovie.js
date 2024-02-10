

  const API_KEY = '98e930c2fa74caea64f2026cf70ec413';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const TREND_URL = `${BASE_URL}/trending/all/day`;
  const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie`;
  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGU5MzBjMmZhNzRjYWVhNjRmMjAyNmNmNzBlYzQxMyIsInN1YiI6IjY0NmQwNWJhZDE4NTcyMDE4MDJlOGYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gvC078v2ZEDlsUKlhf6XJhVHnGo7gwYMbWV5S3NVSKY',
    },
  };

  export async function trendMovies(page = 1) {
    return await fetch(TREND_URL, options)
      .then(response => {
        return response.json();
      })
      .catch(error => console.log(error));
  }
  
export async function getMovieById(id) {
  try {
    const data = await fetch(
      `${ID_URL}/${id}?api_key=${API_KEY}&language=en-US`,
      options
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        };
        throw new Error()
      })
    return data
  } catch (error) {
    alert('Тут зовсім порожньо');
  }
}


export  async function FetchAPI(query, page=1) {
  try {
   return await fetch(
     `${SEARCH_URL}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`,
     options
    ).then(res=> res.json());
 } catch (error) {
   console.error('Smth wrong with api search fetch' + error);
 }
}
    
export async function getMovieCredits(id) {
  try {
    const data = await fetch(
      `${ID_URL}/${id}/credits?api_key=${API_KEY}&language=en-US`,
      options
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    });
    return data;
  } catch (error) {
    alert('Тут зовсім порожньо');
  }
}
 
export async function getMovieReviews(id) {
  try {
    const data = await fetch(
      `${ID_URL}/${id}/reviews?api_key=${API_KEY}&language=en-US`,
      options
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    });
    return data;
  } catch (error) {
    alert('Тут зовсім порожньо');
  }
}
  // return Promise.reject(new Error(`За запитом ${query} нічого не знайдено`));