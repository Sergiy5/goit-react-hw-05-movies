import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import Layout from "./Layout/layout";
import MoviePage from 'pages/MoviePage';
import Movie from "./Movie/movie";

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
          <Route path="movies" element={<MoviePage />}>
            <Route path=":id" element={<Movie />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
