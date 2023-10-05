function Page404 (): JSX.Element {
  return (
    <main className="page__main page__main--page404">
      <h1 className="visually-hidden">Page not found</h1>
      <p>
        <span className="page404__text">404</span>
        <span className="page404__text">Page not found</span>
      </p>
      <p className="page404__caption">Sorry, we couldn’t find what you were looking for.</p>
      <a className="page404__link" href="/">Back to homepage</a>
    </main>
  );
}

export default Page404;
