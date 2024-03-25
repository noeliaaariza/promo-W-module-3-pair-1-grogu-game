import { useState, useEffect } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import Form from "./Form";
import GameStatus from "./GameStatus";
import Goods from "./Goods";
import Footer from "./Footer";
import Instructions from "./Instructions";
import Options from "./Options";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-dom/client";
import "../scss/App.scss";

function App() {


  const savedCookies = JSON.parse(localStorage.getItem("cookies")) || ["🍪", "🍪", "🍪"];
  const savedEggs = JSON.parse(localStorage.getItem("eggs")) || ["🥚", "🥚", "🥚"];
  const savedFrogs = JSON.parse(localStorage.getItem("frogs")) || ["🐸", "🐸", "🐸"];
  const savedGrogu = JSON.parse(localStorage.getItem("grogu")) || 0;
  const savedUserName = JSON.parse(localStorage.getItem("userName")) || "";

  const [countValue, setCountValue] = useState(savedGrogu);
  const [numberDice, setNumberDice] = useState(0);
  const [name, setName] = useState(savedUserName);

  const [eggs, setEggs] = useState(savedEggs);
  const [cookies, setCookies] = useState(savedCookies);
  const [frogs, setFrogs] = useState(savedFrogs);



  useEffect(() => {
    localStorage.setItem("cookies", JSON.stringify(cookies));
    localStorage.setItem("eggs", JSON.stringify(eggs));
    localStorage.setItem("frogs", JSON.stringify(frogs));
    localStorage.setItem("grogu", JSON.stringify(countValue));

    localStorage.setItem("userName", JSON.stringify(name));

  }, [cookies, eggs, frogs, countValue, name]);

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

  function handleReset() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/options" element={<Options />} />
        <Route path="/" element={

          <main className="page">
            <Board groguPosition={countValue} setGroguPosition={setCountValue} />
            <Form setName={setName} />
            <Dice onClickButton={handleClick} />
            <section>
              <GameStatus name={name} countValue={countValue} eggs={eggs} cookies={cookies} frogs={frogs} />
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
              <button className="restart-button" onClick={handleReset}>Reiniciar Juego</button>
            </section>
          </main>} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;