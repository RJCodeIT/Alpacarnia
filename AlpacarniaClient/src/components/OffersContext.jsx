import React, { createContext, useState, useContext, useCallback } from "react";

const OffersContext = createContext();

export const useOffers = () => useContext(OffersContext);

export const OffersProvider = ({ children }) => {
  const [offers, setOffers] = useState([]);

  const fetchOffers = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/offer/public`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch offers");
      }
      const data = await response.json();
      console.log("Fetched offers:", data);
      // Dodaj szczegółowy log struktury pierwszej oferty
      if (data && data.length > 0) {
        console.log("Struktura pierwszej oferty:", {
          id: data[0]._id,
          img: data[0].img,
          image: data[0].image,
          imagePath: data[0].imagePath,
          wszystkie_pola: Object.keys(data[0])
        });
        console.log("Wszystkie ścieżki obrazów:", data.map(offer => offer.img));
      }
      setOffers(data); // Update context with fetched offers
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  }, []);

  return (
    <OffersContext.Provider value={{ offers, fetchOffers }}>
      {children}
    </OffersContext.Provider>
  );
};
