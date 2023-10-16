import { Link } from 'react-router-dom';

import './In_1.css';
import CatalogCard from './CatalogCard';
import { equipmentTree } from './Constants'

function In_1() {
  let url = new URL(window.location.href);
  let decodeNameParent = url.searchParams.get('key');
  let encodeNameParent = encodeURI(decodeNameParent);

  let childrenEquipment = equipmentTree[decodeNameParent].children;
  let nameRus = equipmentTree[decodeNameParent].translateRus;

  const cardElements = [];
  let i = 0;

  for (var keyObject in childrenEquipment) {
    if (childrenEquipment.hasOwnProperty(keyObject)) {
      let encodeName = encodeURI(keyObject);
      
      let pathUrl = "/catalog/in-2/?key=" + encodeName + "&parent=" + encodeNameParent;
      console.log("Путь => " + pathUrl);

      cardElements.push(<CatalogCard key={i++} name={keyObject} image={childrenEquipment[keyObject].img} pathUrl={pathUrl}/>);
    }
  }

  i = 0;

  return (
    <>
      <div className='categories__history page__spacing'>
        <Link to="/catalog" activeClassName="categories__history-parent">Каталог оборудования</Link>
        <p className='categories__history-current'>/ {nameRus}</p>
      </div>
      <h2 className="categories__main-title page__spacing">{nameRus}</h2>
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

export default In_1;