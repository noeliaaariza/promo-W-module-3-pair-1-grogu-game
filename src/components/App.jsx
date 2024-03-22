// Fichero src/components/App.jsx
import { useState, useEffect } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import Form from "./Form";
import GameStatus from "./GameStatus";
import Goods from "./Goods";
import "../scss/App.scss";

//import groguImg from '../images/grogu.webp';

function App() {
  const [countValue, setCountValue] = useState(0);
  const [numberDice, setNumberDice] = useState(0);
  const [name, setName] = useState("");

  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [frog, setFrog] = useState(["🐸", "🐸", "🐸"]);

  useEffect(() => {
    const savedCookies = localStorage.getItem("cookies");
    const savedEggs = localStorage.getItem("eggs");
    const savedFrogs = localStorage.getItem("frog");
    const savedGrogu = localStorage.getItem("grogu");
    if (savedCookies) {
      setCookies(savedCookies);
    }
    if (savedEggs) {
      setEggs(savedEggs);
    }
    if (savedFrogs) {
      setFrog(savedFrogs);
    }
    if (savedGrogu) {
      setCountValue(savedGrogu);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("eggs", eggs);
    localStorage.setItem("frog", frog);
    localStorage.setItem("grogu", countValue);
  }, [cookies, eggs, frog, countValue]);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function rollDice() {
    let randomNumberDice = getRandomInt(1, 4);
    setNumberDice(randomNumberDice);

    switch (randomNumberDice) {
      case 1:
        eggs.splice(0, 1);
        setEggs([...eggs]);
        break;
      case 2:
        cookies.splice(0, 1);
        setCookies([...cookies]);
        break;
      case 3:
        frog.splice(0, 1);
        setFrog([...frog]);
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
          <Goods goods={cookies} />
        </section>
        <section className="goods-container">
          <Goods goods={eggs} />
        </section>
        <section className="goods-container">
          <Goods goods={frog} />
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
