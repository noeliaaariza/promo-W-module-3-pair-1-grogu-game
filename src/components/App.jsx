// Fichero src/components/App.jsx
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import Form from "./Form";
import GameStatus from "./GameStatus";
import "../scss/App.scss";

//import groguImg from '../images/grogu.webp';

function App() {
  const [countValue, setCountValue] = useState(0);
  const [numberDice, setNumberDice] = useState(0);
  const [name, setName] = useState("");

  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [frog, setFrog] = useState(["🐸", "🐸", "🐸"]);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function rollDice() {
    let randomNumberDice = getRandomInt(1, 4);
    setNumberDice(randomNumberDice);

    switch (numberDice) {
      case 1:
        console.log("Eliminamos Huevos");
        break;
      case 2:
        console.log("Eliminamos Cookies");
        break;
      case 3:
        console.log("Eliminamos Ranas");
        break;
      case 4:
        console.log("Grogu avanza");
        setCountValue(countValue + 1);
        console.log(countValue);

        break;
    }
  }

  function handleClick(event) {
    rollDice(event);
  }

  return (
    <>
      <Header />
      <main className="page">

        <Board groguPosition={countValue} setGroguPosition={setCountValue} />
        <Form setName={setName} />
        <Dice onClickButton={handleClick} />
        <section>
          <GameStatus name={name} />
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
