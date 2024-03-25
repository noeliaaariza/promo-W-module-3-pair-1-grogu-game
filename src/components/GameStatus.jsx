
function GameStatus({ name, countValue, eggs, cookies, frogs }) {
    let statusMsg;

    if (countValue >= 6) {
        statusMsg = " Has Perdido, Grogu se ha comido todo tu cargamento!!"
    } else if (eggs.length == 0 && cookies.length == 0 && frogs.length == 0) {
        statusMsg = " Enhorabuena!! has descargado correctamente"
    } else {
        statusMsg = " En Curso"
    }

    return (

        <div className="game-status">{name}{statusMsg}</div>
    )
}

export default GameStatus