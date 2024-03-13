// Fichero src/components/App.jsx
import '../scss/App.scss';
//import groguImg from '../images/grogu.webp';

function App() {
  return (
    <>
      <header>
      <h1>¡Cuidado con Grogu!</h1>
    </header>
    <main className="page">
      <section className="board">
        <div className="cell"><div className="grogu">👣</div></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>

      <section>
        <button className="dice">Lanzar Dado</button>
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