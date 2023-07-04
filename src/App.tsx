import {useEffect, useState} from "react";
import { Board } from "./models/Board";
import BoardComponent from "./components/BoardComponent/BoardComponent";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";
import "./styles/App.css";
import LostFiguresComponent from "./components/LostFiguresComponent/LostFiguresComponent";

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  // the function to change player
  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }


  return (
    <div className="app">
       <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
       />
      <LostFiguresComponent
          title="Black figures"
          figures={board.lostBlackFigures}
      />
      <LostFiguresComponent
          title="White figures"
          figures={board.lostWhiteFigures}
      />
    </div>
  );
};

export default App;
