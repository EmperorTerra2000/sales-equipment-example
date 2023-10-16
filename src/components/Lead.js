import './Lead.css';

function Lead() {
  return (
    <>
      <section className="lead">
        <div className="lead__bckground">
          <div className="lead__slider">
            <div className="lead__slide"></div>
            <div className="lead__slide"></div>
            <div className="lead__slide"></div>
            <div className="lead__slide"></div>
            <div className="lead__slide"></div>
          </div>
          <div className="lead__carpet">
            <div className="lead__content page__spacing">
              <div className="lead__block">
                <h2 className="lead__title">Критически важный поставщик оборудования для ТЭК</h2>
                <p className="lead__subtitle">ОТ ПРОЕКТА ДО ЗАПУСКА!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lead;
