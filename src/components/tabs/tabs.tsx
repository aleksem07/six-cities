import Location from '../location/location';

function Tabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <Location city="Paris" />
          <Location city="Cologne" />
          <Location city="Brussels" />
          <Location city="Amsterdam" active/>
          <Location city="Hamburg" />
          <Location city="Dusseldorf" />
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
