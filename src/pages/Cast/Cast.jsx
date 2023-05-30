import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {getCast} from "../../services/api";

import css from './Cast.module.css'

export const Cast = () => {
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(true);
  const {movieId} = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const response = await getCast(movieId);
        setCast(response.cast);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && cast.length === 0 && <p>No cast found</p>}
      {!loading && cast.length > 0 && (
        <ul className={css.castList}>
          {cast.map(cast => (
            <li className={css.castItem} key={cast.id}>
              <img className={css.castImage} src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.name}/>
              <p>{cast.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
