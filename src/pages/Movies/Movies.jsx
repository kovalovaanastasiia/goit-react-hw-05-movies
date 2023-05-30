import {Link, useLocation, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {SearchBar} from "../../components/SearchBar/SearchBar";
import {getFilmByFilters} from "../../services/api";

import css from './Movies.module.css'

export const Movies = () => {
  const [filteredFilms, setFilteredFilms] = useState([])
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation()

  const filter = searchParams.get('filter') ? searchParams.get('filter') : '';

  useEffect(()=>{
    const fetchFilmsByFilters = async () => {
      try {
        setLoading(true);
        const response = await getFilmByFilters(filter);
        setFilteredFilms(response.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilmsByFilters();
  }, [filter]);

  return (
    <>
      <SearchBar setSearchParams={setSearchParams}/>
      {loading && <p>Loading...</p>}
      <ul className={css.filteredMoviesList}>
        {filter !== '' && filteredFilms &&
          filteredFilms.map(({ id, original_title }) => (
            <li key={id}>
              <Link className={css.filteredMoviesItem} to={`${id}`} state={location}>{original_title}</Link>
            </li>
          ))}
      </ul>
    </>
  )
}

