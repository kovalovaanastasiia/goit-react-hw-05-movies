import {Suspense} from "react";
import {NavLink, Outlet} from "react-router-dom";

import css from './Layout.module.css'

export const Layout = () => {
  return (
    <nav>
      <NavLink className={css.navLink} to="/">Home</NavLink>
      <NavLink className={css.navLink} to="/movies">Movies</NavLink>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet/>
      </Suspense>
    </nav>
  );
};
