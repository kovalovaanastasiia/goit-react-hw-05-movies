import {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from 'react-router-dom';

import {getFilmById} from "../../services/api";

import css from "./MovieDetails.module.css"

export const MovieDetails = () => {
  const {movieId} = useParams();
  const [filmInfo, setFilmInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const fetchFilmInfo = async () => {
      try {
        setLoading(true);
        const response = await getFilmById(movieId);
        setFilmInfo(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilmInfo();
  }, [movieId]);
  return (
    <>
      {loading && <p>Loading...</p>}
      <Link className={css.backBtn} to={location.state}>← Go back</Link>
      <div className={css.mainWrapper}>
        <img
          className={css.filmImage}
          src={`https://image.tmdb.org/t/p/w200/${filmInfo.poster_path}`}
          alt="img"
        />
        <div>
          <h1 className={css.filmTitle}>
            {filmInfo.original_title && filmInfo.original_title}
          </h1>
          <div className={css.scoreWrapper}>
            <h2 className={css.scoreTitle}>User Score:</h2>
            <p className={css.score}>
              {filmInfo.vote_average && filmInfo.vote_average}
            </p>
          </div>
          <div>
            <h2 className={css.overviewTitle}>Overview</h2>
            <p className={css.overview}>
              {filmInfo.overview && filmInfo.overview}
            </p>
          </div>
          <div>
            <h2 className={css.genresTitle}>Genres</h2>
            <ul className={css.genresList}>
              {filmInfo.genres &&
                filmInfo.genres.map(({name, id}) => (
                  <li className={css.genresItem} key={id}>
                    {name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      <h2 className={css.additionalInfoTitle}>Additional information</h2>
      <ul className={css.additionalInfoList}>
        <li>
          <Link className={css.additionalInfoItem} to={`cast`} state={location.state}>Cast</Link>
        </li>
        <li>
          <Link className={css.additionalInfoItem} to={`reviews`} state={location.state}>Reviews</Link>
        </li>
      </ul>
      </div>
      <Outlet/>
    </>
  );
};

