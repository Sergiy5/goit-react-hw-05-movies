import { Outlet} from "react-router-dom";
import SearchMovie from "components/SearchMovie/searchMovie";


const MoviePage = () => {
    return (
      <>
        <SearchMovie />
        <Outlet />
      </>
    );
}
export default MoviePage;