import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "utils/searchDataMovie";

const Reviews = () => {
    const [reviewsMovie, setReviewsMovie] = useState([]);
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
      const reviews = async () =>
        await getMovieReviews(id).then(res => {
            console.log('res', res);
          return setReviewsMovie(res.results);
        });
      reviews();
    }, [id]);
    console.log(reviewsMovie);
    // return (
        
    // )
}
export default Reviews;