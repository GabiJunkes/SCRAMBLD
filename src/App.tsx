import React, { useState } from "react";
import "./App.css";
import hkty from "./assets/hkty.jpeg";

function App() {
  const [word, setWord] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!word.trim()) return;
    // inserir lógica ao submeter a palavra (validar, contar, pontuar)
    console.log("submit:", word);
    setWord("");
  }

  return (
    <div className="page-root">
      <header id="categories" className="categories-row">
        <div className="category-left">
          <div
            className="cat_image"
            style={{ backgroundImage: `url(${hkty})`, backgroundSize: "cover" }}
          >
            Categoria 1
          </div>
        </div>

        <div className="category-pill">Categoria 2</div>
        <div className="category-pill">Categoria 3</div>
      </header>

      <main className="center-column">
        <h1 className="title">SCRAMBLE</h1>

        <form className="word-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="words"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="word-input"
            placeholder="Digite suas palavras!"
            aria-label="Digite suas palavras"
          />
          <button type="submit" className="go-button">
            GO
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;