import "./App.css";
import Atributtion from "./components/Atribution";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  return (
    <main className="main_container">
      <img src="/images/mobile-design.jpg" alt="" />
      <Cards />
      <Form />
      <Atributtion />{" "}
    </main>
  );
}

export default App;
