import { useContext, useState } from "react";
import Inputs from "./Inputs";
import { FormContext } from "../App";

export default function Form() {
  const { cardData, setCardData, error, setError } = useContext(FormContext);
  const [response, setResponse] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (response) {
      setResponse(false);
      setCardData({ name: "", number: "", month: "", year: "", cvc: "" });
    } else if (cardData.name !== "") {
      setResponse(true);
    } else {
      setError("Can't be blanck");
    }
  }

  return (
    <form className="form">
      <Inputs response={response} onClick={handleSubmit} />
    </form>
  );
}
