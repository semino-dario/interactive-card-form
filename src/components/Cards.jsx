import { useContext } from "react";
import "../App.css";
import { FormContext } from "../App";

export default function Cards() {
  const { cardData } = useContext(FormContext);

  return (
    <section className="cards_bg_container">
      <div className="cards_main_container">
        <div className="card_container card_back">
          <div className="card">
            <img
              className="img_card"
              src="/images/bg-card-back.png"
              alt="back image of the card"
            />
            <p className="cvc_data">
              {cardData.cvc === "" ? "000" : cardData.cvc}
            </p>
          </div>
        </div>
        <div className="card_container card_front">
          <div className="card">
            <img
              className="img_card shadow"
              src="/images/bg-card-front.png"
              alt="front image of the card"
            />
            <img
              className="card_logo"
              src="/images/card-logo.svg"
              alt="logo image of the card"
            />
            <p className="card_number card_text_big">
              {cardData.number === "" ? "0000 0000 0000 0000" : cardData.number}
            </p>
            <p className="card_name card_text_small">
              {cardData.name === "" ? "JANE APPLESEED" : cardData.name}
            </p>
            <p className="card_date card_text_small">
              {cardData.month === "" ? "00" : cardData.month}/
              {cardData.year === "" ? "00" : cardData.year}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
