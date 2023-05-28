import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import Layout from "./Layout/layout";
import MoviePage from 'pages/MoviePage';
import Movie from "./Movie/movie";
import Cast from "./Cast/cast";
import Reviews from "./Reviews/reviews";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        /* // display: 'flex', */
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />  
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
