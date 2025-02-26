import React from "react";
import '../../App.css';
import CardsProducts from "../CardsProducts";
import Footer from "../Footer";

export default function Products(){
    return ( 
    <>
        <div className="hero-container">
            <h1>PRODUKTY</h1>
        </div>
        <CardsProducts/>
        <Footer/>
    </>
    );
}