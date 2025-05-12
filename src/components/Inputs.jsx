import { useContext, useState } from "react";
import "../App.css";
import Button from "./Button";
import { FormContext } from "../App";

export default function Inputs() {
  const [response, setResponse] = useState(false);

  const { cardData, setCardData } = useContext(FormContext);

  const sendForm = (e) => {
    e.preventDefault();
    setResponse(!response);
    if (response)
      setCardData({ name: "", number: "", year: "", month: "", cvc: "" });
  };

  return (
    <div className="inputs_container">
      {!response ? (
        <>
          <label htmlFor="name">Cardholder Name</label>
          <input
            placeholder="e.g. Jane Appleseed"
            type="text"
            name="name"
            id="name"
            value={cardData.name}
            onChange={(e) =>
              setCardData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <label htmlFor="number">Card Number</label>
          <input
            placeholder="e.g. 1234 5678 9123 0000"
            name="number"
            type="text"
            value={cardData.number}
            onChange={(e) =>
              setCardData((prev) => ({ ...prev, number: e.target.value }))
            }
          />
          <div className="inputs_date_cvc_container">
            <fieldset>
              <div className="date_labels_container">
                <legend>EXP. DATE&nbsp;</legend>
                <label htmlFor="month">(MM/</label>
                <label htmlFor="year"> YY)</label>
              </div>
              <div className="input_date_container">
                <input
                  className="input_date"
                  type="text"
                  placeholder="MM"
                  name="month"
                  id="month"
                  value={cardData.month}
                  onChange={(e) =>
                    setCardData((prev) => ({ ...prev, month: e.target.value }))
                  }
                />
                <input
                  className="input_date"
                  type="text"
                  placeholder="YY"
                  name="year"
                  id="year"
                  value={cardData.year}
                  onChange={(e) =>
                    setCardData((prev) => ({ ...prev, year: e.target.value }))
                  }
                />
              </div>
            </fieldset>
            <div className="input_cvc_container">
              <label htmlFor="cvc">CVC</label> <br />
              <input
                type="text"
                placeholder="e.g. 123"
                name="cvc"
                id="cvc"
                value={cardData.cvc}
                onChange={(e) =>
                  setCardData((prev) => ({ ...prev, cvc: e.target.value }))
                }
              />
            </div>
          </div>
        </>
      ) : (
        <div className="response_container">
          <img src="/images/icon-complete.svg" alt="success icon" />
          <h1>Thank you!</h1>
          <p className="text_small">We have added your card details</p>
        </div>
      )}
      <Button
        text={!response ? "confirm" : "continue"}
        onClick={(e) => sendForm(e)}
      />
    </div>
  );
}
