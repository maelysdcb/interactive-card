import { useState } from "react";
import FaceCard from "./FaceCard";
import BackCard from "./BackCard";
import Form from "./Form";

function App() {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });

  return (
    <main className="main">
      <section className="wrapper-left">
        <FaceCard inputValue={inputValue} setInputValue={setInputValue} />
        <BackCard inputValue={inputValue} setInputValue={setInputValue} />
      </section>
      <section className="wrapper-right">
        <Form inputValue={inputValue} setInputValue={setInputValue} />
      </section>
    </main>
  );
}

export default App;
