import CatalogCard from './CatalogCard';

import './Catalog.css';
import { equipmentTree } from './Constants';

function Catalog() {
  const cardElements = [];
  let i = 0;

  for (var keyObject in equipmentTree) {
    if (equipmentTree.hasOwnProperty(keyObject)) {
      let encodeName = encodeURI(keyObject);

      let pathUrl = "/catalog/in-1/?key=" + encodeName;

      cardElements.push(<CatalogCard key={i++} name={keyObject} image={equipmentTree[keyObject].img} pathUrl={pathUrl}/>);
    }
  }

  i = 0;

  return (
    <>
      <h2 className="categories__main-title page__spacing">Каталог оборудования</h2>
      <section className="catalog">
        <div className="catalog__bckground">
          <div className="catalog__content page__spacing">
            <div className="catalog__list">
              {cardElements.map((item, index) => {
                return item;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
