import React, { useEffect } from "react";
import CardItem from "./CardItem";
import "./CardsProducts.css";
import { useNavigate } from "react-router-dom";
import { useOffers } from "./OffersContext";

function CardsProducts({ onSelectOffer }) {
  const { offers, fetchOffers } = useOffers();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  const handleCardSelect = (card) => {
    navigate(`/alpacarnia/offer/${card._id}`);
  };

  return (
    <div className="cards">
      <div className="cards__container">
        <h1>Szef kuchni Robert poleca:</h1>
        <div className="cards__wrapper">
          <ul className="cards__items">
            {Array.isArray(offers) && offers.length > 0 ? offers.map((offer, index) => {
              // Sprawdź czy offer jest obiektem i czy ma wymagane pola
              if (!offer || typeof offer !== 'object') return null;
              
              return (
                <CardItem
                  key={offer._id || Math.random()}
                  src={offer.src}
                  text={offer.text || ''}
                  label={offer.label || ''}
                  path={offer._id ? `/alpacarnia/offer/${offer._id}` : '#'}
                  onClick={() => offer._id && handleCardSelect(offer)}
                />
              );
            }) : <p>Brak dostępnych ofert</p>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProducts;
