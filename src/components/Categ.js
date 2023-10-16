import CatCard from './CatCard';

import './Categ.css';
import { catcards } from './Constants';

function Categ() {
  return (
    <>
      <section className="categ">
        <div className="categ__bckground">
          <div className="categ__content page__spacing">
            <div className="categ__block-title">
              <h2 className="categ__title">Категория товаров</h2>
              <p className="categ__subtitle">
                Заказывайте оборудование или запасные части по данным категориям
              </p>
            </div>
            <div className="categ__list">
              {catcards.map((item, index) => {
                return <CatCard key={index} infoCard={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categ;
