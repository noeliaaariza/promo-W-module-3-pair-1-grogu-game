// Fichero src/components/App.jsx
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import '../scss/App.scss';

//import groguImg from '../images/grogu.webp';

function App() {

  let [countValue, setCountValue] = useState(1);
  const [numberDice, setNumberDice] = useState(0);

  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [frog, setFrog] = useState(["🐸", "🐸", "🐸"]);



  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



  function rollDice() {
    let randomNumberDice = getRandomInt(1, 4);
    console.log(randomNumberDice);
    switch (randomNumberDice) {
      case randomNumberDice = 1:
        console.log('Eliminamos Huevos');

        break;
      case randomNumberDice = 2:
        console.log('Eliminamos Cookies');
        break;
      case randomNumberDice = 3:
        console.log('Eliminamos Ranas');
        break;
      case randomNumberDice = 4:
        console.log('Grogu avanza');
        setCountValue(countValue++);
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
        <Board />

        <section>
          {/*<button className="dice">Lanzar Dado</button>*/}
          <Dice onClickButton={handleClick} />
          <div className="game-status">En curso</div>
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

