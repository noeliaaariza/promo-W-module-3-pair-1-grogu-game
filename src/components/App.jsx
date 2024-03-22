import { useState, useEffect } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import Form from "./Form";
import GameStatus from "./GameStatus";
import Goods from "./Goods";
import "../scss/App.scss";

function App() {
  const [countValue, setCountValue] = useState(0);
  const [numberDice, setNumberDice] = useState(0);
  const [name, setName] = useState("");

  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);

  let savedCookies;
  let savedEggs;
  let savedFrogs;

  useEffect(() => {
    savedCookies = JSON.parse(localStorage.getItem("cookies"));
    savedEggs = JSON.parse(localStorage.getItem("eggs"));
    savedFrogs = JSON.parse(localStorage.getItem("frogs"));
    const savedGrogu = JSON.parse(localStorage.getItem("grogu"));

    if (savedCookies) {
      setCookies(savedCookies);
    }
    if (savedEggs) {
      setEggs(savedEggs);
    }
    if (savedFrogs) {
      setFrogs(savedFrogs);
    }
    if (savedGrogu) {
      setCountValue(savedGrogu);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cookies", JSON.stringify(cookies));
    localStorage.setItem("eggs", JSON.stringify(eggs));
    localStorage.setItem("frogs", JSON.stringify(frogs));
    localStorage.setItem("grogu", JSON.stringify(countValue));

  }, [cookies, eggs, frogs, countValue]);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function rollDice() {
    let randomNumberDice = getRandomInt(1, 4);
    setNumberDice(randomNumberDice);

    switch (randomNumberDice) {
      case 1:
        setEggs(prevEggs => prevEggs.slice(1)); // Usar función de actualización del estado
        break;
      case 2:
        setCookies(prevCookies => prevCookies.slice(1)); // Usar función de actualización del estado
        break;
      case 3:
        setFrogs(prevFrogs => prevFrogs.slice(1)); // Usar función de actualización del estado
        break;
      case 4:
        setCountValue(prevCountValue => prevCountValue + 1); // Usar función de actualización del estado
        break;
      default:
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
          <Goods goods={cookies} />
        </section>
        <section className="goods-container">
          <Goods goods={eggs} />
        </section>
        <section className="goods-container">
          <Goods goods={frogs} />
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;