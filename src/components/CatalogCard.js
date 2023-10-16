import { Link } from 'react-router-dom';

import './CatalogCard.css';

function CatalogCard({ name, image, pathUrl }) {
  let styleLink = {
    textDecoration: 'none',
    display: 'block',
    color: '#444444',
    fontSize: '12px'
  };

  return (
    <>
      <figure className="catalogCard">
        <a href="#" className="catalogCard__link">
          <img className="catalogCard__img" src={image} alt={name} />{' '}
        </a>
        <figcaption className="catalogCard__block">
          <a href="#" className="catalogCard__link-name">
            <p className="catalogCard__name">{name}</p>
          </a>
          <div className="catalogCard__section">
            <button className="catalogCard__request">Отправить запрос</button>
            <Link to={pathUrl} style={styleLink}>
              Подробнее
            </Link>
          </div>
        </figcaption>
      </figure>
    </>
  );
}

export default CatalogCard;
