import { Link } from 'react-router-dom';

import './In_2.css';
import CatalogCard from './CatalogCard';
import { equipmentTree } from './Constants'

function In_2() {
  let url = new URL(window.location.href);
  let decodeNameParent = url.searchParams.get('key');
  let encodeNameParent = encodeURI(decodeNameParent);
  let decodeNameParent_x2 = url.searchParams.get('parent');
  let encodeNameParent_x2 = encodeURI(decodeNameParent_x2);

  let childrenEquipment = equipmentTree[decodeURI(encodeNameParent_x2)]
    .children[decodeURI(encodeNameParent)].children;
  let nameRus = equipmentTree[decodeURI(encodeNameParent_x2)]
    .children[decodeURI(encodeNameParent)].translateRus;
  let nameRusParent = equipmentTree[decodeURI(encodeNameParent_x2)]
    .translateRus;


  let pathHistoryParent = "/catalog/in-1/?key=" + encodeNameParent_x2;

  const cardElements = [];
  let i = 0;

  for (var keyObject in childrenEquipment) {
    if (childrenEquipment.hasOwnProperty(keyObject)) {
      let encodeName = encodeURI(keyObject);
      
      let pathUrl = "/catalog/in-3/?key=" + encodeName 
      + "&parent=" + encodeNameParent
      + "&parent_x2=" + encodeNameParent_x2;

      cardElements.push(<CatalogCard key={i++} name={keyObject} image={childrenEquipment[keyObject].img} pathUrl={pathUrl}/>);
    }
  }

  return (
    <>
      <div className='categories__history page__spacing'>
        <Link to="/catalog">Каталог оборудования</Link>
        <Link to={pathHistoryParent}>/ {nameRusParent}</Link>
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

export default In_2;