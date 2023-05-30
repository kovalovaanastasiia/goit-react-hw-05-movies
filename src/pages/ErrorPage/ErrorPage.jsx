import {Link} from 'react-router-dom';

import css from './ErrorPage.module.css'

export const ErrorPage = () => {
  return (
    <div className={css.errorWrap}>
      <p className={css.errorText}>Oops...This page was not found</p>
      <Link className={css.returnBtn} to={'/'}>Return to main page</Link>
    </div>
  );
};
