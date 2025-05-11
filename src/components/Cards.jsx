import "../App.css";

export default function Cards() {
  return (
    <div className="cards_main_container">
      <div className="card_container card_back">
        <div className="card">
          <img className="img_card" src="/images/bg-card-back.png" alt="" />
          <p className="cvc_data">000</p>
        </div>
      </div>
      <div className="card_container card_front">
        <div className="card">
          <img className="img_card" src="/images/bg-card-front.png" alt="" />
        </div>
      </div>
    </div>
  );
}
