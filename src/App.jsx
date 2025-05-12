import { createContext, useState } from "react";
import "./App.css";
import Atributtion from "./components/Atribution";
import Cards from "./components/Cards";
import Form from "./components/Form";

const FormContext = createContext();

function App() {
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    year: "",
    month: "",
    cvc: "",
  });
  const [error, setError] = useState("");

  return (
    <FormContext.Provider value={{ cardData, setCardData, error, setError }}>
      <div className="main_container">
        <Cards />
        <Form />
      </div>
    </FormContext.Provider>
  );
}

export default App;
export { FormContext };
