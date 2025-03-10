import React from "react";
import { Link } from "react-router-dom";

function CardItem({ src, text, label, path, onCardSelect }) {
  // Funkcja do prawidłowego tworzenia ścieżki do obrazka
  const getImagePath = (src) => {
    return `/alpacarnia${src}`;
  };

  return (
    <>
      <li className="cards__item" onClick={onCardSelect}>
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img src={getImagePath(src)} alt="Travel Image" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
