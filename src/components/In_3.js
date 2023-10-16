import { Link } from 'react-router-dom';

import './In_3.css';
import CatalogCard from './CatalogCard';
import { equipmentTree } from './Constants'

function In_3() {
  let url = new URL(window.location.href);
  let encodeNameParent = encodeURI(url.searchParams.get('key'));
  let encodeNameParent_x2 = encodeURI(url.searchParams.get('parent'));
  let encodeNameParent_x3 = encodeURI(url.searchParams.get('parent_x2'));

  let childrenEquipment = equipmentTree[decodeURI(encodeNameParent_x3)]
    .children[decodeURI(encodeNameParent_x2)]
    .children[decodeURI(encodeNameParent)].children;
  
  let nameRus = equipmentTree[decodeURI(encodeNameParent_x3)]
  .children[decodeURI(encodeNameParent_x2)]
  .children[decodeURI(encodeNameParent)].translateRus;
  let nameRusParent_x2 = equipmentTree[decodeURI(encodeNameParent_x3)].translateRus;
  let nameRusParent = equipmentTree[decodeURI(encodeNameParent_x3)]
  .children[decodeURI(encodeNameParent_x2)].translateRus;
  

  let pathHistoryParent_x2 = "/catalog/in-1/?key=" + encodeNameParent_x3;

  let pathHistoryParent = "/catalog/in-2/?key=" + encodeNameParent_x2
  + "&parent=" + encodeNameParent_x3;

  console.log(childrenEquipment);

  const cardElements = [];
  let i = 0;

  for (var keyObject in childrenEquipment) {
    if (childrenEquipment.hasOwnProperty(keyObject)) {
      let encodeName = encodeURI(keyObject);
      
      let pathUrl = "/catalog/equipment/?key=" + encodeName 
      + "&parent=" + encodeNameParent
      + "&parent_x2=" + encodeNameParent_x2
      + "&parent_x3=" + encodeNameParent_x3;

      cardElements.push(<CatalogCard key={i++} name={keyObject} image={childrenEquipment[keyObject].img} pathUrl={pathUrl}/>);
    }
  }

  return (
    <>
      <div className='categories__history page__spacing'>
        <Link to="/catalog">Каталог оборудования</Link>
        <Link to={pathHistoryParent_x2}>/ {nameRusParent_x2}</Link>
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

export default In_3;