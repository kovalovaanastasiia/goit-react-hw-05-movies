import React from "react";

import css from './SearchDar.module.css'

export const SearchBar = ({setSearchParams}) => {
  const handleChange = ({target}) => {
    setSearchParams({filter: target.value})
  }

  return (
    <form>
      <div className={css.searchWrap}>
        <label htmlFor="filter" className={css.searchLabel}>Search:</label>
        <input
          className={css.searchInput}
          name='filter'
          type="text"
          // value={filter}
          onChange={handleChange}/>
      </div>
    </form>
  )
}
