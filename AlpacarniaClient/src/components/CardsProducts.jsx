import React, { useEffect } from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { useNavigate } from "react-router-dom";
import { useOffers } from "./OffersContext";

function Cards({ onSelectOffer }) {
  const { offers, fetchOffers } = useOffers();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  const handleCardSelect = (card) => {
    navigate(`/alpacarnia/offer/${card._id}`);
  };

  const getImageUrl = (path) => {
    // Usuń początkowy slash jeśli istnieje
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return new URL(`../assets/${cleanPath}`, import.meta.url).href;
  };

  return (
    <div className="cards">
      <div className="cards__container">
        <h1>Szef kuchni Robert poleca:</h1>
        <div className="cards__wrapper">
          <ul className="cards__items">
            {offers.map((offer) => (
              <CardItem
                key={offer._id}
                src={getImageUrl(offer.img)}
                text={offer.text}
                label={offer.label}
                path={`/alpacarnia/offer/${offer._id}`}
                onClick={() => handleCardSelect(offer)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
