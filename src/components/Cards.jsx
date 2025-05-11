import "../App.css";

export default function Cards() {
  return (
    <div className="cards_main_container">
      <div className="card_container card_back">
        <div className="card">
          <img
            className="img_card"
            src="/images/bg-card-back.png"
            alt="back image of the card"
          />
          <p className="cvc_data">000</p>
        </div>
      </div>
      <div className="card_container card_front">
        <div className="card">
          <img
            className="img_card"
            src="/images/bg-card-front.png"
            alt="front image of the card"
          />
          <img
            className="card_logo"
            src="/images/card-logo.svg"
            alt="logo image of the card"
          />
          <p className="card_number">0000 0000 0000 0000</p>
          <p className="card_name">JANE APPLESEED</p>
          <p className="card_date">00/00</p>
        </div>
      </div>
    </div>
  );
}
