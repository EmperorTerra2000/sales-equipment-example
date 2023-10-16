import './CatCard.css';

function CatCard({ infoCard }) {
  return (
    <>
      <figure className="catcard">
        <a href={infoCard.link} className="catcard__link">
          <img className="catcard__img" src={infoCard.image} alt={infoCard.name} />
          <figcaption className="catcard__name">{infoCard.name}</figcaption>
        </a>
      </figure>
    </>
  );
}

export default CatCard;
