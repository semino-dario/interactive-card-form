import { createContext, useState } from "react";
import "./App.css";
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

  return (
    <FormContext.Provider value={{ cardData, setCardData }}>
      <main className="main_container">
        <Cards />
        <Form />
      </main>
    </FormContext.Provider>
  );
}

export default App;
export { FormContext };
