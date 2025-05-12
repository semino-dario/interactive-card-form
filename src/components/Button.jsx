import "../App.css";

export default function Button({ text, onClick }) {
  return (
    <button type="submit" onClick={onClick} className={"button_action"}>
      {text}
    </button>
  );
}
