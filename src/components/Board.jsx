import Grogu from "./Grogu";
const Board = ({ groguPosition, setGroguPosition }) => {
  const arrayCells = new Array(7).fill();
  return (

    <section className="board">
      {arrayCells.map((item, index) => {

        console.log(index); // Movido el console.log fuera del map
        return groguPosition === index ? (
          <div className="cell" key={index}>
            {item}
            <Grogu />
          </div>

        ) : (
          <div className="cell" key={index}>
            {item}
          </div>
        );

      })}
    </section>
  );
};

export default Board;
