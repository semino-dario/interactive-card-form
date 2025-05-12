import { useContext } from "react";
import Inputs from "./Inputs";
import { FormContext } from "../App";

export default function Form() {
  const context = useContext(FormContext);

  function handleSubmit(formData) {
    context.setCardData(formData.get("name"));
  }

  return (
    <form className="form" action={handleSubmit}>
      <Inputs />
    </form>
  );
}
