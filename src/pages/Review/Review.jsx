import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {getReviews} from "../../services/api";

import css from './Review.module.css'
export const Review = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true);
  const {movieId} = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await getReviews(movieId);
        setReviews(response.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && reviews.length === 0 && <p>We dont have any reviews to this movie</p>}
      {!loading && reviews.length > 0 && (
        <ul className={css.reviewList}>
          {reviews.map((review) => (
            <li className={css.reviewItem} key={review.id}>
              <p className={css.reviewAuthor}>Author: {review.author}</p>
              <p className={css.reviewContent}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
