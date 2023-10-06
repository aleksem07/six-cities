import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Page404 (): JSX.Element {
  return (
    <main className="page__main page__main--page404">
      <h1 className="visually-hidden">Page not found</h1>
      <p>
        <span className="page404__text">404</span>
        <span className="page404__text">Page not found</span>
      </p>
      <p className="page404__caption">Sorry, we couldn’t find what you were looking for.</p>

      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Root}>
            <span>Back to homepage</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Page404;
