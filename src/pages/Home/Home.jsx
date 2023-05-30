import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import {getTrendingMovies} from "../../services/api";

import css from './Home.module.css'

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const response = await getTrendingMovies();
        setTrendingMovies(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      <h1 className={css.trendingMoviesTitle}>Trending today</h1>
      <ul className={css.trendingMoviesList}>
        {trendingMovies.map(({id, original_title}) => (
          <li key={id} >
            <Link className={css.trendingMoviesItem} to={`movies/${id}`} state={location}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

