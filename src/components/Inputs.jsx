import "../App.css";
import Button from "./Button";

export default function Inputs() {
  return (
    <div className="inputs_container">
      <label htmlFor="name">Cardholder Name</label>
      <input placeholder="e.g. Jane Appleseed" type="text" id="name" />
      <label htmlFor="number">Card Number</label>
      <input placeholder="e.g. 1234 5678 9123 0000" type="number" />
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
              type="number"
              placeholder="MM"
              name="month"
              id="month"
            />
            <input
              className="input_date"
              type="number"
              placeholder="YY"
              name="year"
              id="year"
            />
          </div>
        </fieldset>
        <div className="input_cvc_container">
          <label htmlFor="cvc">CVC</label> <br />
          <input type="number" placeholder="e.g. 123" id="cvc" />
        </div>
      </div>
      <Button />
    </div>
  );
}
