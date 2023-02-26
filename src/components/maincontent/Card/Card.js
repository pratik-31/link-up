import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Card.css";
import img1 from "../images/1.jpg";
import img2 from "../../../assets/pic2.jpg";
import img3 from "../../../assets/pic3.jpg";
import img4 from "../../../assets/pic4.jpg";
import img5 from "../../../assets/pic5.jpg";
import img6 from "../../../assets/pic6.jpg";
import img7 from "../../../assets/pic7.jpg";
import img8 from "../../../assets/pic8.jpg";
import img9 from "../../../assets/pic9.jpg";
import img10 from "../../../assets/pic10.jpg";
import img11 from "../../../assets/pic11.jpg";
import img12 from "../../../assets/pic12.jpg";
import img13 from "../../../assets/pic13.jpg";
import img14 from "../../../assets/pic14.jpg";
import img15 from "../../../assets/pic15.jpg";
import img16 from "../../../assets/pic16.jpg";
import img17 from "../../../assets/pic17.jpg";
import img18 from "../../../assets/pic18.jpg";
import img19 from "../../../assets/pic19.jpg";
import img20 from "../../../assets/pic20.jpg";
// import img2 from "../../../assets/pic2.jpg";
import data from "../../Individual/Cart/data";

function Card(props) {
  const baseURL = "";
  const handleClick = () => {
    window.location = `${baseURL}/individual`;
    console.log("Button clicked!");
  };

  return (
    <div className="cards__layout" onClick={handleClick}>
      <div className="cards">
        <div className="cardsimage__container">
          <div className="cards__name">{props.name}</div>
          <div className="cards__location">{props.location}</div>
          <img
            className="cards__image"
            src={require(`../../../assets/${props.coverImg}`)}
            alt="cards-image"
          />
        </div>
      </div>
      <div className="cards__details">
        <div className="cards__flex">
          <div className="cards__platform">{props.platform}</div>
          <div className="cards__price">{props.price}</div>
        </div>
        <div className="cards__description">{props.description}</div>
      </div>
    </div>
  );
}

export default Card;
