import {useEffect, useState} from "react";
import { Board } from "./models/Board";
import BoardComponent from "./components/BoardComponent/BoardComponent";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";
import LostFiguresComponent from "./components/LostFiguresComponent/LostFiguresComponent";
import TimerComponent from "./components/TimerComponent/TimerComponent";
import "./styles/App.css";

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
          <TimerComponent
              restart={restart}
              currentPlayer={currentPlayer}
          />
          <BoardComponent
              board={board}
              setBoard={setBoard}
              currentPlayer={currentPlayer}
              swapPlayer={swapPlayer}
          />
          <div>
              <LostFiguresComponent
                  title="Black Figures dead:"
                  figures={board.lostBlackFigures}
              />
              <LostFiguresComponent
                  title="White Figures dead:"
                  figures={board.lostWhiteFigures}
              />
          </div>
      </div>
  );
};

export default App;
