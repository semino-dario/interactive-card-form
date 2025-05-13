import "../App.css";
import { useContext, useState } from "react";
import { FormContext } from "../App";
import Button from "./Button";
import { isNumeric, limitInputNumbers } from "../lib/utils";

export default function Form() {
  const { cardData, setCardData, error, setError } = useContext(FormContext);
  const [response, setResponse] = useState(false);

  const checkEmptyInputs = (obj) => {
    let allValid = true;
    for (const [key, value] of Object.entries(obj)) {
      if (value === "") {
        setError((prev) => ({ ...prev, [key]: "Can't be blank" }));
        allValid = false;
      }
    }
    return allValid;
  };

  const checkNumberInputs = (obj) => {
    let isValid = true;
    for (const [key, value] of Object.entries(obj)) {
      if (value !== "" && key !== "name") {
        if (!isNumeric(value)) {
          setError((prev) => ({
            ...prev,
            [key]: "Wrong format, numbers only",
          }));
          isValid = false;
        }
      }
    }
    return isValid;
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (response) {
      setResponse(false);
      setCardData({ name: "", number: "", month: "", year: "", cvc: "" });
    } else {
      const inputsContent = checkEmptyInputs(cardData);
      const inputsNumber = checkNumberInputs(cardData);

      if (inputsContent && inputsNumber) {
        setResponse(true);
      }
    }
  }

  const formatCardNumber = (value) => {
    const clean = value.replace(/\s+/g, "");
    const limited = limitInputNumbers(clean, 16);
    return limited.match(/.{1,4}/g)?.join(" ") || "";
  };

  const handleChange = (e) => {
    setError({});
    const input = e.target.value;
    if (e.target.name === "number") {
      const formatted = formatCardNumber(input);
      setCardData((prev) => ({ ...prev, number: formatted }));
    } else if (e.target.name === "month") {
      const limited = limitInputNumbers(input, 2);
      setCardData((prev) => ({ ...prev, month: limited }));
    } else if (e.target.name === "year") {
      const limited = limitInputNumbers(input, 2);
      setCardData((prev) => ({ ...prev, year: limited }));
    } else if (e.target.name === "cvc") {
      const limited = limitInputNumbers(input, 3);
      setCardData((prev) => ({ ...prev, cvc: limited }));
    } else {
      setCardData((prev) => ({ ...prev, name: e.target.value })), setError({});
    }
  };

  return (
    <form className="form">
      <div className="inputs_container">
        {!response ? (
          <>
            <label htmlFor="name">Cardholder Name</label>
            <input
              className={`${error.name && "error_border"}`}
              placeholder="e.g. Jane Appleseed"
              type="text"
              name="name"
              id="name"
              value={cardData.name}
              onChange={(e) => handleChange(e)}
            />
            <span className={"error_message"}>
              {error.name ? error.name : ""}
            </span>
            <label htmlFor="number">Card Number</label>
            <input
              className={`${error.number && "error_border"}`}
              placeholder="e.g. 1234 5678 9123 0000"
              name="number"
              type="text"
              value={cardData.number}
              onChange={handleChange}
            />
            <span className={"error_message"}>
              {error.number ? error.number : ""}
            </span>
            <div className="inputs_date_cvc_container">
              <fieldset>
                <div className="date_labels_container">
                  <legend>EXP. DATE&nbsp;</legend>
                  <label htmlFor="month">(MM/</label>
                  <label htmlFor="year"> YY)</label>
                </div>
                <div className="input_date_container">
                  <input
                    className={`${error.month && "error_border"} input_date`}
                    type="text"
                    placeholder="MM"
                    name="month"
                    id="month"
                    value={cardData.month}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    className={`${error.year && "error_border"} input_date`}
                    type="text"
                    placeholder="YY"
                    name="year"
                    id="year"
                    value={cardData.year}
                    onChange={handleChange}
                  />
                </div>
                <span className={"error_message"}>
                  {error.month ? error.month : error.year ? error.year : ""}
                </span>
              </fieldset>
              <div className="input_cvc_container">
                <label htmlFor="cvc">CVC</label> <br />
                <input
                  className={`${error.cvc && "error_border"}`}
                  type="text"
                  placeholder="e.g. 123"
                  name="cvc"
                  id="cvc"
                  value={cardData.cvc}
                  onChange={(e) => handleChange(e)}
                />
                <span className={"error_message"}>
                  {error.cvc ? error.cvc : ""}
                </span>
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
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}
