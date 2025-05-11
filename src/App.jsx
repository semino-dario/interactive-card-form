import "./App.css";
import Atributtion from "./components/Atribution";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  return (
    <main>
      <div className="main_container">
        <Cards />
        <Form />
      </div>
      <Atributtion />
    </main>
  );
}

export default App;
